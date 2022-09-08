const express = require('express')
const router = express.Router()


const packageJson = require('../../../package.json');

router.all('/', (req, res) => { res.json({value:`${packageJson.name} working test`})});

router.use('/test', require('./test'))

module.exports = router;