import { Router } from "express";
import { body } from "express-validator";
import { enrollCourse, getMyCourses, listCourses, updateCourseProgress } from "../controllers/courses.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(listCourses));
router.use(authenticate);
router.post("/:id/enroll", requireRole("WORKER"), asyncHandler(enrollCourse));
router.get("/my", requireRole("WORKER"), asyncHandler(getMyCourses));
router.patch(
  "/:id/progress",
  requireRole("WORKER"),
  body("progress").isInt({ min: 0, max: 100 }).withMessage("Progress must be between 0 and 100"),
  handleValidation,
  asyncHandler(updateCourseProgress),
);

export default router;
