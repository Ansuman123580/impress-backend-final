import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Storage set karo
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "impress_images",  // Cloudinary ke folder ka naam
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// ✅ POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  res.json({
    success: true,
    imageUrl: req.file.path, // yahi URL frontend me use hoga
  });
});

export default router;
