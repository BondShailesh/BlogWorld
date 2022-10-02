const express = require('express')
const redis = require('redis');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { json } = require('express');
const credRoute = require('./src/routes/cred.route');
var cors = require('cors');
const blogRouter = require('./src/routes/blog.route');
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/creds", credRoute);
app.use("/blogs",blogRouter);
mongoose.connect("mongodb+srv://Blogwala:Spider360@cluster0.yypldiw.mongodb.net/test").then(() => {
    app.listen(8080, () => { console.log('working') })
})