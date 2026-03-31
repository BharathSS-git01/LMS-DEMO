const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const app = express();
const uploadsDir = path.join(process.cwd(), "uploads");

function parseAllowedOrigins(value) {
  return String(value || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function isTrustedHostedFrontend(origin) {
  return /^https:\/\/[a-z0-9-]+(?:--[a-z0-9-]+)?\.(netlify\.app|vercel\.app)$/i.test(origin);
}

const configuredOrigins = [
  process.env.FRONTEND_URL,
  ...parseAllowedOrigins(process.env.ALLOWED_ORIGINS)
];

const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:4173",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:5500",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:4173",
  "http://127.0.0.1:5000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5500",
  ...configuredOrigins
]);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin) || isTrustedHostedFrontend(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

fs.mkdirSync(uploadsDir, { recursive: true });

// Middleware
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
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
