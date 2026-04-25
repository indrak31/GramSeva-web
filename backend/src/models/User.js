import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const profileSchema = new Schema(
  {
    avatarUrl: { type: String, default: null },
    bio: { type: String, default: "", maxlength: 250 },
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
  },
  { _id: false },
);

const userSchema = new Schema(
  {
    mobile: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["WORKER", "EMPLOYER", "ADMIN"], required: true },
    name: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    village: { type: String, default: "" },
    language: { type: String, default: "en" },
    needsLanguageSelection: { type: Boolean, default: true },
    hasUploadedDocuments: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isDocVerified: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
    skills: { type: [String], default: [] },
    companyName: { type: String, default: null },
    businessType: { type: String, default: null },
    gstNumber: { type: String, default: null },
    website: { type: String, default: null },
    profile: { type: profileSchema, default: () => ({}) },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { minimize: false },
);

userSchema.pre("save", function setUpdatedAt() {
  this.updatedAt = new Date();
});

userSchema.pre("findOneAndUpdate", function setUpdatedAtForFindOneAndUpdate() {
  this.set({ updatedAt: new Date() });
});

userSchema.pre("updateOne", function setUpdatedAtForUpdateOne() {
  this.set({ updatedAt: new Date() });
});

userSchema.pre("updateMany", function setUpdatedAtForUpdateMany() {
  this.set({ updatedAt: new Date() });
});

applyJsonTransform(userSchema);

export const User = models.User || model("User", userSchema);
