import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const otpSchema = new Schema({
  mobile: { type: String, required: true, index: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  used: { type: Boolean, default: false },
  verifiedAt: { type: Date, default: null },
  consumedFor: { type: String, default: null },
  createdAt: { type: Date, default: Date.now, index: true },
});

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
applyJsonTransform(otpSchema);

export const OTP = models.OTP || model("OTP", otpSchema);



