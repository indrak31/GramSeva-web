import { Loader2, LockKeyhole, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/client";
import AuthShell from "../components/auth/AuthShell";
import { useAuthStore } from "../stores/authStore";
import { useLanguageStore } from "../stores/languageStore";
import { getPostAuthPath } from "../utils/app";

export default function SignInPage() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { setLanguage } = useLanguageStore();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const cleanMobile = mobile.replace(/\D/g, "");
      const { data } = await api.post("/auth/signin", { mobile: cleanMobile, password });
      setAuth({ token: data.token, user: data.user });
      if (data.user?.language) {
        setLanguage(data.user.language);
      }
      toast.success("Signed in successfully");
      navigate(getPostAuthPath(data.user), { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.error || "Wrong mobile number or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Sign in to continue"
      subtitle="Use your registered mobile number and password to access your GramRozgaar account."
      footerText="New to GramRozgaar?"
      footerLink="/auth/signup"
      footerLabel="Create an account"
    >
      <div>
        <span className="rounded-full border border-saffron-500/25 bg-saffron-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-saffron-300">
          Welcome back
        </span>
        <h1 className="mt-5 font-display text-5xl text-cream">Sign In</h1>
        <p className="mt-3 max-w-lg text-base leading-8 text-cream/70">
          Keep the login simple. Enter your mobile number and password to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <label className="block space-y-2">
          <span className="text-sm text-cream/70">Mobile Number</span>
          <div className="flex items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4">
            <Phone size={18} className="text-saffron-300" />
            <span className="ml-3 text-sm text-cream/70">+91</span>
            <input
              value={mobile}
              onChange={(event) => setMobile(event.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="9876543210"
              className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-cream/35"
            />
          </div>
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-cream/70">Password</span>
          <div className="flex items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4">
            <LockKeyhole size={18} className="text-saffron-300" />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-cream/35"
            />
          </div>
        </label>

        <div className="flex items-center justify-between text-sm">
          <span className="text-cream/55">Use the same mobile number you registered with.</span>
          <Link to="/auth/signup" className="font-medium text-saffron-300 hover:text-saffron-400">
            Create account
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-saffron-500 px-5 py-3.5 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : null}
          Sign In
        </button>
      </form>
    </AuthShell>
  );
}


