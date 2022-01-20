const axios = require('axios')

exports.fetchCategories = async () => {
  const response = await axios.get(
    'https://api.trendyol.com/sapigw/product-categories'
  )

  return response.data
}
exports.singleFetchCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`
    )
    return {
      status: true,
      data: response.data,
    }
  } catch {
    return {
      status: false,
      message: 'böyle bir data mebcut değil',
    }
  }
}
