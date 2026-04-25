import { Router } from "express";
import { body } from "express-validator";
import { chat } from "../controllers/ai.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);
router.post(
  "/chat",
  body("message").notEmpty().withMessage("Message is required"),
  handleValidation,
  asyncHandler(chat),
);

export default router;
