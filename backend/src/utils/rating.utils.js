import mongoose from "mongoose";
import { Rating } from "../models/Rating.js";
import { User } from "../models/User.js";

export async function recalculateProfileRating(userId) {
  const receiverObjectId = new mongoose.Types.ObjectId(userId);

  const aggregate = await Rating.aggregate([
    {
      $match: {
        receiverId: receiverObjectId,
      },
    },
    {
      $group: {
        _id: "$receiverId",
        averageStars: { $avg: "$stars" },
        totalRatings: { $sum: 1 },
      },
    },
  ]);

  const summary = aggregate[0] || { averageStars: 0, totalRatings: 0 };

  await User.findByIdAndUpdate(userId, {
    $set: {
      "profile.rating": Number(summary.averageStars || 0),
      "profile.totalRatings": Number(summary.totalRatings || 0),
    },
  });
}
