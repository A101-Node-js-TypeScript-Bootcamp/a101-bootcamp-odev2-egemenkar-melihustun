const express = require('express')
let router = express.Router()

let brandController = require('../../controllers/brand')

router.get('/', brandController.fetchBrand)

module.exports = router
