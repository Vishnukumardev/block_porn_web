import app from "./config/app.config.js";
import { env } from "./config/env.config.js";
import { connectDB } from "./config/database.config.js";

const startServer = async () => {
  await connectDB();

  try {
    app.listen(env.PORT, () => {
      console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (e) {
    console.log("Failed to connect to the server",e);
    process.exit(1);
  }
};

startServer();

