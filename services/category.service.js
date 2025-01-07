import { getConnection } from "../db/db_connect.js";

const handleCreateCategory = async (categoryName, userId) => {
  try {
    const connection = await getConnection();

    const query =
      "INSERT INTO categories (`user_id`, `name`, `created_at`, `updated_at`, `deleted_at`, `is_deleted`)VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 0);";

    const [rows] = await connection.query(query, [userId, categoryName]);
    connection.end();
    if (rows.affectedRows === 0) {
      return "ERROR";
    }
    if (rows.affectedRows > 0) {
      return "SUCCESS";
    }
  } catch (error) {
    throw error;
  }
};

const handleGetAllDefaultCategories = async () => {
  try {
    const connection = await getConnection();

    const query = "SELECT * FROM default_categories";

    const [rows] = await connection.query(query);

    return rows;
  } catch (error) {
    throw error;
  }
};

const handleGetAllCategories = async (userId) => {
  try {
    const connection = await getConnection();

    const query =
      "SELECT * FROM categories WHERE user_id = ? and is_deleted = 0";

    const [rows] = await connection.query(query, userId);

    return rows;
  } catch (error) {
    throw error;
  }
};

const handleUpdateCategory = async (updates) => {
  const connection = await getConnection();

  const query =
    "UPDATE categories SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?;";
  console.log(updates);

  const [rows] = await connection.query(query, [updates.name, updates.id]);
  if (rows.affectedRows === 0) return "ERROR";
  if (rows.affectedRows > 0) return "SUCCESS";
};

const handleDeleteCategory = async (id) => {
  console.log(id);
  const connection = await getConnection();

  const query =
    "UPDATE categories SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP, is_deleted = 1 WHERE id = ?;";

  const [rows] = await connection.query(query, [id]);
  if (rows.affectedRows === 0) return "ERROR";
  if (rows.affectedRows > 0) return "SUCCESS";
};

const handleGetCategory = async (
  category_id,
  is_category_default = true,
  user_id = null
) => {
  const connection = await getConnection();

  if (is_category_default) {
    const query = "SELECT * FROM default_categories WHERE id = ?";

    const [rows] = await connection.query(query, [category_id]);
    console.log(rows);
  } else {
    const query = "SELECT * FROM categories WHERE id = ? AND user_id = ?";

    const [rows] = await connection.query(query, [category_id, user_id]);
    console.log(rows);
  }
};
export {
  handleCreateCategory,
  handleGetAllCategories,
  handleUpdateCategory,
  handleDeleteCategory,
  handleGetAllDefaultCategories,
  handleGetCategory,
};
