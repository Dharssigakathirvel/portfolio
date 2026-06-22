const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allow frontend URLs (local + deployed)
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:3000",
    "https://your-frontend.vercel.app"   // add your Vercel frontend URL here
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Routes
app.use("/api/messages", require("./routes/messageRoutes"));

// Example extra route for testing
app.get("/api/opportunities", (_req, res) => {
  res.json([
    { id: 1, title: "Internship", company: "ABC Corp" },
    { id: 2, title: "Hackathon", company: "XYZ Ltd" }
  ]);
});

// ✅ Health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// ✅ 404 fallback
app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
