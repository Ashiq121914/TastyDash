import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
// const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); // we can access the image at images/image_name now
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(() => {
  console.log(`server started on http://localhost:${port}`);
});
