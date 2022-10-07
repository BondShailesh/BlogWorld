const express = require("express");
const blogModel = require("../models/blog.model");
const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
    let blog = await blogModel.find()
    res.send(blog)
})

blogRouter.get("/:id", async (req, res) => {
    try {
        let blog1 = await blogModel.find({ creds: {_id:req.params.id} })
        if (blog1.length < 1) {
            let blog2 = await blogModel.find({ _id: req.params.id })
            return res.status(201).send(blog2);
        } else {
            return res.status(201).send(blog1);
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
})

blogRouter.post("/", async (req, res) => {
    try {
        let blog = await blogModel.create(req.body)
        res.status(201).send(blog);
    } catch (e) {
        res.send(e.message)
    }
})

blogRouter.post("/title", async (req, res) => {
    try {
        let {title} = req.body
        let blog = await blogModel.find({title:title})
        if(blog.length<1){
           return res.status(201).send("No result found");  
        }
        return res.status(201).send(blog);        
    } catch (e) {
        res.send(e.message)
    }
})

blogRouter.delete("/:id", async (req, res) => {
    try {
        let blog = await blogModel.deleteOne({ _id: req.params.id })
        res.status(201).send(blog);
    } catch (e) {
        res.status(401).send(e.message)
    }
})

blogRouter.patch("/:id", async (req, res) => {
    try {
        let blog = await blogModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
        res.send(blog)
    } catch (e) {
        res.status(401).send(e.message);
    }
})

module.exports = blogRouter