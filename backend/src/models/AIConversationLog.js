import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
import { applyJsonTransform } from "./base.js";

const aiConversationLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", default: null, index: true },
  message: { type: String, required: true },
  response: { type: String, required: true },
  role: { type: String, default: "assistant" },
  createdAt: { type: Date, default: Date.now },
});

aiConversationLogSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

applyJsonTransform(aiConversationLogSchema);

export const AIConversationLog = models.AIConversationLog || model("AIConversationLog", aiConversationLogSchema);


