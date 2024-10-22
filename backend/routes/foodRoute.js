import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

const foodRouter = express.Router();

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Set up multer with S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "your-bucket-name", // Replace with your S3 bucket name
    acl: "public-read", // Adjust permissions as needed
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now().toString()}-${file.originalname}`);
    },
  }),
});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
