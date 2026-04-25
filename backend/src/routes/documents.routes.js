import { Router } from "express";
import { body } from "express-validator";
import { getMyDocuments, updateDocumentStatus, uploadDocument } from "../controllers/documents.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";
import { documentUpload } from "../middleware/upload.middleware.js";
import { handleValidation } from "../middleware/validate.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);
router.post("/upload", documentUpload, asyncHandler(uploadDocument));
router.get("/my", asyncHandler(getMyDocuments));
router.patch(
  "/:id/status",
  requireRole("ADMIN"),
  body("status").isIn(["VERIFIED", "REJECTED", "UNDER_REVIEW", "PENDING"]).withMessage("Invalid document status"),
  handleValidation,
  asyncHandler(updateDocumentStatus),
);

export default router;
