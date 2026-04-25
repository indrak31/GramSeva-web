import { Router } from "express";
import { body } from "express-validator";
import { getAiLogs, getJobs, getPendingDocuments, getStats, getUsers, verifyDocument } from "../controllers/admin.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate, requireRole("ADMIN"));
router.get("/users", asyncHandler(getUsers));
router.get("/documents/pending", asyncHandler(getPendingDocuments));
router.patch(
  "/documents/:id/verify",
  body("status").isIn(["VERIFIED", "REJECTED"]).withMessage("Status must be VERIFIED or REJECTED"),
  handleValidation,
  asyncHandler(verifyDocument),
);
router.get("/jobs", asyncHandler(getJobs));
router.get("/stats", asyncHandler(getStats));
router.get("/ai/logs", asyncHandler(getAiLogs));

export default router;
