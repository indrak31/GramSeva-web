import { Course } from "../models/Course.js";
import { Enrollment } from "../models/Enrollment.js";

export async function listCourses(req, res) {
  const courses = await Course.find({ isActive: true }).sort({ createdAt: -1 });
  return res.json({ courses });
}

export async function enrollCourse(req, res) {
  const { id } = req.params;

  const course = await Course.findById(id);
  if (!course || !course.isActive) {
    return res.status(404).json({ error: "Course not found" });
  }

  const existingEnrollment = await Enrollment.findOne({ userId: req.user.id, courseId: id });
  if (existingEnrollment) {
    return res.status(409).json({ error: "Already enrolled in this course" });
  }

  const enrollment = await Enrollment.create({
    userId: req.user.id,
    courseId: id,
  });

  return res.status(201).json({ enrollment });
}

export async function getMyCourses(req, res) {
  const enrollments = await Enrollment.find({ userId: req.user.id })
    .sort({ enrolledAt: -1 })
    .populate("course");

  return res.json({ enrollments });
}

export async function updateCourseProgress(req, res) {
  const { id } = req.params;
  const { progress } = req.body;

  const enrollment = await Enrollment.findOneAndUpdate(
    { userId: req.user.id, courseId: id },
    {
      $set: {
        progress: Number(progress),
        completedAt: Number(progress) >= 100 ? new Date() : null,
      },
    },
    { new: true },
  );

  if (!enrollment) {
    return res.status(404).json({ error: "Enrollment not found" });
  }

  return res.json({ enrollment });
}
