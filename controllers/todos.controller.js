import { RequestStatus } from "../enums/response.enum.js";
import {
  handleCreateToDo,
  handleDeleteToDo,
  handleGetAllToDos,
  handleGetOneToDo,
  handleUpdateToDo,
} from "../services/todos.service.js";

const createToDo = async (req, res) => {
  console.log("creating todo....");
  const todo = { user_id: req.user.id, ...req.body };
  const status = await handleCreateToDo(todo);

  if (status)
    return res.status(200).json({
      success: true,
      message: "Successfully todo created.",
    });
  if (!status)
    return res.status(500).json({
      success: false,
      message: "Failed to insert todo. Please try again later.",
    });
};

const getAllToDos = async (req, res) => {
  const todos = await handleGetAllToDos(req.user.id);
  return res.status(201).json({
    message: "Success",
    data: todos,
  });
};
const getToDo = async (req, res) => {
  const { toDoId } = req.params;
  const userId = req.user.id;
  const toDo = await handleGetOneToDo(userId, toDoId);
  return res.status(201).json({
    success: true,
    message: "Successfully fetched todo data.",
    data: toDo,
  });
};

const updateToDo = async (req, res) => {
  console.log(req.body);
  const status = await handleUpdateToDo(req.body, req.user.id);
  if (status === RequestStatus.ERROR)
    return res.status(501).json({
      success: false,
      message: "Database internal error.",
    });
  if (status === RequestStatus.SUCCESS)
    return res.status(501).json({
      success: true,
      message: "ToDo Updated successfully.",
      data: {
        toDo: { id: req.body.id },
      },
    });
};

const deleteToDo = async (req, res) => {
  const status = await handleDeleteToDo(req.params.toDoId, req.user.id);
  if (status === RequestStatus.ERROR)
    return res.status(501).json({
      success: false,
      message: "Database internal error.",
    });
  if (status === RequestStatus.SUCCESS)
    return res.status(501).json({
      success: true,
      message: "ToDo Deleted successfully.",
      data: {
        toDo: { id: req.params.toDoId },
      },
    });
};

export { createToDo, getAllToDos, updateToDo, getToDo, deleteToDo };
