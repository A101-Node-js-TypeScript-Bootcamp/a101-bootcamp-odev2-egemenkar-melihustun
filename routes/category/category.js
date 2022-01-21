const express = require('express')
let router = express.Router()

let categoryController = require('../../controllers/category')

//We define it as ':id' to redirect to a single category in the category route
router.get('/', categoryController.fetchCategories)
router.get('/:id', categoryController.singleFetchCategory)

module.exports = router
