import {
  handleCreateCategory,
  handleGetAllCategories,
  handleUpdateCategory,
  handleDeleteCategory,
  handleGetAllDefaultCategories,
} from "../services/category.service.js";

const createCategory = async (req, res) => {
  const status = await handleCreateCategory(req.body.name, req.user.id);

  if (status === "ERROR")
    return res.status(401).json({
      success: false,
      message: "Internal Database Error",
    });

  if (status === "SUCCESS")
    return res.status(200).json({
      success: true,
      message: "Category created successfully",
    });
};

const getAllCategories = async (req, res) => {
  const categories = await handleGetAllCategories(req.user.id);
  if (categories) {
    return res.status(200).json({
      success: true,
      message: "Categories fetched.",
      data: { categories },
    });
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Internal Database error" });
  }
};
const getAllDefaultCategories = async (req, res) => {

  const defaultCategories = await handleGetAllDefaultCategories();
  console.log(defaultCategories);

  if (defaultCategories) {
    return res.status(200).json({
      success: true,
      message: "Categories fetched.",
      data: { defaultCategories },
    });
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Internal Database error" });
  }
};

const updateCategory = async (req, res) => {
  const updates = {
    id: req.body.id,
    name: req.body.name,
  };
  const status = await handleUpdateCategory(updates);

  if (status === "ERROR")
    return res.status(500).json({
      success: true,
      message: "Internal server error",
    });
  if (status === "SUCCESS")
    return res.status(200).json({
      success: true,
      message: "Category updated successfully.",
    });
};

const deleteCategory = async (req, res) => {
  const status = await handleDeleteCategory(req.body.id);

  if (status === "ERROR")
    return res.status(500).json({
      success: true,
      message: "Internal server error",
    });

  if (status === "SUCCESS")
    return res.status(200).json({
      success: true,
      message: "Category updated deleted.",
    });
};



export {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getAllDefaultCategories,
};
