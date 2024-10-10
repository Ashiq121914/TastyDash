import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); // we can access the image at images/image_name now

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
