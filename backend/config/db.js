import mongoose from "mongoose";
import "dotenv/config";

let isConnected = false; // Track the connection state

export const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n1ko8.mongodb.net/TastyDash`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = connection.connections[0].readyState === 1; // 1 means connected
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection error");
  }
};
