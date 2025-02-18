const SliderProduct = require("../models/SliderProducts");
// Get all products
const getSliderProducts = async (req, res) => {
  try {
    const products = await SliderProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};
module.exports = { getSliderProducts };
