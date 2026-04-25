import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  thumbnailUrl: { type: String, default: null },
  videoUrl: { type: String, default: null },
  category: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

applyJsonTransform(courseSchema);

export const Course = models.Course || model("Course", courseSchema);


