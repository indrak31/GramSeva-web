import { Router } from "express";
import { body } from "express-validator";
import { getMyRatings, rateEmployer, rateWorker } from "../controllers/ratings.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);
router.post(
  "/employer",
  requireRole("WORKER"),
  body("employerId").notEmpty().withMessage("Employer is required"),
  body("stars").isInt({ min: 1, max: 5 }).withMessage("Stars must be between 1 and 5"),
  handleValidation,
  asyncHandler(rateEmployer),
);
router.post(
  "/worker",
  requireRole("EMPLOYER", "ADMIN"),
  body("workerId").notEmpty().withMessage("Worker is required"),
  body("stars").isInt({ min: 1, max: 5 }).withMessage("Stars must be between 1 and 5"),
  handleValidation,
  asyncHandler(rateWorker),
);
router.get("/my", asyncHandler(getMyRatings));

export default router;
