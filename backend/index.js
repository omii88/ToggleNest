const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// =========================
// MIDDLEWARE
// =========================

// Parse JSON requests
app.use(express.json());

// CORS configuration
// Allows your React frontend to call the backend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // set your frontend URL in Railway env
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// =========================
// ROUTES
// =========================
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const workspaceRoutes = require("./routes/workspaceRoutes");
// const sprintRoutes = require("./routes/sprintRoutes");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/workspaces", workspaceRoutes);
// app.use("/api/sprints", sprintRoutes);
app.use("/api/users", userRoutes);
app.use("/api/team", teamRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ msg: "API working 🚀" });
});

// =========================
// SERVE REACT FRONTEND (OPTIONAL)
// =========================
// Only needed if you deploy your frontend on the same server
// Make sure your React build is in "frontend/build"
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

// =========================
// CONNECT TO MONGODB
// =========================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
