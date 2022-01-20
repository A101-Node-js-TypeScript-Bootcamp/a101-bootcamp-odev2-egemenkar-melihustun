const brandService = require('../services/brand')

exports.fetchBrand = async (req, res) => {
  const response = await brandService.fetch()
  res.send({
    status: true,
    data: response.brands,
  })
}

exports.fetchSingleBrand = async (req, res) => {
  const response = await brandService.fetchSingleBrand(req.params.name)
  res.send({
    status: true,
    data: response,
  });
}
