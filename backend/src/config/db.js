const mysql = require("mysql2");

function readEnv() {
  for (const key of arguments) {
    const value = process.env[key];
    if (value !== undefined && value !== "") {
      return value;
    }
  }

  return undefined;
}

function readNumber(value, fallbackValue) {
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : fallbackValue;
}

const dbConfig = {
  host: readEnv("DB_HOST", "MYSQLHOST"),
  port: readNumber(readEnv("DB_PORT", "MYSQLPORT"), 3306),
  user: readEnv("DB_USER", "MYSQLUSER"),
  password: readEnv("DB_PASSWORD", "MYSQLPASSWORD") || "",
  database: readEnv("DB_NAME", "MYSQLDATABASE"),
  waitForConnections: true,
  connectionLimit: readNumber(readEnv("DB_CONNECTION_LIMIT"), 10),
  queueLimit: 0,
  charset: readEnv("DB_CHARSET") || "utf8mb4"
};

const sslMode = String(readEnv("DB_SSL", "MYSQL_SSL") || "").toLowerCase();
if (["1", "true", "require", "required"].includes(sslMode)) {
  dbConfig.ssl = { rejectUnauthorized: false };
}

const missingDbSettings = ["host", "user", "database"].filter((key) => !dbConfig[key]);
if (missingDbSettings.length > 0) {
  throw new Error(`Missing required database configuration: ${missingDbSettings.join(", ")}`);
}

module.exports = mysql.createPool(dbConfig);
