import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getAllDefaultCategories,
} from "../controllers/categories.controller.js";
import { CategoriesRoutes } from "../enums/routes.enum.js";

const router = express.Router();

router.post(CategoriesRoutes.CREATE_CATEGORY, createCategory);
router.get(CategoriesRoutes.GET_ALL_CATEGORIES, getAllCategories);
router.get(
  CategoriesRoutes.GET_ALL_DEFAULT_CATEGORIES,
  getAllDefaultCategories
);
router.post(CategoriesRoutes.UPDATE_CATEGORY, updateCategory);
router.delete(CategoriesRoutes.DELETE_CATEGORY, deleteCategory);

export default router;
