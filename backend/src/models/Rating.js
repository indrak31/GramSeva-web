import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const ratingSchema = new Schema({
  giverId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", default: null, index: true },
  stars: { type: Number, min: 1, max: 5, required: true },
  review: { type: String, default: null, maxlength: 500 },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

ratingSchema.virtual("giver", {
  ref: "User",
  localField: "giverId",
  foreignField: "_id",
  justOne: true,
});

ratingSchema.virtual("receiver", {
  ref: "User",
  localField: "receiverId",
  foreignField: "_id",
  justOne: true,
});

ratingSchema.virtual("job", {
  ref: "Job",
  localField: "jobId",
  foreignField: "_id",
  justOne: true,
});

applyJsonTransform(ratingSchema);

export const Rating = models.Rating || model("Rating", ratingSchema);


