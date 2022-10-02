const express = require("express");

app = express();

app.get("/",(req,res)=>{
    res.send("User Details")
})

app.listen(8080,()=>{
    console.log("working");
})