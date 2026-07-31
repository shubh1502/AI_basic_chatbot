import express from "express";
import upload from "../config/multer.js";
import uploadController from "../controllers/upload.controller.js";

const router = express.Router();

router.post(
    "/upload",
    upload.single("pdf"),
    uploadController
);

export default router;