import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/client";
import DocumentUploadCard from "../components/dashboard/DocumentUploadCard";
import { useAuthStore } from "../stores/authStore";
import { getDashboardPath } from "../utils/app";

const initialCards = [
  { type: "aadhaar", icon: "ID", title: "Aadhaar Card", description: "12-digit UID card", file: null, error: "", status: "Pending" },
  { type: "pan", icon: "PAN", title: "PAN Card", description: "Income tax card", file: null, error: "", status: "Pending" },
  { type: "driving", icon: "DL", title: "Driving Licence", description: "DL issued by RTO", file: null, error: "", status: "Pending" },
  { type: "other", icon: "DOC", title: "Other Document", description: "Ration card, Voter ID, or similar ID", file: null, error: "", status: "Pending" },
];

export default function DocumentVerifyPage() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuthStore();
  const [cards, setCards] = useState(initialCards);
  const [existingDocs, setExistingDocs] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.get("/documents/my")
      .then(({ data }) => setExistingDocs(data.documents || []))
      .catch(() => {});
  }, []);

  const uploadedCount = cards.filter((item) => item.file).length + existingDocs.length;

  const handleFileSelect = (type, file, error) => {
    setCards((current) =>
      current.map((item) =>
        item.type === type
          ? { ...item, file: file || null, error: error || "", status: file ? "Ready" : item.status }
          : item,
      ),
    );
  };

  const handleSubmit = async () => {
    const selected = cards.filter((item) => item.file);
    if (selected.length === 0 && existingDocs.length === 0) {
      toast.error("Upload at least one document to continue");
      return;
    }

    try {
      setSubmitting(true);
      for (const item of selected) {
        const formData = new FormData();
        formData.append("file", item.file);
        formData.append("documentType", item.type);
        await api.post("/documents/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      updateUser({ hasUploadedDocuments: true });
      toast.success("Documents submitted for verification");
      navigate(getDashboardPath(user?.role), { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to upload documents");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="luxury-shell min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[32px] p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-cream/60">
            {[
              ["Register", true],
              ["Language", true],
              ["Verify Documents", true],
              ["Dashboard", false],
            ].map(([label, complete], index) => (
              <div key={label} className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${complete ? "bg-saffron-500 text-charcoal shadow-glow" : "border border-[var(--glass-border)] bg-[var(--card-bg)]"}`}>{index + 1}</span>
                <span>{label}</span>
                {index < 3 ? <ArrowRight size={16} className="text-cream/30" /> : null}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-5xl text-cream">Verify your documents</h1>
              <p className="mt-3 max-w-2xl text-base leading-8 text-cream/70">Upload at least one valid identity document. This helps employers trust the profile and speeds up review.</p>
            </div>
            <div className="glass-card rounded-[24px] px-5 py-4">
              <p className="text-sm text-cream/60">Overall progress</p>
              <p className="mt-2 text-xl font-semibold text-cream">{uploadedCount} of 4 documents uploaded</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cards.map((card) => <DocumentUploadCard key={card.type} item={card} onFileSelect={handleFileSelect} />)}
          </div>

          {existingDocs.length > 0 ? (
            <div className="mt-8 rounded-[28px] border border-[var(--border-glow)] bg-blue-500/12 p-5 text-sm text-blue-100">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={16} />
                Existing uploads
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {existingDocs.map((doc) => (
                  <div key={doc.id} className="rounded-2xl border border-[var(--glass-border)] bg-[color:rgb(var(--blue-950-rgb)/0.5)] px-4 py-3 text-cream/80">
                    <span className="font-medium">{doc.fileName}</span>
                    <span className="ml-2 text-xs uppercase tracking-[0.2em] text-saffron-300">{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="glass-card mt-10 flex items-center justify-between gap-4 rounded-[28px] p-5">
            <div>
              <p className="text-sm text-cream/60">Verification status</p>
              <p className="mt-2 text-xl font-semibold text-cream">{user?.isDocVerified ? "Verified" : "Pending review"}</p>
            </div>
            <button onClick={handleSubmit} disabled={submitting || uploadedCount === 0} className="btn-primary rounded-full px-6 py-3 font-semibold text-charcoal disabled:cursor-not-allowed disabled:opacity-60">
              {submitting ? "Submitting..." : "Submit for Verification"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

