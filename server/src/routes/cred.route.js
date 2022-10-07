const express = require("express");
const { credController } = require("../controller/cred.controller");
const credModel = require("../models/cred.model");
const credRoute = express.Router();

credRoute.get("/", async (req, res) => {
    let user = await credModel.find()
    res.send(user)
})

credRoute.get("/:id", async (req, res) => {
    try {
        let userEmail = await credModel.find({ email: req.params.id })
        if (userEmail.length >= 1) {
            res.send(userEmail);
        } else {
            let user = await credModel.find({ _id: req.params.id })
            res.send(user)
        }
    } catch (e) {
        console.log(e.message, "hthf");
        res.send("Credential Not Found")
    }
})

credRoute.post("/", async (req, res) => {
    try {
        const { email, password, name, otp } = req.body
        let user = await credModel.find({ email: email })
        if (user.length >= 1) {
            return res.send("user already exist");
        }
        const create = await credController.create({ email, password, name, otp })
        res.send(JSON.stringify(create));
    } catch (e) {
        res.send(e.message)
    }
})

credRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await credController.login({ email, password })
        res.status(201).send(JSON.stringify(user));
    } catch (e) {
        res.status(404).send(e.message)
    }
})

credRoute.post("/newtoken", async (req, res) => {
    try {
        const refresh_token = req.headers["authorization"].split(" ")[1]
        let newTok = await credController.getNewToken(refresh_token);
        res.send(newTok)
    } catch (e) {
        res.send(e.message)
    }
})

credRoute.post("/verifytoken", async (req, res) => {
    try {
        const refresh_token = req.headers["authorization"].split(" ")[1]
        let status = await credController.verifyToken(refresh_token);
        res.send(status)
    } catch (e) {
        res.send(e.message)
    }
})


credRoute.delete("/:id", async (req, res) => {
    try {
        let user = await credModel.deleteOne({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = credRoute