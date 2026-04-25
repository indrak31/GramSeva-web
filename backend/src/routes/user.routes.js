import { Router } from "express";
import { body } from "express-validator";
import { getCurrentUser, getLanguage, updateLanguage, updateProfile, uploadAvatar } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { avatarUpload } from "../middleware/upload.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);

router.get("/me", asyncHandler(getCurrentUser));
router.get("/language", asyncHandler(getLanguage));
router.patch(
  "/language",
  body("language").isIn(["en", "hi", "mr", "bn", "ta", "te", "kn", "pa", "gu"]).withMessage("Invalid language code"),
  handleValidation,
  asyncHandler(updateLanguage),
);
router.patch("/profile", asyncHandler(updateProfile));
router.post("/avatar", avatarUpload, asyncHandler(uploadAvatar));

export default router;
