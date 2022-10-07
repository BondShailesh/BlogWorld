const { customAlphabet } = require('nanoid');
const credModel = require("../models/cred.model")
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const argon2 = require("argon2")
const redis = require('redis');
const jwt = require("jsonwebtoken")
require('dotenv').config();
const { ideahub } = require('googleapis/build/src/apis/ideahub');

const client = redis.createClient({
    url: process.env.REDIS_URL
});
client.connect()

const CLIENT_ID = process.env.OAUTH_CLIENT_ID
const REFRESh = process.env.OAUTH_REFRESh
const SECRET_ID = process.env.OAUTH_SECRET_ID
const REDIRECT_URL = "https://developers.google.com/oauthplayground";

const credController = {
    create: async (creds) => {
        const { email, password, name, otp } = creds
        try {
            if (otp) {
                let token = await client.get(email);
                token = JSON.parse(token)
                if (token == otp) {
                    const hash = await argon2.hash(password);
                    const user = await credModel.create({ email, hash, name });
                    const tempToken = jwt.sign({ email, password, name }, "BLOG@#WALA", { expiresIn: "24 hr" })
                    const refreshToken = jwt.sign({}, "BLOG@#WALA", { expiresIn: "30 day" })
                    return {id:user._id, tempToken: tempToken, refreshToken: refreshToken }

                } else {
                    return "Wrong OTP or Expired"
                }
            } else {
                const generateOtp = customAlphabet("0123456789")
                let finalotp = generateOtp(5)
                await client.set(email, JSON.stringify(finalotp), { EX: 300 })

                //Email Sending (By Google)
                const client_Auth = new google.auth.OAuth2(CLIENT_ID, SECRET_ID, REDIRECT_URL)
                client_Auth.setCredentials({ refresh_token: REFRESh })
                const access_Token = await client_Auth.getAccessToken();

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: "Shaileshrajvicky555@gmail.com",
                        accessToken: access_Token,
                        clientId: CLIENT_ID,
                        clientSecret: SECRET_ID,
                        refreshToken: REFRESh
                    }
                });
                await transporter.sendMail({
                    from: "Shaileshrajvicky555@gmail.com",
                    to: email,
                    subject: "Otp for Open Blog",
                    html: `Grreting from OpenBlog 
                       your otp is ${finalotp}`
                }).then(() => {
                    return 'otp send'
                })
            }
        } catch (e) {
            return e.message
        }
    },//create Done
    login: async (creds) => {
        try {
            const { email, password } = creds
            var user5 = await credModel.findOne({ email })
            if (user5) {
                const verify = await argon2.verify(user5.hash, password);
                if (verify) {
                    const tempToken = jwt.sign({ id: user5._id, email: user5.email }, "SECRET11", { expiresIn: "24 hr" })
                    const refreshToken = jwt.sign({}, "SECRET11", { expiresIn: "30 day" });
                    return {id:user5._id, tempToken: tempToken, refreshToken: refreshToken }
                } else {
                    return "Email or password is wrong"
                }
            } else {
                return "User Not found"
            }
        } catch (e) {
            return e.message
        }
    },

    getNewToken: async (token) => {
        try {
            let verify = jwt.verify(token, "BLOG@#WALA")
            if (verify) {
                let newToken = jwt.sign({}, "BLOG@#WALA");
                return newToken
            } else {
                return "Token Expired"
            }
        } catch (e) {
            return e.message
        }
    },
    verifyToken: async (token) => {
        try {
            let verify = jwt.verify(token, "BLOG@#WALA")
            if (verify) {
                return true
            } else {
                return "Token Expired"
            }
        } catch (e) {
            return e.message
        }
    }
}
module.exports = { credController }