const express = require('express')
const redis = require('redis');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { json } = require('express');
var cors = require('cors');
require('dotenv').config();
const credRoute = require('./src/routes/cred.route');
const blogRouter = require('./src/routes/blog.route');
const PORT = process.env.PORT || 8080
const DATABASE_URL = process.env.DATABASE_URL
const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/creds", credRoute);
app.use("/blogs",blogRouter);

mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => { console.log('working') })
})