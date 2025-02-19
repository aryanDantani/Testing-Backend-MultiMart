const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(

  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    redirectUrl: { type: String },
    isActive: { type: Boolean, default: true },
  },

  { timestamps: true }

);

module.exports = mongoose.model("sliderproducts", sliderSchema);
