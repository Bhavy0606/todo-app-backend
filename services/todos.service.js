import { getConnection } from "../db/db_connect.js";
import { RequestStatus } from "../enums/response.enum.js";
import { handleGetCategory } from "./category.service.js";

const handleCreateToDo = async (todo) => {
  try {
    const connection = await getConnection();

    const query =
      "INSERT INTO `todo_app_db`.`todos` (`user_id`, `category_id`, `is_category_default`, `title`, `description`, `status`, `priority`, `due_date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const {
      user_id,
      category_id,
      is_category_default,
      title,
      description,
      status,
      priority,
      due_date,
    } = todo;

    const [rows] = await connection.execute(query, [
      user_id,
      category_id,
      is_category_default,
      title,
      description,
      status,
      priority,
      due_date,
    ]);
    if (rows.affectedRows === 0) {
      return false;
    }
    if (rows.affectedRows > 0) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const handleGetAllToDos = async (userId) => {
  console.log(userId, "userid");

  const connection = await getConnection();

  // const query =
  //   "SELECT `todos`.`id`, `todos`.`user_id`, `todos`.`title`, `todos`.`description`, `todos`.`status`, `todos`.`priority`, `todos`.`due_date`, `todos`.`created_at`, `todos`.`updated_at`, `todos`.`is_deleted`, `todos`.`deleted_at`, `todos`.`category_id`, CASE WHEN `todos`.`is_category_default` = TRUE THEN `default_categories`.`name` ELSE `categories`.`name` END AS `category_name` FROM `todo_app_db`.`todos` LEFT JOIN `todo_app_db`.`categories` ON `todos`.`category_id` = `categories`.`id` AND `todos`.`is_category_default` = FALSE LEFT JOIN `todo_app_db`.`default_categories` ON `todos`.`category_id` = `default_categories`.`id` AND `todos`.`is_category_default` = TRUE WHERE `todos`.`user_id` = ?";
  const query =
    "SELECT `todos`.`id`, `todos`.`user_id`, `todos`.`title`, `todos`.`description`, `todos`.`status`, `todos`.`priority`, `todos`.`due_date`, `todos`.`created_at`, `todos`.`updated_at`, `todos`.`is_deleted`, `todos`.`deleted_at`, `todos`.`category_id`, CASE WHEN `todos`.`is_category_default` = TRUE THEN `default_categories`.`name` ELSE `categories`.`name` END AS `category_name` FROM `todo_app_db`.`todos` LEFT JOIN `todo_app_db`.`categories` ON `todos`.`category_id` = `categories`.`id` AND `todos`.`is_category_default` = FALSE LEFT JOIN `todo_app_db`.`default_categories` ON `todos`.`category_id` = `default_categories`.`id` AND `todos`.`is_category_default` = TRUE WHERE `todos`.`user_id` = ? AND `todos`.`is_deleted` = FALSE;";

  const [rows] = await connection.query(query, [userId]);
  return rows;
};

const handleGetOneToDo = async (userId, toDoId) => {
  const connection = await getConnection();

  const query =
    "SELECT `todos`.`id`, `todos`.`user_id`, `todos`.`title`, `todos`.`description`, `todos`.`status`, `todos`.`priority`, `todos`.`due_date`, `todos`.`created_at`, `todos`.`updated_at`, `todos`.`is_deleted`, `todos`.`deleted_at`, `todos`.`category_id`, CASE WHEN `todos`.`is_category_default` = TRUE THEN `default_categories`.`name` ELSE `categories`.`name` END AS `category_name` FROM `todo_app_db`.`todos` LEFT JOIN `todo_app_db`.`categories` ON `todos`.`category_id` = `categories`.`id` AND `todos`.`is_category_default` = FALSE LEFT JOIN `todo_app_db`.`default_categories` ON `todos`.`category_id` = `default_categories`.`id` AND `todos`.`is_category_default` = TRUE WHERE `todos`.`user_id` = ? AND `todos`.`id` = ?";

  const [rows] = await connection.query(query, [userId, toDoId]);
  return rows;
};

const handleUpdateToDo = async (updatedToDo, user_id) => {
  const connection = await getConnection();
  const {
    id,
    title,
    description,
    status,
    priority,
    due_date,
    category_id,
    is_category_default,
  } = updatedToDo;
  const formattedDueDate = new Date(due_date)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const query =
    "UPDATE `todo_app_db`.`todos` SET `category_id` = ?, `is_category_default` = ?, `title` = ?, `description` = ?, `status` = ?, `priority` = ?, `due_date` = ? WHERE `todos`.`user_id` = ? AND `todos`.`id` = ?";

  const [rows] = await connection.query(query, [
    category_id,
    is_category_default,
    title,
    description,
    status,
    priority,
    formattedDueDate,
    user_id,
    id,
  ]);

  if (!(rows.affectedRows > 0)) {
    return RequestStatus.ERROR;
  }
  if (rows.affectedRows > 0) {
    return RequestStatus.SUCCESS;
  }
};

const handleDeleteToDo = async (toDoId, userId) => {
  const connection = await getConnection();

  const query =
    "UPDATE `todo_app_db`.`todos` SET `is_deleted` = ?, `deleted_at` = NOW() WHERE `todos`.`user_id` = ? AND `todos`.`id` = ?";

  const [rows] = await connection.query(query, [true, userId, toDoId]);
  console.log(rows);

  if (!(rows.affectedRows > 0)) {
    return RequestStatus.ERROR;
  }
  if (rows.affectedRows > 0) {
    return RequestStatus.SUCCESS;
  }
};

export {
  handleCreateToDo,
  handleGetAllToDos,
  handleGetOneToDo,
  handleUpdateToDo,
  handleDeleteToDo,
};

/*
DELETE FROM `todo_app_db`.`todos`
WHERE <{where_expression}>;

*/
