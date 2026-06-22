const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  methods: ["GET", "POST"],
}));
app.use(express.json());

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Routes
app.use("/api/messages", require("./routes/messageRoutes"));

// Health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// 404 fallback
app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));