export const UserRoutes = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
};

export const ToDoRoutes = {
  GET_ALL_TO_DOS: "/",
  GET_TO_BY_ID: "/:toDoId",
  CREATE_TO_DO: "/create",
  UPDATE_TO_DO: "/update",
  DELETE_TO_DO: "delete/:toDoId",
};

export const CategoriesRoutes = {
  CREATE_CATEGORY: "/create",
  GET_ALL_CATEGORIES: "/get-all-categories",
  GET_ALL_DEFAULT_CATEGORIES: "/get-all-default-categories",
  UPDATE_CATEGORY: "/update",
  DELETE_CATEGORY: "/delete",
};
