import { FileText, UploadCloud, XCircle } from "lucide-react";

const acceptMap = {
  "image/jpeg": true,
  "image/png": true,
  "application/pdf": true,
};

export default function DocumentUploadCard({ item, onFileSelect }) {
  const handleFile = (file) => {
    if (!file) return;
    if (!acceptMap[file.type] || file.size > 5 * 1024 * 1024) {
      onFileSelect(item.type, null, "Only JPG, PNG, or PDF under 5MB are allowed.");
      return;
    }
    onFileSelect(item.type, file, null);
  };

  return (
    <label className="group flex min-h-[240px] cursor-pointer flex-col rounded-[28px] border border-dashed border-[var(--glass-border)] bg-[var(--card-bg)] p-6 transition hover:border-saffron-500/45 hover:bg-[var(--glass-bg)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="text-3xl">{item.icon}</span>
          <h3 className="mt-3 text-xl font-semibold text-cream">{item.title}</h3>
          <p className="mt-2 text-sm text-cream/65">{item.description}</p>
        </div>
        {item.error ? <XCircle className="text-red-300" /> : item.file ? <FileText className="text-emerald-300" /> : null}
      </div>

      <div className="mt-6 flex flex-1 items-center justify-center rounded-[24px] border border-[var(--glass-border)] bg-forest-950/50 p-4 text-center">
        {item.file ? (
          <div>
            <p className="font-semibold text-cream">{item.file.name}</p>
            <p className="mt-1 text-sm text-cream/60">{(item.file.size / 1024 / 1024).toFixed(2)} MB</p>
            <span className="mt-3 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              {item.status || "Pending"}
            </span>
          </div>
        ) : (
          <div>
            <UploadCloud className="mx-auto text-saffron-300 transition group-hover:scale-105" size={32} />
            <p className="mt-3 text-sm text-cream/72">Drag and drop or click to browse</p>
            <p className="mt-1 text-xs text-cream/50">JPG, PNG, PDF up to 5MB</p>
          </div>
        )}
      </div>

      {item.error ? <p className="mt-4 text-sm text-red-300">{item.error}</p> : null}
      <input type="file" accept=".jpg,.jpeg,.png,.pdf" className="hidden" onChange={(event) => handleFile(event.target.files?.[0])} />
    </label>
  );
}

