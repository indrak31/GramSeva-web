import { MapPin, Star } from "lucide-react";
import { formatCurrency, formatRelativeDays } from "../../utils/app";

export default function JobCard({ job, onApply, applied }) {
  return (
    <div className="rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5 shadow-glass transition hover:-translate-y-1 hover:border-saffron-500/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-saffron-300">{job.category}</p>
          <h3 className="mt-2 text-2xl font-semibold text-cream">{job.title}</h3>
          <div className="mt-3 flex items-center gap-2 text-sm text-cream/68">
            <Star size={14} className="text-saffron-300" fill="currentColor" />
            <span>{job.employer?.name || job.employerName || "Trusted Employer"}</span>
            <span>•</span>
            <span>{job.employer?.profile?.rating?.toFixed?.(1) || job.employerRating || "4.8"}</span>
          </div>
        </div>
        <div className="rounded-full border border-saffron-500/25 bg-saffron-500/12 px-3 py-1 text-sm text-saffron-300">
          {formatCurrency(job.salary, job.salaryUnit)}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-cream/62">
        <MapPin size={14} />
        <span>{job.district}, {job.state}</span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-cream/72">{job.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(job.requiredSkills || []).slice(0, 4).map((skill) => (
          <span key={skill} className="rounded-full border border-[var(--glass-border)] bg-[var(--card-bg)] px-3 py-1 text-xs text-cream/74">{skill}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-cream/60">
        <span>{formatRelativeDays(job.createdAt)}</span>
        <span>{job.vacancies || 1} vacancies</span>
      </div>
      <button
        onClick={() => onApply(job)}
        disabled={applied}
        className={`mt-5 w-full rounded-full px-4 py-3 font-semibold transition ${
          applied ? "bg-green-700/70 text-cream" : "bg-saffron-500 text-charcoal hover:bg-saffron-400"
        }`}
      >
        {applied ? "Applied ?" : "Apply Now"}
      </button>
    </div>
  );
}

