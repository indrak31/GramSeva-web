import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const jobSchema = new Schema({
  employerId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  village: { type: String, default: "" },
  vacancies: { type: Number, default: 1 },
  salary: { type: Number, required: true },
  salaryUnit: { type: String, required: true },
  requiredSkills: { type: [String], default: [] },
  benefits: { type: [String], default: [] },
  experienceLevel: { type: String, default: "none" },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  deadline: { type: Date, required: true },
  status: { type: String, enum: ["ACTIVE", "PAUSED", "CLOSED", "DRAFT"], default: "ACTIVE" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

jobSchema.virtual("employer", {
  ref: "User",
  localField: "employerId",
  foreignField: "_id",
  justOne: true,
});

jobSchema.pre("save", function setUpdatedAt() {
  this.updatedAt = new Date();
});

jobSchema.pre("findOneAndUpdate", function setUpdatedAtForFindOneAndUpdate() {
  this.set({ updatedAt: new Date() });
});

jobSchema.pre("updateOne", function setUpdatedAtForUpdateOne() {
  this.set({ updatedAt: new Date() });
});

jobSchema.pre("updateMany", function setUpdatedAtForUpdateMany() {
  this.set({ updatedAt: new Date() });
});

applyJsonTransform(jobSchema);

export const Job = models.Job || model("Job", jobSchema);
