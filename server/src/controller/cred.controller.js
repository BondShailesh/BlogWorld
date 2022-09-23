const { customAlphabet } = require('nanoid');
const credModel = require("../models/cred.model")
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const argon2 = require("argon2")
const redis = require('redis');
const { ideahub } = require('googleapis/build/src/apis/ideahub');

const client = redis.createClient({
    url: 'redis://Shailesh:Mydilkosun*1@redis-19913.c212.ap-south-1-1.ec2.cloud.redislabs.com:19913',
});
client.connect()

const CLIENT_ID = "864162695124-lvumvohkmq0rpnsbi49phha2vv6sun98.apps.googleusercontent.com"
const REFRESh = '1//040h40topt9IgCgYIARAAGAQSNwF-L9IrXjjF-uZHFVQpzOzWrJ4tbWef2g-LhMkgzZkz1n_uhyg78mlv0Sw_KIXOWrW5l2mUKec'
const SECRET_ID = "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";
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
                    await credModel.create({ email, hash, name });
                    return "Successfull"
                } else {
                    return "Wrong OTP or Expired"
                }
            } else {
                const generateOtp = customAlphabet("0123456789")
                let finalotp = generateOtp(5)
                await client.set(email, finalotp, { EX: 300 })

                // Email Sending (By Google)
                const client_Auth = new google.auth.OAuth2(CLIENT_ID, SECRET_ID, REDIRECT_URL)
                client_Auth.setCredentials({ refresh_token: REFRESh })
                const access_Token = await client_Auth.getAccessToken();

                // const transporter = nodemailer.createTransport({
                //     service: 'gmail',
                //     auth: {
                //         type: 'OAuth2',
                //         user: "Shaileshrajvicky555@gmail.com",
                //         accessToken: access_Token,
                //         clientId: CLIENT_ID,
                //         clientSecret: SECRET_ID,
                //         refreshToken: REFRESh
                //     }
                // });
                // await transporter.sendMail({
                //     from: "Shaileshrajvicky555@gmail.com",
                //     to: "Shaileshrajvicky@gmail.com",
                //     subject: "kuch V",
                //     html: `Grreting from OpenBlog 
                //        your otp is ${finalotp}`
                // })
                return finalotp
            }

        } catch (e) {
            return e.message
        }
    },//create Done

    get: async () => {
        let token = await client.get("Shailesh")
        token = JSON.parse(token)
        return token
    }
}
module.exports = { credController }