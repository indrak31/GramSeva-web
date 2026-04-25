import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const documentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  type: { type: String, enum: ["AADHAAR", "PAN", "DRIVING", "OTHER"], required: true },
  fileUrl: { type: String, required: true },
  fileName: { type: String, required: true },
  fileSize: { type: Number, required: true },
  status: { type: String, enum: ["PENDING", "UNDER_REVIEW", "VERIFIED", "REJECTED"], default: "PENDING" },
  rejectionReason: { type: String, default: null },
  uploadedAt: { type: Date, default: Date.now },
  verifiedAt: { type: Date, default: null },
});

documentSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

applyJsonTransform(documentSchema);

export const Document = models.Document || model("Document", documentSchema);


