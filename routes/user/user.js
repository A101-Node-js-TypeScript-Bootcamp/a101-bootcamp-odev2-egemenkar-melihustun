const express = require('express')
let router = express.Router()
let userController = require('../../controllers/User')

//We use the joiValidate path as middleware for data validation.
router.post('/login', userController.joiValidate, userController.login)

module.exports = router
