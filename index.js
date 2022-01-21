const express = require('express')
const app = express()
const endPoint = require('./routes/api')
const jwt = require('./helpers/jwt') //We use JWT package for tokenization
const errorHandler = require('./helpers/error-handler') //We integrate error handler to catch token errors

app.use(express.json())
app.use('/api', endPoint)
app.use(jwt())
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server is running')
})
