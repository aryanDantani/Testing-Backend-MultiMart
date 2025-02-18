const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});
const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    shortDesc: { type: String },
    description: { type: String },
    reviews: [reviewSchema],
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
