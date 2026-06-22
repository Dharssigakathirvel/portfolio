const express = require("express");
const router  = express.Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const msg = new Message({ name, email, message });
    await msg.save();

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Message save error:", err);
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
});

module.exports = router;