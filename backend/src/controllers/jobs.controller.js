import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { broadcastLiveEvent } from "../services/liveEvents.service.js";
import { getPagination } from "../utils/pagination.utils.js";

async function attachApplicationCounts(jobDocuments) {
  const jobsWithCounts = await Promise.all(
    jobDocuments.map(async (job) => {
      const count = await Application.countDocuments({ jobId: job._id });
      return {
        ...job.toJSON(),
        _count: {
          applications: count,
        },
      };
    }),
  );

  return jobsWithCounts;
}

export async function listJobs(req, res) {
  const { category, state, district } = req.query;
  const { skip, limit, page } = getPagination(req.query);

  const filter = {
    status: "ACTIVE",
    ...(category ? { category } : {}),
    ...(state ? { state } : {}),
    ...(district ? { district } : {}),
  };

  const [jobs, total] = await Promise.all([
    Job.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("employer"),
    Job.countDocuments(filter),
  ]);

  return res.json({ jobs, page, total, pages: Math.ceil(total / limit) });
}

export async function createJob(req, res) {
  const {
    title,
    category,
    description,
    state,
    district,
    village,
    vacancies,
    salary,
    salaryUnit,
    requiredSkills,
    benefits,
    experienceLevel,
    startDate,
    endDate,
    deadline,
  } = req.body;

  const job = await Job.create({
    employerId: req.user.id,
    title,
    category,
    description,
    state,
    district,
    village: village || "",
    vacancies: Number(vacancies) || 1,
    salary: Number(salary),
    salaryUnit,
    requiredSkills: requiredSkills || [],
    benefits: benefits || [],
    experienceLevel: experienceLevel || "none",
    startDate: startDate ? new Date(startDate) : null,
    endDate: endDate ? new Date(endDate) : null,
    deadline: new Date(deadline),
  });

  broadcastLiveEvent({
    type: "job.created",
    jobId: job.id,
    employerId: req.user.id,
    state: job.state,
    district: job.district,
    status: job.status,
  });

  return res.status(201).json({ job });
}

export async function getMyJobs(req, res) {
  const jobs = await Job.find({ employerId: req.user.id }).sort({ createdAt: -1 });
  return res.json({ jobs: await attachApplicationCounts(jobs) });
}

export async function updateJob(req, res) {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job || (req.user.role !== "ADMIN" && String(job.employerId) !== req.user.id)) {
    return res.status(404).json({ error: "Job not found" });
  }

  const updates = {
    ...req.body,
    ...(req.body.salary !== undefined ? { salary: Number(req.body.salary) } : {}),
    ...(req.body.vacancies !== undefined ? { vacancies: Number(req.body.vacancies) } : {}),
    ...(req.body.startDate ? { startDate: new Date(req.body.startDate) } : {}),
    ...(req.body.endDate ? { endDate: new Date(req.body.endDate) } : {}),
    ...(req.body.deadline ? { deadline: new Date(req.body.deadline) } : {}),
  };

  const updated = await Job.findByIdAndUpdate(id, { $set: updates }, { new: true });

  broadcastLiveEvent({
    type: "job.updated",
    jobId: updated.id,
    employerId: String(updated.employerId),
    state: updated.state,
    district: updated.district,
    status: updated.status,
  });

  return res.json({ job: updated });
}

export async function deleteJob(req, res) {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job || (req.user.role !== "ADMIN" && String(job.employerId) !== req.user.id)) {
    return res.status(404).json({ error: "Job not found" });
  }

  await Promise.all([
    Job.findByIdAndDelete(id),
    Application.deleteMany({ jobId: id }),
  ]);

  broadcastLiveEvent({
    type: "job.deleted",
    jobId: id,
    employerId: String(job.employerId),
    state: job.state,
    district: job.district,
    status: job.status,
  });

  return res.json({ success: true });
}

export async function applyToJob(req, res) {
  const { jobId } = req.params;

  const job = await Job.findById(jobId);
  if (!job || job.status !== "ACTIVE") {
    return res.status(404).json({ error: "Job not available" });
  }

  const existingApplication = await Application.findOne({ jobId, workerId: req.user.id });
  if (existingApplication) {
    return res.status(409).json({ error: "You have already applied to this job" });
  }

  const application = await Application.create({
    jobId,
    workerId: req.user.id,
  });

  broadcastLiveEvent({
    type: "application.created",
    applicationId: application.id,
    jobId,
    employerId: String(job.employerId),
    workerId: req.user.id,
    status: application.status,
  });

  return res.status(201).json({ application });
}

export async function getJobApplications(req, res) {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job || (req.user.role !== "ADMIN" && String(job.employerId) !== req.user.id)) {
    return res.status(404).json({ error: "Job not found" });
  }

  const applications = await Application.find({ jobId: id })
    .sort({ appliedAt: -1 })
    .populate("worker")
    .populate({
      path: "job",
      populate: {
        path: "employer",
      },
    });

  return res.json({ applications });
}
