const mongoose = require("mongoose");

const eventTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EventType = mongoose.model("EventType", eventTypeSchema);

module.exports = EventType;
