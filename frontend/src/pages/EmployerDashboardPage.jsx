import {
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Pencil,
  Settings,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/client";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import GramAI from "../components/gramai/GramAI";
import ProfileEditModal from "../components/dashboard/ProfileEditModal";
import { getDashboardCopy } from "../data/dashboardCopy";
import { indiaLocations, stateOptions } from "../data/india";
import { employerBusinessTypes, jobCategories, skillOptions } from "../data/options";
import { useAuthStore } from "../stores/authStore";
import { useDashboardStore } from "../stores/dashboardStore";
import { useLanguageStore } from "../stores/languageStore";
import { useLiveWorkflow } from "../hooks/useLiveWorkflow";
import { formatCurrency, getEntityId, getInitials, resolveAssetUrl } from "../utils/app";

const applicationStatusStyles = {
  PENDING: "bg-amber-500/15 text-amber-200",
  SHORTLISTED: "bg-sky-500/15 text-sky-200",
  HIRED: "bg-emerald-500/15 text-emerald-200",
  REJECTED: "bg-rose-500/15 text-rose-200",
};

function getNavItems(copy) {
  return [
    { id: "about", label: copy.about, icon: Building2 },
    { id: "post-job", label: copy.postJob, icon: BriefcaseBusiness },
    { id: "jobs", label: copy.postedJobs, icon: ClipboardList },
    { id: "applications", label: copy.employerApplications, icon: Users },
    { id: "ratings", label: copy.rateWorkers, icon: Star },
    { id: "settings", label: copy.settings, icon: Settings },
    { id: "gram-ai", label: copy.ai, icon: Sparkles },
  ];
}

const initialJobForm = {
  title: "",
  category: jobCategories[0],
  description: "",
  state: stateOptions[0],
  district: indiaLocations[stateOptions[0]][0],
  village: "",
  vacancies: 1,
  salary: "",
  salaryUnit: "per_day",
  requiredSkills: [],
  startDate: "",
  endDate: "",
  deadline: "",
  experienceLevel: "none",
  benefits: [],
};

export default function EmployerDashboardPage() {
  const { user, token } = useAuthStore();
  const { employerSection: section, setEmployerSection: setSection } = useDashboardStore();
  const { language } = useLanguageStore();
  const copy = getDashboardCopy(language);
  const navItems = useMemo(() => getNavItems(copy), [copy]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [jobForm, setJobForm] = useState(initialJobForm);
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [applications, setApplications] = useState([]);
  const [ratingDraft, setRatingDraft] = useState({ stars: 5, review: "", tags: [] });
  const liveRefreshTimeoutRef = useRef(null);

  const districtOptions = indiaLocations[jobForm.state] || [];
  const selectedJob = jobs.find((job) => getEntityId(job) === selectedJobId) || jobs[0];

  const loadJobs = async ({ preferredJobId = null, silent = false } = {}) => {
    try {
      const jobsResponse = await api.get("/jobs/my");
      const nextJobs = jobsResponse.data.jobs || [];
      setJobs(nextJobs);

      const availableJobIds = new Set(nextJobs.map((job) => getEntityId(job)).filter(Boolean));
      const nextSelectedJobId = preferredJobId && availableJobIds.has(preferredJobId)
        ? preferredJobId
        : selectedJobId && availableJobIds.has(selectedJobId)
          ? selectedJobId
          : getEntityId(nextJobs[0]);

      setSelectedJobId(nextSelectedJobId || null);
      return nextSelectedJobId || null;
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load posted jobs");
      }
      return null;
    }
  };

  const loadApplicationsForJob = async (jobId, { navigate = false, silent = false } = {}) => {
    const normalizedJobId = getEntityId(jobId);

    if (!normalizedJobId) {
      setApplications([]);
      if (navigate) {
        setSection("applications");
      }
      return [];
    }

    try {
      setSelectedJobId(normalizedJobId);
      const { data } = await api.get(`/jobs/${normalizedJobId}/applications`);
      setApplications(data.applications || []);
      if (navigate) {
        setSection("applications");
      }
      return data.applications || [];
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load applications");
      }
      return [];
    }
  };

  const refreshEmployerWorkflow = async ({
    preferredJobId = null,
    includeApplications = false,
    silent = false,
  } = {}) => {
    const nextSelectedJobId = await loadJobs({ preferredJobId, silent });

    if (!includeApplications) {
      return;
    }

    if (!nextSelectedJobId) {
      setApplications([]);
      return;
    }

    await loadApplicationsForJob(nextSelectedJobId, { silent });
  };

  useEffect(() => {
    if (section === "applications" || section === "ratings") {
      refreshEmployerWorkflow({
        preferredJobId: selectedJobId,
        includeApplications: true,
      });
      return;
    }

    refreshEmployerWorkflow({
      preferredJobId: selectedJobId,
      includeApplications: false,
    });
  }, [section]);

  useEffect(() => {
    if (!["jobs", "applications", "ratings"].includes(section)) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      refreshEmployerWorkflow({
        preferredJobId: selectedJobId,
        includeApplications: section === "applications" || section === "ratings",
        silent: true,
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [section, selectedJobId]);
  useEffect(() => () => {
    if (liveRefreshTimeoutRef.current) {
      window.clearTimeout(liveRefreshTimeoutRef.current);
    }
  }, []);

  const queueLiveRefresh = (preferredJobId) => {
    if (liveRefreshTimeoutRef.current) {
      window.clearTimeout(liveRefreshTimeoutRef.current);
    }

    liveRefreshTimeoutRef.current = window.setTimeout(() => {
      refreshEmployerWorkflow({
        preferredJobId: preferredJobId || selectedJobId,
        includeApplications: section === "applications" || section === "ratings",
        silent: true,
      });
    }, 250);
  };

  useLiveWorkflow({
    token,
    enabled: Boolean(user?.id),
    onEvent: (event) => {
      if (event.employerId !== user?.id) {
        return;
      }

      if (event.type.startsWith("job.") || event.type.startsWith("application.")) {
        queueLiveRefresh(event.jobId);
      }
    },
  });

  const toggleSkill = (skill) => {
    setJobForm((current) => ({
      ...current,
      requiredSkills: current.requiredSkills.includes(skill)
        ? current.requiredSkills.filter((item) => item !== skill)
        : [...current.requiredSkills, skill],
    }));
  };

  const toggleBenefit = (benefit) => {
    setJobForm((current) => ({
      ...current,
      benefits: current.benefits.includes(benefit)
        ? current.benefits.filter((item) => item !== benefit)
        : [...current.benefits, benefit],
    }));
  };

  const handleCreateJob = async () => {
    try {
      const { data } = await api.post("/jobs", {
        ...jobForm,
        salary: Number(jobForm.salary),
        vacancies: Number(jobForm.vacancies),
      });

      const createdJob = data.job;
      const createdJobId = getEntityId(createdJob);
      setJobs((current) => [
        { ...createdJob, id: createdJobId, _count: { applications: 0 } },
        ...current.filter((job) => getEntityId(job) !== createdJobId),
      ]);
      setSelectedJobId(createdJobId);
      setApplications([]);
      toast.success("Job posted successfully");
      setJobForm(initialJobForm);
      setSection("jobs");
      await refreshEmployerWorkflow({
        preferredJobId: createdJobId,
        includeApplications: false,
        silent: true,
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to post job");
    }
  };

  const loadApplications = async (jobId) => {
    await loadApplicationsForJob(jobId, { navigate: true });
  };

  const updateApplicationStatus = async (applicationId, status) => {
    try {
      await api.patch(`/applications/${applicationId}`, { status });
      toast.success(`Application ${status.toLowerCase()}`);
      await refreshEmployerWorkflow({
        preferredJobId: selectedJobId,
        includeApplications: true,
        silent: true,
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to update application status");
    }
  };

  const closeJob = async (jobId) => {
    try {
      await api.patch(`/jobs/${jobId}`, { status: "CLOSED" });
      toast.success("Job closed");
      await refreshEmployerWorkflow({
        preferredJobId: selectedJobId,
        includeApplications: section === "applications" || section === "ratings",
        silent: true,
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to close job");
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await api.delete(`/jobs/${jobId}`);
      toast.success("Job deleted");
      await refreshEmployerWorkflow({
        preferredJobId: selectedJobId === jobId ? null : selectedJobId,
        includeApplications: section === "applications" || section === "ratings",
        silent: true,
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to delete job");
    }
  };

  const toggleTag = (tag) => {
    setRatingDraft((current) => ({
      ...current,
      tags: current.tags.includes(tag)
        ? current.tags.filter((item) => item !== tag)
        : [...current.tags, tag],
    }));
  };

  const submitWorkerRating = async (application) => {
    try {
      await api.post("/ratings/worker", {
        workerId: application.workerId,
        jobId: application.jobId,
        stars: ratingDraft.stars,
        review: ratingDraft.review,
        tags: ratingDraft.tags,
      });
      toast.success("Worker rated successfully");
      setRatingDraft({ stars: 5, review: "", tags: [] });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to submit rating");
    }
  };

  return (
    <>
      <DashboardLayout title={copy.employerTitle} navItems={navItems} dashboardCopy={copy} activeSection={section} onSectionChange={setSection}>
        <div className={section === "about" ? "grid gap-6 lg:grid-cols-[1.25fr_0.75fr]" : "hidden"}>
          <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.about}</p>
                <h2 className="mt-2 font-display text-4xl text-cream">{user?.companyName || user?.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/68">{copy.employerAboutBody}</p>
              </div>
              <button onClick={() => setProfileOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream">
                <Pencil size={16} />
                {copy.editProfile}
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/70 p-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-saffron-500/10 text-2xl font-semibold text-saffron-300">
                  {user?.avatarUrl ? <img src={resolveAssetUrl(user.avatarUrl)} alt={user.name} className="h-full w-full rounded-[26px] object-cover" /> : getInitials(user?.name)}
                </div>
                <p className="mt-4 text-xl font-semibold text-cream">{user?.name}</p>
                <p className="mt-1 text-sm text-cream/60">{user?.district}, {user?.state}</p>
              </div>
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
                <div className="flex items-center gap-2 text-saffron-300"><Building2 size={18} /> {copy.businessTypeLabel}</div>
                <p className="mt-4 text-2xl font-semibold text-cream">{user?.businessType || "Not set"}</p>
                <p className="mt-2 text-sm text-cream/60">{copy.companyLabel}: {user?.companyName || "No company name added"}</p>
              </div>
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
                <div className="flex items-center gap-2 text-saffron-300"><Users size={18} /> {copy.hiringPulse}</div>
                <p className="mt-4 text-2xl font-semibold text-cream">{jobs.length} {copy.activeJobsSuffix}</p>
                <p className="mt-2 text-sm text-cream/60">{copy.hiringPulseHint}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Quick Summary</p>
            <div className="mt-6 space-y-4 text-sm text-cream/68">
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.postedJobsCountLabel}: <span className="font-semibold text-cream">{jobs.length}</span></div>
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.openApplicationsLabel}: <span className="font-semibold text-cream">{applications.length}</span></div>
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.hiringRegion}: <span className="font-semibold text-cream">{user?.district}, {user?.state}</span></div>
            </div>
          </section>
        </div>

        <div className="mt-6 space-y-6">
          {section === "post-job" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.postJob}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Job Title</span>
                  <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" value={jobForm.title} onChange={(event) => setJobForm((current) => ({ ...current, title: event.target.value }))} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">Job Category</span>
                  <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.category} onChange={(event) => setJobForm((current) => ({ ...current, category: event.target.value }))}>
                    {jobCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">Experience</span>
                  <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.experienceLevel} onChange={(event) => setJobForm((current) => ({ ...current, experienceLevel: event.target.value }))}>
                    {['none', '1yr', '2yr', '5yr+'].map((level) => <option key={level} value={level}>{level}</option>)}
                  </select>
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Job Description</span>
                  <textarea rows={5} className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" value={jobForm.description} onChange={(event) => setJobForm((current) => ({ ...current, description: event.target.value }))} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">State</span>
                  <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.state} onChange={(event) => setJobForm((current) => ({ ...current, state: event.target.value, district: indiaLocations[event.target.value]?.[0] || "" }))}>
                    {stateOptions.map((state) => <option key={state} value={state}>{state}</option>)}
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">District</span>
                  <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.district} onChange={(event) => setJobForm((current) => ({ ...current, district: event.target.value }))}>
                    {districtOptions.map((district) => <option key={district} value={district}>{district}</option>)}
                  </select>
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Village / Town</span>
                  <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" value={jobForm.village} onChange={(event) => setJobForm((current) => ({ ...current, village: event.target.value }))} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">Vacancies</span>
                  <input type="number" min="1" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" value={jobForm.vacancies} onChange={(event) => setJobForm((current) => ({ ...current, vacancies: event.target.value }))} />
                </label>
                <div className="grid grid-cols-[1fr_160px] gap-3">
                  <label className="space-y-2">
                    <span className="text-sm text-cream/70">Salary</span>
                    <input type="number" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" value={jobForm.salary} onChange={(event) => setJobForm((current) => ({ ...current, salary: event.target.value }))} />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-cream/70">Unit</span>
                    <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.salaryUnit} onChange={(event) => setJobForm((current) => ({ ...current, salaryUnit: event.target.value }))}>
                      <option value="per_day">Per day</option>
                      <option value="per_month">Per month</option>
                      <option value="fixed">Fixed</option>
                    </select>
                  </label>
                </div>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">Start Date</span>
                  <input type="date" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.startDate} onChange={(event) => setJobForm((current) => ({ ...current, startDate: event.target.value }))} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-cream/70">End Date</span>
                  <input type="date" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.endDate} onChange={(event) => setJobForm((current) => ({ ...current, endDate: event.target.value }))} />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Application Deadline</span>
                  <input type="date" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" value={jobForm.deadline} onChange={(event) => setJobForm((current) => ({ ...current, deadline: event.target.value }))} />
                </label>
                <div className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Required Skills</span>
                  <div className="flex flex-wrap gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-3">
                    {skillOptions.map((skill) => (
                      <button key={skill} type="button" onClick={() => toggleSkill(skill)} className={`rounded-full px-3 py-2 text-sm ${jobForm.requiredSkills.includes(skill) ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70"}`}>
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <span className="text-sm text-cream/70">Benefits</span>
                  <div className="flex flex-wrap gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-3">
                    {["Food", "Housing", "Transport"].map((benefit) => (
                      <button key={benefit} type="button" onClick={() => toggleBenefit(benefit)} className={`rounded-full px-3 py-2 text-sm ${jobForm.benefits.includes(benefit) ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70"}`}>
                        {benefit}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={handleCreateJob} className="mt-8 rounded-full bg-saffron-500 px-6 py-3 font-semibold text-charcoal transition hover:bg-saffron-400">
                Submit Job
              </button>
            </section>
          ) : null}

          {section === "jobs" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.postedJobs}</p>
              <div className="mt-6 overflow-hidden rounded-[28px] border border-[var(--glass-border)]">
                <table className="min-w-full divide-y divide-[var(--glass-border)] text-left text-sm">
                  <thead className="bg-forest-950/80 text-cream/60">
                    <tr>
                      <th className="px-4 py-4">Job Title</th>
                      <th className="px-4 py-4">{copy.postedOn}</th>
                      <th className="px-4 py-4">Vacancies</th>
                      <th className="px-4 py-4">{copy.employerApplications}</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4">{copy.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--glass-border)] bg-[var(--card-bg)]">
                    {jobs.map((job) => (
                      <tr key={getEntityId(job)}>
                        <td className="px-4 py-4 font-medium text-cream">{job.title}</td>
                        <td className="px-4 py-4 text-cream/60">{new Date(job.createdAt).toLocaleDateString("en-IN")}</td>
                        <td className="px-4 py-4 text-cream/70">{job.vacancies}</td>
                        <td className="px-4 py-4 text-cream/70">{job._count?.applications || 0}</td>
                        <td className="px-4 py-4 text-cream/70">{job.status}</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-wrap gap-3 text-sm text-saffron-300">
                            <button onClick={() => loadApplications(getEntityId(job))}>{copy.viewApplications}</button>
                            <button onClick={() => closeJob(getEntityId(job))}>{copy.close}</button>
                            <button onClick={() => deleteJob(getEntityId(job))}>{copy.delete}</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}
          {section === "applications" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.employerApplications}</p>
                  <h2 className="mt-2 font-display text-4xl text-cream">{selectedJob?.title || "Select a job"}</h2>
                </div>
                <select value={selectedJobId || ""} onChange={(event) => loadApplications(event.target.value)} className="rounded-full border border-[var(--glass-border)] bg-forest-950/70 px-4 py-3 text-sm outline-none">
                  {jobs.map((job) => <option key={getEntityId(job)} value={getEntityId(job)}>{job.title}</option>)}
                </select>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {applications.map((application) => (
                  <article key={application.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl font-semibold text-cream">{application.worker?.name}</p>
                        <p className="mt-1 text-sm text-cream/60">{application.worker?.district}, {application.worker?.state}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${applicationStatusStyles[application.status] || "bg-[var(--glass-bg)]"}`}>{application.status}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(application.worker?.skills || []).map((skill) => <span key={skill} className="rounded-full bg-saffron-500/12 px-3 py-1 text-xs text-saffron-200">{skill}</span>)}
                    </div>
                    <p className="mt-4 text-sm text-cream/68">Applied on {new Date(application.appliedAt).toLocaleDateString("en-IN")}</p>
                    <p className="mt-1 text-sm text-cream/68">Mobile: {application.worker?.mobile}</p>
                    <div className="mt-5 flex flex-wrap gap-3 text-sm">
                      <button onClick={() => updateApplicationStatus(application.id, "SHORTLISTED")} className="rounded-full bg-sky-500/15 px-4 py-2 text-sky-200">Shortlist</button>
                      <button onClick={() => updateApplicationStatus(application.id, "HIRED")} className="rounded-full bg-emerald-500/15 px-4 py-2 text-emerald-200">Mark Hired</button>
                      <button onClick={() => updateApplicationStatus(application.id, "REJECTED")} className="rounded-full bg-rose-500/15 px-4 py-2 text-rose-200">Reject</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {section === "ratings" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.rateWorkers}</p>
              <div className="mt-6 space-y-4">
                {applications.filter((application) => application.status === "HIRED").map((application) => (
                  <div key={application.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                    <h3 className="text-xl font-semibold text-cream">{application.worker?.name}</h3>
                    <p className="mt-2 text-sm text-cream/60">{selectedJob?.title}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} onClick={() => setRatingDraft((current) => ({ ...current, stars: star }))} className={`rounded-full px-3 py-2 text-sm ${ratingDraft.stars >= star ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/60"}`}>
                          Star {star}
                        </button>
                      ))}
                    </div>
                    <textarea value={ratingDraft.review} onChange={(event) => setRatingDraft((current) => ({ ...current, review: event.target.value }))} rows={4} className="mt-4 w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none" placeholder="Add a short review" />
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Punctual", "Hard Working", "Skilled", "Honest", "Reliable"].map((tag) => (
                        <button key={tag} onClick={() => toggleTag(tag)} className={`rounded-full px-3 py-2 text-sm ${ratingDraft.tags.includes(tag) ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70"}`}>
                          {tag}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => submitWorkerRating(application)} className="mt-5 rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal transition hover:bg-saffron-400">
                      Submit Worker Rating
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {section === "settings" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.settingsHeading}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                  <h3 className="text-xl font-semibold text-cream">Profile preferences</h3>
                  <p className="mt-3 text-sm text-cream/65">{copy.employerProfileHint}</p>
                  <button onClick={() => setProfileOpen(true)} className="mt-5 rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal">{copy.openProfileEditor}</button>
                </div>
                <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                  <h3 className="text-xl font-semibold text-cream">Hiring profile</h3>
                  <p className="mt-3 text-sm text-cream/65">{copy.businessTypeLabel}: {user?.businessType || employerBusinessTypes[0]}</p>
                  <p className="mt-2 text-sm text-cream/65">{copy.companyLabel}: {user?.companyName || "Not set"}</p>
                </div>
              </div>
            </section>
          ) : null}

                    {section === "gram-ai" ? <GramAI /> : null}
        </div>
      </DashboardLayout>

      <ProfileEditModal open={profileOpen} onClose={() => setProfileOpen(false)} extraFields={["companyName", "businessType", "gstNumber", "website"]} />
    </>
  );
}
















