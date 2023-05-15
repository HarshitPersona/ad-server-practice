const express = require("express");
const Placement = require("../models/placement");
const { generateApiKey } = require("../utils/unique-ids");
const authPublisher = require("../middleware/auth");
const Asset = require("../models/asset");

const router = new express.Router();

// these apis would be triggered from within the app

router.post("/placements", async (req, res) => {
  try {
    const placement = new Placement({
      name: req.body.name,
      asset: req.body.asset,
    });
    const createdPlacement = await placement.save();

    res.status(201).send(createdPlacement);
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
