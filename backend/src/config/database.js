import mongoose from "mongoose";

let connectionPromise;

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/gramseva";

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  return connectionPromise;
}

export { mongoose };
