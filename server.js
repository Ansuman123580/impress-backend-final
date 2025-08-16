import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
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
app.use("/images", express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/upload", uploadRoute);

// Default route
app.get("/", (req, res) => {
    res.send("API working ✅");
});

// ❌ Ye hata do
// app.listen(port, () => {
//     console.log(`🚀 Server started on http://localhost:${port}`);
// });

// ✅ Vercel ke liye export
export default app;
