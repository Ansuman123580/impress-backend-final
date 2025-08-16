import express from "express";
import { addFood, listFood, removeFood, updateStock } from "../controllers/foodController.js";
import upload from "../middlewares/multer.js";

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.post("/update-stock", updateStock);

export default foodRouter;
