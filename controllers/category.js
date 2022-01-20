const categoryService = require('../services/category')

exports.fetchCategories = async (req, res) => {
  const response = await categoryService.fetchCategories()
  res.send({
    status: true,
    data: response.categories,
  })
}

exports.singleFetchCategory = async (req, res) => {
  const response = await categoryService.singleFetchCategory(req.params.id)
  res.send(response)
}
