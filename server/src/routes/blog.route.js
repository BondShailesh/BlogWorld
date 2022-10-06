const express = require("express");
const blogModel = require("../models/blog.model");
const blogRouter = express.Router();
// const userdataRoute = require("../schema/userdataSchema");

blogRouter.get("/", async (req, res) => {
    let user = await blogModel.find()
    // .populate("cred", {
    //     password: 0, data: 0, __v: 0
    // })
    res.send(user)
})

blogRouter.get("/:id", async (req, res) => {
    try {
        let user1 = await blogModel.find({ cred: { _id: req.params.id } })
        if (user1.length < 1) {
            let user2 = await blogModel.find({ _id: req.params.id })
            res.send(user2);
        } else {
            res.send(user1);
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
})

blogRouter.post("/", async (req, res) => {
    try {
        console.log(req.body);
        let blog = await blogModel.create(req.body)
        res.send(blog);
    } catch (e) {
        res.send(e.message)
    }
})

blogRouter.delete("/:id", async (req, res) => {
    try {
        // let user1 = await blogModelfind({ cred: { _id: req.params.id } })
        // if (user1.length >= 1) {
        //     let userD = await blogModeldeleteMany({ cred: { _id: req.params.id } })
        //     res.send(userD);
        // } else {
            let blog = await blogModel.deleteOne({ _id: req.params.id })
            res.send(blog);
        // }

    } catch (e) {
        res.status(401).send(e.message)
    }
})

blogRouter.patch("/:id", async (req, res) => {
    try {
        let user = await blogModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
        res.send(user)
    } catch (e) {
        res.status(401).send(e.message);
        console.log("something");
    }
})

module.exports = blogRouter