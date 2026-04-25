import { Link } from "react-router-dom";

export default function AuthShell({ title, subtitle, children, footerText, footerLink, footerLabel }) {
  return (
    <div className="luxury-shell relative min-h-screen overflow-hidden">
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="glass-panel grid w-full overflow-hidden rounded-[32px] lg:grid-cols-[1fr_1.2fr]">
          <div className="relative hidden min-h-[640px] flex-col justify-between overflow-hidden border-r border-[var(--glass-border)] bg-surface p-10 lg:flex">
            <div className="absolute -left-8 top-12 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
            <div className="absolute right-8 top-10 h-40 w-40 rounded-full bg-electric/15 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-10 left-24 h-48 w-48 rounded-full bg-sapphire/20 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-blue-500/15 text-lg font-semibold text-electric">GR</div>
              <div>
                <p className="font-display text-3xl text-cream">GramRozgaar</p>
                <p className="text-sm text-cream/70">Local jobs. Verified hiring. Clear communication.</p>
              </div>
            </div>

            <div className="relative space-y-6">
              <div className="perspective-[1200px] relative h-40 w-40 animate-float rounded-[32px] border border-[var(--glass-border)] bg-gradient-to-br from-blue-500/45 via-blue-300/10 to-sapphire/35 shadow-glass [transform-style:preserve-3d] before:absolute before:inset-6 before:rounded-[24px] before:border before:border-[var(--glass-border)] before:[transform:translateZ(22px)_rotateX(26deg)]" />
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-electric">Account Access</p>
                <h2 className="mt-3 font-display text-5xl leading-tight">{title}</h2>
                <p className="mt-4 max-w-md text-lg leading-8 text-cream/72">{subtitle}</p>
              </div>
            </div>

            <p className="relative text-sm text-cream/60">OTP verification, local language support, and a straightforward onboarding flow.</p>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-xl">
              <div className="mb-8 lg:hidden">
                <Link to="/" className="font-display text-3xl text-cream">GramRozgaar</Link>
                <p className="mt-2 text-sm text-cream/70">{subtitle}</p>
              </div>
              {children}
              {footerText && footerLink && footerLabel ? (
                <p className="mt-8 text-sm text-cream/65">
                  {footerText}{" "}
                  <Link className="font-semibold text-electric transition hover:text-saffron-400" to={footerLink}>
                    {footerLabel}
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
