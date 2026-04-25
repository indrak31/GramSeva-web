import { Router } from "express";
import { body } from "express-validator";
import {
  applyToJob,
  createJob,
  deleteJob,
  getJobApplications,
  getMyJobs,
  listJobs,
  updateJob,
} from "../controllers/jobs.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(listJobs));
router.use(authenticate);
router.post(
  "/",
  requireRole("EMPLOYER", "ADMIN"),
  body("title").notEmpty().withMessage("Title is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("deadline").notEmpty().withMessage("Application deadline is required"),
  handleValidation,
  asyncHandler(createJob),
);
router.get("/my", requireRole("EMPLOYER", "ADMIN"), asyncHandler(getMyJobs));
router.patch("/:id", requireRole("EMPLOYER", "ADMIN"), asyncHandler(updateJob));
router.delete("/:id", requireRole("EMPLOYER", "ADMIN"), asyncHandler(deleteJob));
router.post("/:jobId/apply", requireRole("WORKER"), asyncHandler(applyToJob));
router.get("/:id/applications", requireRole("EMPLOYER", "ADMIN"), asyncHandler(getJobApplications));

export default router;
