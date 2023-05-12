const express = require("express");
const EventType = require("../models/eventType");

const router = new express.Router();

router.post("/eventTypes", async (req, res) => {
  try {
    const event = new EventType({
      name: req.body.name,
    });

    const createdEventType = await event.save();
    res.status(201).send(createdEventType);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/eventTypes", async (req, res) => {
  try {
    const eventTypes = await EventType.find({});

    res.send(eventTypes);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/eventType", async (req, res) => {
  try {
    const { name } = req.query;

    const eventType = await EventType.findOne({ name });

    res.send(eventType);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
