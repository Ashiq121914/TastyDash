import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://test:test1234@cluster0.n1ko8.mongodb.net/TastyDash")
    .then(() => {
      console.log("db connected");
    });
};
