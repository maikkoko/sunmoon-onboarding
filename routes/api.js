const express = require("express");
const router = express.Router();
const CountdownTimer = require("../models/countdownTimer");

router.get("/logs", (req, res, next) => {
  // return all data
  /* CountdownTimer.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  }); */
  CountdownTimer.find()
    .then(data => res.json(data))
    .catch(next);
});

router.post("/logs", (req, res, next) => {
  if (req.body.log_type) {
    CountdownTimer.create(req.body)
      .then(() => res.json({"success": true, "message": "created"}))
      .catch(next);
  } else {
    res.json({
      error: "Please click the button."
    });
  }
});

router.delete("/logs/:id", (req, res, next) => {
  CountdownTimer.findOneAndDelete({"_id": req.params.id})
    .then(() => res.json({"success": true, "message": "deleted"}))
    .catch(next);
});

module.exports = router;