const express = require("express");
const Asset = require("../models/asset");
const Ad = require("../models/ad");

const router = new express.Router();

const getRandomInteger = (min, max) => {
  // Calculate the range of numbers
  var range = max - min;

  // Generate a random number within the range
  var randomNum = Math.floor(Math.random() * range);

  // Add the offset to get a number between m and n
  var result = randomNum + min;

  return result;
};

router.post("/ads", async (req, res) => {
  try {
    const ad = new Ad({
      format: "banner",
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      image_url: req.body.image_url,
      dimensions: req.body.dimensions,
    });

    const createdAd = await ad.save();
    res.status(201).send(createdAd);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/ads", async (req, res) => {
  try {
    const ads = await Ad.find({});

    res.send(ads);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/ad", async (req, res) => {
  try {
    const { format, dimensions } = req.query;
    const { width, height } = dimensions;
    const ads = await Ad.find({
      format,
      "dimensions.width": width,
      "dimensions.height": height,
    });
    if (ads.length === 0) res.status(404).send();
    const randomIndex = getRandomInteger(0, ads.length);

    res.send(ads[randomIndex]);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
