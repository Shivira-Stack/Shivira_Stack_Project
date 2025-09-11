import express from "express";
import { registerUser, listUsers } from "../controller/authController.js";

const router = express.Router();

// router.post("/register", registerUser);
// router.get("/users", listUsers);

export default router;