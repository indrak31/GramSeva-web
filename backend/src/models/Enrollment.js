import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const enrollmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true, index: true },
  progress: { type: Number, default: 0 },
  completedAt: { type: Date, default: null },
  enrolledAt: { type: Date, default: Date.now },
});

enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

enrollmentSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

enrollmentSchema.virtual("course", {
  ref: "Course",
  localField: "courseId",
  foreignField: "_id",
  justOne: true,
});

applyJsonTransform(enrollmentSchema);

export const Enrollment = models.Enrollment || model("Enrollment", enrollmentSchema);


