const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    format: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    ctaUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    dimensions: {
      width: Number,
      height: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
