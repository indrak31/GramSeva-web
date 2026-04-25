import { Router } from "express";
import { body } from "express-validator";
import { getMyApplications, updateApplication } from "../controllers/applications.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);
router.get("/my", asyncHandler(getMyApplications));
router.patch(
  "/:id",
  body("status").isIn(["SHORTLISTED", "HIRED", "REJECTED", "WITHDRAWN"]).withMessage("Invalid application status"),
  handleValidation,
  asyncHandler(updateApplication),
);

export default router;
