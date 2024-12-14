import express from "express";
import {
  createUserAccount,
  loginIntoUserAccount,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", createUserAccount);
router.post("/signin", loginIntoUserAccount);

export default router;
