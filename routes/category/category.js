const express = require('express')
let router = express.Router()

let categoryController = require('../../controllers/category')

router.get('/', categoryController.fetchCategories)
router.get('/:id', categoryController.singleFetchCategory) //single category /:id değisken alabilmek için

module.exports = router
