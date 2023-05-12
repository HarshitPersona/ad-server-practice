const express = require("express");
const Event = require("../models/event");

const router = new express.Router();

router.post("/events", async (req, res) => {
  try {
    const event = new Event({
      eventType: req.body.eventType,
      placement: req.body.placement,
      ad: req.body.ad,
    });

    const createdEvent = await event.save();
    res.status(201).send(createdEvent);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/events", async (req, res) => {
  try {
    const { eventType, placement, ad } = req.query;
    const events = await Event.find({ eventType, placement, ad });

    res.send(events);
  } catch (e) {
    res.status(500).send(e);
  }
});

// router.get("/event", async (req, res) => {
//   try {
//     const { name } = req.query;

//     const event = await Event.findOne({ name });

//     res.send(event);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

module.exports = router;
