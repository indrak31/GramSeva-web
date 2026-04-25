import { Application } from "../models/Application.js";
import { broadcastLiveEvent } from "../services/liveEvents.service.js";

export async function getMyApplications(req, res) {
  const applications = await Application.find({ workerId: req.user.id })
    .sort({ appliedAt: -1 })
    .populate({
      path: "job",
      populate: {
        path: "employer",
      },
    });

  return res.json({ applications });
}

export async function updateApplication(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const application = await Application.findById(id).populate("job");
  if (!application) {
    return res.status(404).json({ error: "Application not found" });
  }

  if (req.user.role === "WORKER") {
    if (String(application.workerId) !== req.user.id || status !== "WITHDRAWN") {
      return res.status(403).json({ error: "Forbidden" });
    }
  }

  if (req.user.role === "EMPLOYER") {
    if (!application.job || String(application.job.employerId) !== req.user.id) {
      return res.status(403).json({ error: "Forbidden" });
    }
  }

  application.status = status;
  await application.save();

  broadcastLiveEvent({
    type: "application.updated",
    applicationId: application.id,
    jobId: application.jobId.toString(),
    employerId: application.job ? String(application.job.employerId) : null,
    workerId: String(application.workerId),
    status: application.status,
  });

  return res.json({ application });
}
