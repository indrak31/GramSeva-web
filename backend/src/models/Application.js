import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const applicationSchema = new Schema({
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true, index: true },
  workerId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  status: {
    type: String,
    enum: ["PENDING", "SHORTLISTED", "HIRED", "REJECTED", "WITHDRAWN"],
    default: "PENDING",
  },
  appliedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

applicationSchema.index({ jobId: 1, workerId: 1 }, { unique: true });

applicationSchema.virtual("job", {
  ref: "Job",
  localField: "jobId",
  foreignField: "_id",
  justOne: true,
});

applicationSchema.virtual("worker", {
  ref: "User",
  localField: "workerId",
  foreignField: "_id",
  justOne: true,
});

applicationSchema.pre("save", function setUpdatedAt() {
  this.updatedAt = new Date();
});

applicationSchema.pre("findOneAndUpdate", function setUpdatedAtForFindOneAndUpdate() {
  this.set({ updatedAt: new Date() });
});

applicationSchema.pre("updateOne", function setUpdatedAtForUpdateOne() {
  this.set({ updatedAt: new Date() });
});

applicationSchema.pre("updateMany", function setUpdatedAtForUpdateMany() {
  this.set({ updatedAt: new Date() });
});

applyJsonTransform(applicationSchema);

export const Application = models.Application || model("Application", applicationSchema);
