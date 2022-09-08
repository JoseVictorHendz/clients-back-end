const express = require('express')
const dotenv = require('dotenv')
const app = express()
const bodyParser = require("body-parser");

dotenv.config()

const port = process.env.LOCAL

app.use(bodyParser.json({ extended: true })); 

app.use("/", require("./interface/Routes"))

app.listen(port, ()=> console.log(`listening on ${port}!`))