import express from "express";
import {
  createToDo,
  getAllToDos,
  updateToDo,
  getToDo,
  deleteToDo,
} from "../controllers/todos.controller.js";
import { ToDoRoutes } from "../enums/routes.enum.js";
const router = express.Router();

router.get(ToDoRoutes.GET_ALL_TO_DOS, getAllToDos);
router.get(ToDoRoutes.GET_TO_BY_ID, getToDo);
router.post(ToDoRoutes.CREATE_TO_DO, createToDo);
router.post(ToDoRoutes.UPDATE_TO_DO, updateToDo);
router.get(ToDoRoutes.DELETE_TO_DO, deleteToDo);

export default router;
