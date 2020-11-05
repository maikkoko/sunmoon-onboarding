const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for CountdownTimer
const CountdownTimerSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  log_type: {
    type: String,
    required: [true, "Log type is required"]
  }
});

const CountdownTimer = mongoose.model("countdowntimer", CountdownTimerSchema);

module.exports = CountdownTimer;