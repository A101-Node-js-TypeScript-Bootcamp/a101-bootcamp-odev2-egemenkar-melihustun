const expressJwt = require('express-jwt')

//The secret definition is a unique  ,
//Keep it private for security!!!
const secret = '62csdfhsdhshsfgh'

function jwt() {
  return expressJwt({ secret, algorithms: ['HS256'] }).unless({
    path: ['/api/user/login'],
  })
}

module.exports = jwt
