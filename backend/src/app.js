const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const app = express();
const uploadsDir = path.join(process.cwd(), "uploads");

fs.mkdirSync(uploadsDir, { recursive: true });

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Static uploads folder
app.use("/uploads", express.static(uploadsDir));

// Root test route
app.get("/", (req, res) => {
  res.send("LMS Backend Running");
});

// ================= ROUTES =================

// Import routes
const studentRoutes = require("./modules/students/students.routes");
const authRoutes = require("./modules/auth/auth.routes");
const coursesRoutes = require("./modules/courses/courses.routes");
const usersRoutes = require("./modules/users/users.routes");
const assignmentsRoutes = require("./modules/assignments/assignments.routes");
const quizzesRoutes = require("./modules/quizzes/quizzes.routes");
const certificatesRoutes = require("./modules/certificates/certificates.routes");
const notificationsRoutes = require("./modules/notifications/notifications.routes");
const adminRoutes = require("./modules/admin/admin.routes");

// Mount routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/assignments", assignmentsRoutes);
app.use("/api/quizzes", quizzesRoutes);
app.use("/api/certificates", certificatesRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/admin", adminRoutes);

// ================= EXPORT =================
module.exports = app;
