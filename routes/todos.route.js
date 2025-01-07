import express from "express";
import {
  createToDo,
  getAllToDos,
  updateToDo,
  getToDo,
  deleteToDo,
} from "../controllers/todos.controller.js";
const router = express.Router();

router.get("/", getAllToDos);
router.get("/:toDoId", getToDo);
router.post("/create", createToDo);
router.post("/update", updateToDo);
router.get("/delete/:toDoId", deleteToDo);

export default router;
