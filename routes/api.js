const express = require('express')
let router = express.Router()

const categoryEndpoint = require('./category/category')
const apiEndpoint = require('./brand/brand')

router.use('/category', categoryEndpoint)
router.use('/brand', apiEndpoint)

module.exports = router
