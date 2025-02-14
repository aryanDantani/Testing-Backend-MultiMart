const express = require("express");
const { getSliderProducts } = require("../controllers/sliderProductController");

const router = express.Router();

// Route to get all products
router.get("/", getSliderProducts);

module.exports = router;
