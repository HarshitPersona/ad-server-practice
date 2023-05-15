const express = require("express");
const Publisher = require("../models/publisher");
const { generateApiKey } = require("../utils/unique-ids");
const authPublisher = require("../middleware/auth");
const Asset = require("../models/asset");

const router = new express.Router();

// these apis would be triggered from within the app

router.post("/assets", authPublisher, async (req, res) => {
  try {
    const asset = new Asset({
      name: req.body.name,
      url: req.body.url,
      publisher: req.publisher,
    });
    const createdAsset = await asset.save();

    res.status(201).send(createdAsset);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.get("/assets", async (req, res) => {
  try {
    const assets = await Asset.find({});
    res.send(assets);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
