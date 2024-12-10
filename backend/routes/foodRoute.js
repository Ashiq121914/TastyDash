import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

// Configure multer for local storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Ensure the 'uploads' directory exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });
const upload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
const imageUpload = upload.single("image");

// Routes
foodRouter.post("/add", imageUpload, addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
