require("dotenv").config();

const app = require("./app");
const db = require("./config/db");

const PORT = Number(process.env.PORT) || 5000;
const requiredEnvVars = ["JWT_SECRET"];

async function startServer() {
  const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

  if (missingEnvVars.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
    process.exit(1);
  }

  try {
    const connection = await db.promise().getConnection();
    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
