const express = require('express')
let router = express.Router()

let brandController = require('../../controllers/brand')

router.get('/', brandController.fetchBrand)
router.get("/:name", brandController.fetchSingleBrand)

module.exports = router


//https://api.trendyol.com/sapigw/brands/by-name?name={brand-name}