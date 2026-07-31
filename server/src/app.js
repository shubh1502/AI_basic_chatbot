import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.routes.js";
import uploadRoutes from "./routes/upload.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes);
app.use("/upload", uploadRoutes); // Add this line for the upload route

export default app;
