const express = require("express")
app = express()

app.use(express())
const port = process.env.PORT
app.listen(port, ()=> console.log("connected") )