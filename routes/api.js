const express = require('express')
let router = express.Router()

const categoryEndpoint = require('./category/category')
const apiEndpoint = require('./brand/brand')
const userEndpoint = require('./user/user')

//We draw the path to the API endpoints
router.use('/category', categoryEndpoint)
router.use('/brand', apiEndpoint)
router.use('/user', userEndpoint)

module.exports = router
