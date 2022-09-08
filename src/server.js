const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.LOCAL

app.listen(port, ()=> console.log(`run in port ${port}!`))