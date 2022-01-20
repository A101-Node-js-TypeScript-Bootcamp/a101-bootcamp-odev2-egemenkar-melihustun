const axios = require("axios");

exports.fetch = async () => {
  const response = await axios.get("https://api.trendyol.com/sapigw/brands");

  return response.data;
};

exports.fetchSingleBrand = async (brand_name) => {
  const response = await axios.get(
    `https://api.trendyol.com/sapigw/brands/by-name?name=${brand_name}`
  );

  return response.data;
};
