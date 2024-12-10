import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

// app config
const app = express();
const port = 4100;
const HOST = "0.0.0.0";

// middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://tasty-dash.vercel.app",
      "https://tasty-dash-admin.vercel.app",
    ],
    methods: ["POST", "GET"],
  })
);
// app.use(cors());

// database connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});
app.listen(port, HOST, () => {
  console.log(`server started on http://localhost:${port}`);
});

export default app;
