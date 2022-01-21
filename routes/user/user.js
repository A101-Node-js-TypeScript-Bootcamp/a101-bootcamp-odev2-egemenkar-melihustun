const express = require('express')
let router = express.Router()
let userController = require('../../controllers/User')
const { authSchema } = require('../../helpers/joiValidation')

router.post(
  '/login',
  async (req, res, next) => {
    try {
      const { email, password } = req.body
      const result = await authSchema.validateAsync(req.body)
      console.log(result)
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },
  userController.login
)

module.exports = router
