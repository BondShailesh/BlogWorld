const express = require("express");
const { credController } = require("../controller/cred.controller");
const credModel = require("../models/cred.model");
const credRoute = express.Router();


credRoute.get("/", async (req, res) => {
    let user = await credModel.find()
    // const token = await credController.get()
    res.send(user)
})

// credRoute.get("/:id", async (req, res) => {
//     try{
//         let userEmail = await credRoute.find({ email: req.params.id }).populate("data")
//         if(userEmail.length>=1){           
//             res.send(userEmail);
//         }else{
//             let user = await credRoute.find({ _id: req.params.id }).populate("data")
//             res.send(user)
//         }
//     }catch(e){
//      res.send("Credential Not Found")
//     }

// })

credRoute.post("/", async (req, res) => {
    try {
        const { email, password, name ,otp} = req.body
        const create = await credController.create({ email, password, name, otp})
        res.send(create);
    } catch (e) {
        res.send(e.message)
    }
})

credRoute.post("/otp", async (req, res) => {
    try {
        const { otp } = req.body
        credController.verifyotp(otp)
        res.send("done")
    } catch (e) {
        res.send(e.message)
    }
})


// credRoute.delete("/:id", async (req, res) => {
//     try {
//         let user = await credRoute.deleteOne({ _id: req.params.id })
//         res.send(user)
//     } catch (e) {
//         res.send(e.message)
//         console.log(req.body);
//     }
// })

module.exports = credRoute