import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="luxury-shell flex min-h-screen items-center justify-center px-4 text-center text-cream">
      <div className="glass-panel max-w-2xl rounded-[32px] px-8 py-12">
        <p className="text-sm uppercase tracking-[0.4em] text-electric">404</p>
        <h1 className="mt-4 font-display text-6xl">Page not found</h1>
        <p className="mt-4 text-cream/68">The path you requested does not exist in this build.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 font-semibold text-charcoal">
          Return Home
        </Link>
      </div>
    </div>
  );
}
