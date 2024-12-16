import express from "express";
import { createCategory,getCategory,updateCategory,deleteCategory } from "../controllers/categories.controller.js";

const router = express.Router();

router.post("/create",createCategory);
router.get("/get-all-categories",getCategory);
router.post("/update",updateCategory);
router.delete("/delete",deleteCategory);

export default router;
