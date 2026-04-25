import { Rating } from "../models/Rating.js";
import { recalculateProfileRating } from "../utils/rating.utils.js";

async function createRating({ giverId, receiverId, jobId, stars, review, tags }) {
  const existingRating = await Rating.findOne({
    giverId,
    receiverId,
    ...(jobId ? { jobId } : {}),
  });

  if (existingRating) {
    const error = new Error("Rating already submitted for this job");
    error.statusCode = 409;
    throw error;
  }

  const rating = await Rating.create({
    giverId,
    receiverId,
    jobId: jobId || null,
    stars: Number(stars),
    review: review || null,
    tags: tags || [],
  });

  await recalculateProfileRating(receiverId);
  await rating.populate(["receiver", "job"]);
  return rating;
}

export async function rateEmployer(req, res) {
  const { employerId, jobId, stars, review, tags } = req.body;
  const rating = await createRating({
    giverId: req.user.id,
    receiverId: employerId,
    jobId,
    stars,
    review,
    tags,
  });

  return res.status(201).json({ rating });
}

export async function rateWorker(req, res) {
  const { workerId, jobId, stars, review, tags } = req.body;
  const rating = await createRating({
    giverId: req.user.id,
    receiverId: workerId,
    jobId,
    stars,
    review,
    tags,
  });

  return res.status(201).json({ rating });
}

export async function getMyRatings(req, res) {
  const ratings = await Rating.find({ giverId: req.user.id })
    .sort({ createdAt: -1 })
    .populate("receiver")
    .populate("job");

  return res.json({ ratings });
}
