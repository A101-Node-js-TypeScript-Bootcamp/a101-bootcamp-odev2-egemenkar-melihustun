const Joi = require('joi')

const authSchema = Joi.object({
  email: Joi.string().email().required().lowercase(),
  password: Joi.string().max(12).min(5).required(),
})

module.exports = {
  authSchema,
}
