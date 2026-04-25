import { AIConversationLog } from "../models/AIConversationLog.js";
import { Application } from "../models/Application.js";
import { Document } from "../models/Document.js";
import { Job } from "../models/Job.js";
import { User } from "../models/User.js";

async function attachApplicationCounts(jobDocuments) {
  return Promise.all(
    jobDocuments.map(async (job) => ({
      ...job.toJSON(),
      _count: {
        applications: await Application.countDocuments({ jobId: job._id }),
      },
    })),
  );
}

export async function getUsers(req, res) {
  const users = await User.find().sort({ createdAt: -1 });
  return res.json({ users });
}

export async function getPendingDocuments(req, res) {
  const documents = await Document.find({ status: { $in: ["PENDING", "UNDER_REVIEW"] } })
    .sort({ uploadedAt: 1 })
    .populate("user");

  return res.json({ documents });
}

export async function verifyDocument(req, res) {
  const { id } = req.params;
  const { status, reason } = req.body;

  const document = await Document.findByIdAndUpdate(
    id,
    {
      $set: {
        status,
        rejectionReason: reason || null,
        verifiedAt: status === "VERIFIED" ? new Date() : null,
      },
    },
    { new: true },
  );

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  if (status === "VERIFIED") {
    await User.findByIdAndUpdate(document.userId, {
      $set: {
        isDocVerified: true,
        isVerified: true,
        hasUploadedDocuments: true,
      },
    });
  }

  return res.json({ document });
}

export async function getJobs(req, res) {
  const jobs = await Job.find().sort({ createdAt: -1 }).populate("employer");
  return res.json({ jobs: await attachApplicationCounts(jobs) });
}

export async function getStats(req, res) {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [totalUsers, activeJobs, applicationsToday, newSignups] = await Promise.all([
    User.countDocuments(),
    Job.countDocuments({ status: "ACTIVE" }),
    Application.countDocuments({ appliedAt: { $gte: todayStart } }),
    User.countDocuments({ createdAt: { $gte: todayStart } }),
  ]);

  return res.json({ stats: { totalUsers, activeJobs, applicationsToday, newSignups } });
}

export async function getAiLogs(req, res) {
  const logs = await AIConversationLog.find()
    .sort({ createdAt: -1 })
    .limit(100)
    .populate("user");

  return res.json({ logs });
}
