import { Router } from "express";
import { body } from "express-validator";
import {
  forgotPassword,
  register,
  resetPassword,
  sendOTP,
  signIn,
  verifyOTP,
} from "../controllers/auth.controller.js";
import { otpLimiter } from "../middleware/rateLimit.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.post(
  "/send-otp",
  otpLimiter,
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  handleValidation,
  asyncHandler(sendOTP),
);

router.post(
  "/verify-otp",
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  body("otp").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits"),
  handleValidation,
  asyncHandler(verifyOTP),
);

router.post(
  "/register",
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  body("role").isIn(["WORKER", "EMPLOYER"]).withMessage("Invalid role"),
  body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
  body("state").notEmpty().withMessage("State is required"),
  body("district").notEmpty().withMessage("District is required"),
  handleValidation,
  asyncHandler(register),
);

router.post(
  "/signin",
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  body("password").notEmpty().withMessage("Password is required"),
  handleValidation,
  asyncHandler(signIn),
);

router.post(
  "/forgot-password",
  otpLimiter,
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  handleValidation,
  asyncHandler(forgotPassword),
);

router.post(
  "/reset-password",
  body("mobile").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid Indian mobile number"),
  body("otp").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits"),
  body("newPassword").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  handleValidation,
  asyncHandler(resetPassword),
);

export default router;
