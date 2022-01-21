const express = require('express')
let router = express.Router()

let brandController = require('../../controllers/brand')

//We define it as ':name' to redirect to a single brand in the brand route
router.get('/', brandController.fetchBrand)
router.get('/:name', brandController.fetchSingleBrand)

module.exports = router
