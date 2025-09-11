import express from "express";
import { checkAuthUserTable, forgotPassword, login, logout, resendOtp, resetPassword, signup, verifyOtp } from "../../controllers/auth/authController.js";
import { checkSession } from "../../middleware/sessionMiddleware.js";

const router = express.Router();

// Route to check and create auth_user table
router.get("/check-table", checkAuthUserTable);
router.get("/session", checkSession);
router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;