import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n1ko8.mongodb.net/TastyDash`
    )
    .then(() => {
      console.log("db connected");
    });
};
