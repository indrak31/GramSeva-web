import { Menu, Bell, LogOut, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { getInitials, resolveAssetUrl } from "../../utils/app";

export default function DashboardLayout({ title, navItems, dashboardCopy, activeSection, onSectionChange, children }) {
  const { user, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="luxury-shell min-h-screen text-cream">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-[var(--glass-border)] bg-[color:rgb(var(--blue-900-rgb)/0.86)] p-6 backdrop-blur-xl transition ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link to="/" className="font-display text-3xl text-cream">GramRozgaar</Link>
            <button className="rounded-full border border-[var(--glass-border)] p-2 lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                  activeSection === item.id
                    ? "bg-saffron-500 text-charcoal shadow-glow"
                    : "text-cream/76 hover:bg-blue-500/10 hover:text-cream"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="glass-card mt-10 rounded-[28px] p-4">
            <div className="flex items-center gap-3">
              {user?.avatarUrl ? (
                <img src={resolveAssetUrl(user.avatarUrl)} alt={user.name} className="h-14 w-14 rounded-2xl object-cover" />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 font-semibold text-electric">
                  {getInitials(user?.name)}
                </div>
              )}
              <div>
                <p className="font-semibold text-cream">{user?.name}</p>
                <p className="text-sm text-cream/60">{user?.district}, {user?.state}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="btn-secondary mt-4 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm text-cream/72"
            >
              <LogOut size={16} />
              {dashboardCopy?.logout || "Logout"}
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:pl-72">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--glass-border)] bg-[color:rgb(var(--blue-950-rgb)/0.72)] px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-[var(--glass-border)] p-2 lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu size={18} />
              </button>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-electric">{dashboardCopy?.dashboardLabel || "Dashboard"}</p>
                <h1 className="font-display text-3xl">{title}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden rounded-full border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-2 text-sm text-cream/60 md:block">
                {dashboardCopy?.searchPlaceholder || "Search jobs, courses, or workers"}
              </div>
              <button className="relative rounded-full border border-[var(--glass-border)] p-3 transition hover:border-[var(--border-glow)] hover:shadow-glow">
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-electric" />
              </button>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

