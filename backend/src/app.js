const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const app = express();
const uploadsDir = path.join(process.cwd(), "uploads");
const allowedOrigins = new Set(
  [
    process.env.FRONTEND_URL,
    ...(process.env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:8080",
    "http://127.0.0.1:8080"
  ].filter(Boolean)
);

fs.mkdirSync(uploadsDir, { recursive: true });

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed by CORS"));
  },
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
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
