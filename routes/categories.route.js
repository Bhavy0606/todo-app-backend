import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getAllDefaultCategories,
} from "../controllers/categories.controller.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get-all-categories", getAllCategories);
router.get("/get-all-default-categories", getAllDefaultCategories);
router.post("/update", updateCategory);
router.delete("/delete", deleteCategory);

export default router;
