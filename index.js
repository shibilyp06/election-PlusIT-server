const express = require("express")
const app = express()
require("dotenv").config()
const port = 5000
const mongoose = require("./config/config")

app.use(express.json())

app.listen(port,()=>{
    console.log("server connected");
})