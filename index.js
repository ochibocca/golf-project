const express = require("express")
app = express()
require("dotenv").config()
app.use(express.json())
const mongo= require("./models/mongo");
mongo()

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`port connected ${port}`) )