export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function getInitials(name = "GramRozgaar User") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function getApiOrigin() {
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  return apiBase.replace(/\/api\/?$/, "");
}

export function resolveAssetUrl(assetPath = "") {
  if (!assetPath) return "";
  if (/^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }
  return `${getApiOrigin()}${assetPath.startsWith("/") ? assetPath : `/${assetPath}`}`;
}

export function getEntityId(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "object") {
    if (value.id) return String(value.id);
    if (value._id) return String(value._id);
  }
  return null;
}

export function formatCurrency(value, unit = "per_day") {
  const labelMap = {
    per_day: "/day",
    per_month: "/month",
    fixed: " fixed",
  };

  return `Rs ${Number(value || 0).toLocaleString("en-IN")}${labelMap[unit] || ""}`;
}

export function getDashboardPath(role) {
  if (role === "EMPLOYER") return "/dashboard/employer";
  if (role === "ADMIN") return "/admin";
  return "/dashboard/worker";
}

export function getPostAuthPath(user) {
  if (!user) return "/auth/signin";
  if (user.needsLanguageSelection) return "/language-select";
  if (!user.hasUploadedDocuments && !user.isDocVerified) return "/verify-documents";
  return getDashboardPath(user.role);
}

export function formatRelativeDays(dateString) {
  if (!dateString) return "Today";
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}
