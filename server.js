import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Routes
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import uploadRoute from "./routes/uploadRoute.js";

// App config
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*", // Development: allow all origins; change in production
    credentials: true
}));

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/upload", uploadRoute);

// Default route
app.get("/", (req, res) => {
    res.send("API working ✅");
});

// ✅ Vercel ke liye export
export default app;
