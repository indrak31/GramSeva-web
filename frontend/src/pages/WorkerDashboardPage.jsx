import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  MapPin,
  Pencil,
  Settings,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/client";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import GramAI from "../components/gramai/GramAI";
import JobCard from "../components/dashboard/JobCard";
import ProfileEditModal from "../components/dashboard/ProfileEditModal";
import { getDashboardCopy, interpolateCopy } from "../data/dashboardCopy";
import { jobCategories } from "../data/options";
import { useAuthStore } from "../stores/authStore";
import { useDashboardStore } from "../stores/dashboardStore";
import { useLanguageStore } from "../stores/languageStore";
import { useLiveWorkflow } from "../hooks/useLiveWorkflow";
import { formatCurrency, getEntityId, getInitials, resolveAssetUrl } from "../utils/app";

const statusStyles = {
  PENDING: "bg-amber-500/15 text-amber-200",
  SHORTLISTED: "bg-sky-500/15 text-sky-200",
  HIRED: "bg-emerald-500/15 text-emerald-200",
  REJECTED: "bg-rose-500/15 text-rose-200",
  WITHDRAWN: "bg-slate-500/15 text-slate-200",
};

function getNavItems(copy) {
  return [
    { id: "about", label: copy.about, icon: BadgeCheck },
    { id: "jobs", label: copy.jobs, icon: BriefcaseBusiness },
    { id: "applications", label: copy.applications, icon: FileText },
    { id: "courses", label: copy.courses, icon: BookOpen },
    { id: "ratings", label: copy.ratings, icon: Star },
    { id: "settings", label: copy.settings, icon: Settings },
    { id: "gram-ai", label: copy.ai, icon: Sparkles },
  ];
}

export default function WorkerDashboardPage() {
  const { user, token } = useAuthStore();
  const { workerSection: section, setWorkerSection: setSection } = useDashboardStore();
  const { language } = useLanguageStore();
  const copy = getDashboardCopy(language);
  const navItems = useMemo(() => getNavItems(copy), [copy]);
  const welcomeTitle = interpolateCopy(copy.workerWelcome, { name: user?.name || "" });
  const [profileOpen, setProfileOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [ratingDraft, setRatingDraft] = useState({ stars: 5, review: "", tags: [] });
  const liveRefreshTimeoutRef = useRef(null);

  const appliedJobIds = new Set(
    applications
      .map((application) => getEntityId(application.jobId) || getEntityId(application.job))
      .filter(Boolean),
  );
  const enrolledCourseIds = new Set(
    myCourses
      .map((enrollment) => getEntityId(enrollment.courseId) || getEntityId(enrollment.course))
      .filter(Boolean),
  );
  const hiredApplications = applications.filter((application) => application.status === "HIRED");

  const loadJobs = async ({ silent = false } = {}) => {
    try {
      setLoading(true);
      const jobsResponse = await api.get("/jobs");
      setJobs(jobsResponse.data.jobs || []);
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load jobs");
      }
    } finally {
      setLoading(false);
    }
  };

  const loadApplications = async ({ silent = false } = {}) => {
    try {
      const applicationsResponse = await api.get("/applications/my");
      setApplications(applicationsResponse.data.applications || []);
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load applications");
      }
    }
  };

  const loadCourses = async ({ silent = false } = {}) => {
    try {
      const [coursesResponse, myCoursesResponse] = await Promise.all([
        api.get("/courses"),
        api.get("/courses/my"),
      ]);
      setCourses(coursesResponse.data.courses || []);
      setMyCourses(myCoursesResponse.data.enrollments || []);
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load courses");
      }
    }
  };

  const loadRatings = async ({ silent = false } = {}) => {
    try {
      const ratingsResponse = await api.get("/ratings/my");
      setRatings(ratingsResponse.data.ratings || []);
    } catch (error) {
      if (!silent) {
        toast.error(error.response?.data?.error || "Unable to load ratings");
      }
    }
  };

  const loadDashboard = async ({
    silent = false,
    includeJobs = true,
    includeApplications = true,
    includeCourses = true,
    includeRatings = true,
  } = {}) => {
    const requests = [];

    if (includeJobs) {
      requests.push(loadJobs({ silent }));
    }
    if (includeApplications) {
      requests.push(loadApplications({ silent }));
    }
    if (includeCourses) {
      requests.push(loadCourses({ silent }));
    }
    if (includeRatings) {
      requests.push(loadRatings({ silent }));
    }

    await Promise.all(requests);
  };

  useEffect(() => {
    if (section === "jobs" || section === "applications") {
      loadDashboard({ includeCourses: false, includeRatings: false });
      return;
    }

    if (section === "courses") {
      loadDashboard({ includeJobs: false, includeApplications: false, includeRatings: false });
      return;
    }

    if (section === "ratings") {
      loadDashboard({ includeJobs: false, includeCourses: false });
      return;
    }

    loadDashboard();
  }, [section]);

  useEffect(() => {
    if (!["jobs", "applications"].includes(section)) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      loadDashboard({ silent: true, includeCourses: false, includeRatings: false });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [section]);

  useEffect(() => () => {
    if (liveRefreshTimeoutRef.current) {
      window.clearTimeout(liveRefreshTimeoutRef.current);
    }
  }, []);

  const queueLiveRefresh = () => {
    if (liveRefreshTimeoutRef.current) {
      window.clearTimeout(liveRefreshTimeoutRef.current);
    }

    liveRefreshTimeoutRef.current = window.setTimeout(() => {
      loadDashboard({ silent: true, includeCourses: false, includeRatings: false });
    }, 250);
  };

  useLiveWorkflow({
    token,
    enabled: Boolean(user?.id),
    onEvent: (event) => {
      if (event.type.startsWith("job.") || event.workerId === user?.id) {
        queueLiveRefresh();
      }
    },
  });

  const filteredJobs = jobs.filter((job) => !selectedCategory || job.category === selectedCategory);

  const handleApply = async () => {
    const jobId = getEntityId(selectedJob);
    if (!jobId) return;

    try {
      await api.post(`/jobs/${jobId}/apply`);
      toast.success("Application submitted");
      setSelectedJob(null);
      await loadDashboard({ silent: true, includeCourses: false, includeRatings: false });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to apply for this job");
    }
  };

  const handleWithdraw = async (applicationId) => {
    try {
      await api.patch(`/applications/${applicationId}`, { status: "WITHDRAWN" });
      toast.success("Application withdrawn");
      await loadDashboard({ silent: true, includeCourses: false, includeRatings: false });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to withdraw application");
    }
  };

  const handleEnroll = async (courseId) => {
    try {
      await api.post(`/courses/${courseId}/enroll`);
      toast.success("Enrolled successfully");
      await loadDashboard({ silent: true, includeJobs: false, includeApplications: false, includeRatings: false });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to enroll");
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

  const submitRating = async (application) => {
    try {
      await api.post("/ratings/employer", {
        employerId: getEntityId(application.job?.employerId) || getEntityId(application.job?.employer),
        jobId: getEntityId(application.jobId) || getEntityId(application.job),
        stars: ratingDraft.stars,
        review: ratingDraft.review,
        tags: ratingDraft.tags,
      });
      toast.success("Rating submitted");
      setRatingDraft({ stars: 5, review: "", tags: [] });
      await loadDashboard({ silent: true, includeJobs: false, includeCourses: false });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to submit rating");
    }
  };

  return (
    <>
      <DashboardLayout title={copy.workerTitle} navItems={navItems} dashboardCopy={copy} activeSection={section} onSectionChange={setSection}>
        <div className={section === "about" ? "grid gap-6 lg:grid-cols-[1.4fr_0.8fr]" : "hidden"}>
          <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.about}</p>
                <h2 className="mt-2 font-display text-4xl text-cream">{welcomeTitle}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/68">{copy.workerAboutBody}</p>
              </div>
              <button onClick={() => setProfileOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm text-cream/72 transition hover:border-saffron-500/35 hover:text-cream">
                <Pencil size={16} />
                {copy.editProfile}
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/70 p-5">
                <div className={`flex h-20 w-20 items-center justify-center rounded-[28px] border-2 ${user?.isDocVerified ? "border-emerald-400/60" : "border-saffron-500/50"} bg-saffron-500/10 text-2xl font-semibold text-saffron-300`}>
                  {user?.avatarUrl ? <img src={resolveAssetUrl(user.avatarUrl)} alt={user.name} className="h-full w-full rounded-[26px] object-cover" /> : getInitials(user?.name)}
                </div>
                <p className="mt-4 text-xl font-semibold text-cream">{user?.name}</p>
                <p className="mt-1 text-sm text-cream/60">{user?.village}, {user?.district}, {user?.state}</p>
              </div>
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
                <div className="flex items-center gap-2 text-saffron-300"><BadgeCheck size={18} /> {copy.trustStatus}</div>
                <p className="mt-4 text-2xl font-semibold text-cream">{user?.isDocVerified ? copy.verified : copy.pendingReview}</p>
                <p className="mt-2 text-sm text-cream/60">{copy.verificationHint}</p>
              </div>
              <div className="rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
                <div className="flex items-center gap-2 text-saffron-300"><MapPin size={18} /> {copy.reach}</div>
                <p className="mt-4 text-2xl font-semibold text-cream">{jobs.length} {copy.openJobsSuffix}</p>
                <p className="mt-2 text-sm text-cream/60">{copy.reachHint}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.skillsSnapshot}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(user?.skills || []).map((skill) => <span key={skill} className="rounded-full bg-saffron-500/12 px-3 py-2 text-sm text-saffron-200">{skill}</span>)}
            </div>
            <div className="mt-8 space-y-4 text-sm text-cream/68">
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.applicationsCountLabel}: <span className="font-semibold text-cream">{applications.length}</span></div>
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.coursesEnrolledLabel}: <span className="font-semibold text-cream">{myCourses.length}</span></div>
              <div className="rounded-2xl border border-[var(--glass-border)] bg-forest-950/60 p-4">{copy.ratingsGivenLabel}: <span className="font-semibold text-cream">{ratings.length}</span></div>
            </div>
          </section>
        </div>

        <div className="mt-6 space-y-6">
          {section === "jobs" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.jobs}</p>
                  <h2 className="mt-2 font-display text-4xl text-cream">{copy.jobsHeading}</h2>
                </div>
                <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="rounded-full border border-[var(--glass-border)] bg-forest-950/70 px-4 py-3 text-sm outline-none transition focus:border-saffron-500/40">
                  <option value="">{copy.allCategories}</option>
                  {jobCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
              </div>

              {loading ? (
                <p className="mt-8 text-cream/60">{copy.loadingJobs}</p>
              ) : (
                <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                  {filteredJobs.map((job) => (
                    <JobCard key={getEntityId(job) || job.title} job={job} applied={appliedJobIds.has(getEntityId(job))} onApply={setSelectedJob} />
                  ))}
                </div>
              )}
            </section>
          ) : null}

          {section === "applications" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.applicationsHeading}</p>
              <div className="mt-6 overflow-hidden rounded-[28px] border border-[var(--glass-border)]">
                <table className="min-w-full divide-y divide-[var(--glass-border)] text-left text-sm">
                  <thead className="bg-forest-950/80 text-cream/60">
                    <tr>
                      <th className="px-4 py-4">Job Title</th>
                      <th className="px-4 py-4">Employer</th>
                      <th className="px-4 py-4">Applied On</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--glass-border)] bg-[var(--card-bg)]">
                    {applications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-4 py-4 font-medium text-cream">{application.job?.title}</td>
                        <td className="px-4 py-4 text-cream/70">{application.job?.employer?.name}</td>
                        <td className="px-4 py-4 text-cream/60">{new Date(application.appliedAt).toLocaleDateString("en-IN")}</td>
                        <td className="px-4 py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[application.status] || "bg-[var(--glass-bg)]"}`}>{application.status}</span>
                        </td>
                        <td className="px-4 py-4">
                          {application.status === "PENDING" ? (
                            <button onClick={() => handleWithdraw(application.id)} className="text-sm font-medium text-saffron-300">
                              {copy.withdraw}
                            </button>
                          ) : (
                            <span className="text-cream/45">{copy.noAction}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {section === "courses" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.coursesHeading}</p>
              <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => {
                  const courseId = getEntityId(course);
                  const enrollment = myCourses.find(
                    (item) => (getEntityId(item.courseId) || getEntityId(item.course)) === courseId,
                  );
                  return (
                    <article key={courseId} className="overflow-hidden rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60">
                      <img src={course.thumbnailUrl || `https://picsum.photos/seed/${courseId}/600/340`} alt={course.title} className="h-44 w-full object-cover" />
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-saffron-300">
                          <span>{course.level}</span>
                          <span>{course.language}</span>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold text-cream">{course.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-cream/68">{course.description}</p>
                        <div className="mt-5 flex items-center justify-between text-sm text-cream/56">
                          <span>{course.duration}</span>
                          <span>{course.category}</span>
                        </div>
                        {enrollment ? (
                          <div className="mt-5">
                            <div className="flex items-center justify-between text-sm text-cream/60">
                              <span>{copy.progress}</span>
                              <span>{enrollment.progress}%</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-[var(--glass-bg)]">
                              <div className="h-2 rounded-full bg-saffron-500" style={{ width: `${enrollment.progress}%` }} />
                            </div>
                          </div>
                        ) : null}
                        <button onClick={() => handleEnroll(courseId)} disabled={enrolledCourseIds.has(courseId)} className="mt-6 w-full rounded-full bg-saffron-500 px-4 py-3 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:bg-emerald-700 disabled:text-cream">
                          {enrolledCourseIds.has(courseId) ? copy.enrolled : copy.enrollFree}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}
          {section === "ratings" ? (
            <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
              <div className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.ratingsHeading}</p>
                {hiredApplications.length === 0 ? (
                  <p className="mt-6 text-sm text-cream/60">Ratings become available once a job is marked as completed or hired.</p>
                ) : (
                  <div className="mt-6 space-y-4">
                    {hiredApplications.map((application) => (
                      <div key={application.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                        <h3 className="text-xl font-semibold text-cream">{application.job?.title}</h3>
                        <p className="mt-2 text-sm text-cream/60">{application.job?.employer?.name}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} onClick={() => setRatingDraft((current) => ({ ...current, stars: star }))} className={`rounded-full px-3 py-2 text-sm ${ratingDraft.stars >= star ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/60"}`}>
                              Star {star}
                            </button>
                          ))}
                        </div>
                        <textarea value={ratingDraft.review} onChange={(event) => setRatingDraft((current) => ({ ...current, review: event.target.value }))} rows={4} maxLength={500} className="mt-4 w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/40" placeholder="Share your experience" />
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Fair Pay", "Safe Workplace", "Good Management", "Flexible Hours"].map((tag) => (
                            <button key={tag} onClick={() => toggleTag(tag)} className={`rounded-full px-3 py-2 text-sm ${ratingDraft.tags.includes(tag) ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70"}`}>
                              {tag}
                            </button>
                          ))}
                        </div>
                        <button onClick={() => submitRating(application)} className="mt-5 rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal transition hover:bg-saffron-400">
                          Submit Employer Rating
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.previousRatings}</p>
                <div className="mt-6 space-y-4">
                  {ratings.map((rating) => (
                    <div key={rating.id} className="rounded-[24px] border border-[var(--glass-border)] bg-forest-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-cream">{rating.receiver?.name}</p>
                        <span className="text-sm text-saffron-300">{rating.stars}/5</span>
                      </div>
                      <p className="mt-2 text-sm text-cream/68">{rating.review || copy.noWrittenReview}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(rating.tags || []).map((tag) => <span key={tag} className="rounded-full bg-[var(--card-bg)] px-3 py-1 text-xs text-cream/62">{tag}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {section === "settings" ? (
            <section className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.settingsHeading}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                  <h3 className="text-xl font-semibold text-cream">{copy.profilePreferences}</h3>
                  <p className="mt-3 text-sm text-cream/65">{copy.workerProfileHint}</p>
                  <button onClick={() => setProfileOpen(true)} className="mt-5 rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal">{copy.openProfileEditor}</button>
                </div>
                <div className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                  <h3 className="text-xl font-semibold text-cream">{copy.accountSummary}</h3>
                  <p className="mt-3 text-sm text-cream/65">{copy.languageLabel}: {user?.language || "en"}</p>
                  <p className="mt-2 text-sm text-cream/65">{copy.documentsLabel}: {user?.isDocVerified ? copy.verified : user?.hasUploadedDocuments ? copy.documentsSubmitted : copy.documentsNotUploaded}</p>
                </div>
              </div>
            </section>
          ) : null}

                    {section === "gram-ai" ? <GramAI /> : null}
        </div>
      </DashboardLayout>
      {selectedJob ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/70 p-4 backdrop-blur-md">
          <div className="glass-panel w-full max-w-xl rounded-[32px] p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{copy.confirmApplication}</p>
            <h3 className="mt-3 text-3xl font-semibold text-cream">{selectedJob.title}</h3>
            <p className="mt-3 text-sm leading-7 text-cream/66">{selectedJob.description}</p>
            <div className="mt-5 rounded-[24px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-4 text-sm text-cream/68">
              <p>{copy.yourProfile}: {user?.name}</p>
              <p className="mt-2">{copy.locationLabel}: {user?.district}, {user?.state}</p>
              <p className="mt-2">{copy.skillsLabel}: {(user?.skills || []).join(", ")}</p>
              <p className="mt-2">{copy.salaryLabel}: {formatCurrency(selectedJob.salary, selectedJob.salaryUnit)}</p>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setSelectedJob(null)} className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-cream/70">{copy.cancel}</button>
              <button onClick={handleApply} className="rounded-full bg-saffron-500 px-5 py-3 font-semibold text-charcoal">{copy.confirmApply}</button>
            </div>
          </div>
        </div>
      ) : null}

      <ProfileEditModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}

















