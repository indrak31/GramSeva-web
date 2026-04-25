import { BarChart3, FileCheck2, Shield, Users, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/client";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const navItems = [
  { id: "overview", label: "Analytics", icon: BarChart3 },
  { id: "users", label: "Users", icon: Users },
  { id: "documents", label: "Documents", icon: FileCheck2 },
  { id: "jobs", label: "Jobs", icon: Wrench },
  { id: "ai-logs", label: "AI Logs", icon: Shield },
];

export default function AdminPanelPage() {
  const [section, setSection] = useState("overview");
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [logs, setLogs] = useState([]);

  const loadAdmin = async () => {
    try {
      const [statsResponse, usersResponse, docsResponse, jobsResponse, logsResponse] = await Promise.all([
        api.get("/admin/stats"),
        api.get("/admin/users"),
        api.get("/admin/documents/pending"),
        api.get("/admin/jobs"),
        api.get("/admin/ai/logs"),
      ]);
      setStats(statsResponse.data.stats);
      setUsers(usersResponse.data.users || []);
      setDocuments(docsResponse.data.documents || []);
      setJobs(jobsResponse.data.jobs || []);
      setLogs(logsResponse.data.logs || []);
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to load admin data");
    }
  };

  useEffect(() => {
    loadAdmin();
  }, []);

  const verifyDocument = async (documentId, status) => {
    try {
      await api.patch(`/admin/documents/${documentId}/verify`, { status });
      toast.success(`Document ${status.toLowerCase()}`);
      loadAdmin();
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to update document status");
    }
  };

  return (
    <DashboardLayout title="Admin Panel" navItems={navItems} activeSection={section} onSectionChange={setSection}>
      {section === "overview" ? (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Total users", stats?.totalUsers || 0],
            ["Active jobs", stats?.activeJobs || 0],
            ["Applications today", stats?.applicationsToday || 0],
            ["New signups", stats?.newSignups || 0],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">{label}</p>
              <p className="mt-4 font-display text-5xl text-cream">{value}</p>
            </div>
          ))}
        </section>
      ) : null}

      {section === "users" ? (
        <section className="mt-6 rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">User Management</p>
          <div className="mt-6 overflow-hidden rounded-[28px] border border-[var(--glass-border)]">
            <table className="min-w-full divide-y divide-[var(--glass-border)] text-left text-sm">
              <thead className="bg-forest-950/80 text-cream/60">
                <tr>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Role</th>
                  <th className="px-4 py-4">Mobile</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--glass-border)] bg-[var(--card-bg)]">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-4 text-cream">{user.name}</td>
                    <td className="px-4 py-4 text-cream/70">{user.role}</td>
                    <td className="px-4 py-4 text-cream/70">{user.mobile}</td>
                    <td className="px-4 py-4 text-cream/70">{user.isSuspended ? "Suspended" : "Active"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {section === "documents" ? (
        <section className="mt-6 rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Pending Documents</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {documents.map((document) => (
              <div key={document.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                <p className="text-lg font-semibold text-cream">{document.user?.name}</p>
                <p className="mt-2 text-sm text-cream/60">{document.type} • {document.fileName}</p>
                <div className="mt-5 flex gap-3">
                  <button onClick={() => verifyDocument(document.id, "VERIFIED")} className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-200">Approve</button>
                  <button onClick={() => verifyDocument(document.id, "REJECTED")} className="rounded-full bg-rose-500/15 px-4 py-2 text-sm text-rose-200">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {section === "jobs" ? (
        <section className="mt-6 rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Job Moderation</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                <p className="text-lg font-semibold text-cream">{job.title}</p>
                <p className="mt-2 text-sm text-cream/60">{job.employer?.name} • {job.district}, {job.state}</p>
                <p className="mt-3 text-sm text-cream/68">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {section === "ai-logs" ? (
        <section className="mt-6 rounded-[32px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">GRAM AI Logs</p>
          <div className="mt-6 space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="rounded-[28px] border border-[var(--glass-border)] bg-forest-950/60 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-cream">{log.user?.name || "Unknown user"}</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-saffron-300">{new Date(log.createdAt).toLocaleString("en-IN")}</span>
                </div>
                <p className="mt-3 text-sm text-cream/68"><span className="text-saffron-300">User:</span> {log.message}</p>
                <p className="mt-2 text-sm text-cream/68"><span className="text-saffron-300">AI:</span> {log.response}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </DashboardLayout>
  );
}

