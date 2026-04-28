import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const port = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    console.log("Starting server...");

    //await connectDatabase();
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`GramSeva backend running on port ${port}`);
    });

  } catch (error) {
    console.error("Server failed to start:", error);
  }
};

startServer();