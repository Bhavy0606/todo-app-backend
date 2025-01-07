import express from "express";
import {
  createUserAccount,
  loginIntoUserAccount,
} from "../controllers/user.controller.js";
import { UserRoutes } from "../enums/routes.enum.js";
const router = express.Router();

router.post(UserRoutes.SIGN_UP, createUserAccount);
router.post(UserRoutes.SIGN_IN, loginIntoUserAccount);

export default router;
