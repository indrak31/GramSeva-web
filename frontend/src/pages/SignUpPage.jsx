import { Loader2, LockKeyhole, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/client";
import AuthShell from "../components/auth/AuthShell";
import OtpInput from "../components/auth/OtpInput";
import { indiaLocations, stateOptions } from "../data/india";
import { employerBusinessTypes, skillOptions } from "../data/options";
import { useAuthStore } from "../stores/authStore";
import { useLanguageStore } from "../stores/languageStore";
import { getPostAuthPath } from "../utils/app";

const tabs = [
  { id: "worker", label: "Worker account" },
  { id: "employer", label: "Employer account" },
];

const initialWorker = {
  name: "",
  state: stateOptions[0],
  district: indiaLocations[stateOptions[0]][0],
  village: "",
  skills: [],
  mobile: "",
  password: "",
  confirmPassword: "",
};

const initialEmployer = {
  name: "",
  companyName: "",
  businessType: employerBusinessTypes[0],
  state: stateOptions[0],
  district: indiaLocations[stateOptions[0]][0],
  village: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { setLanguage } = useLanguageStore();
  const [tab, setTab] = useState("worker");
  const [workerForm, setWorkerForm] = useState(initialWorker);
  const [employerForm, setEmployerForm] = useState(initialEmployer);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [devOtpHint, setDevOtpHint] = useState("");

  useEffect(() => {
    if (!otpSent || countdown <= 0) return undefined;
    const timer = window.setTimeout(() => setCountdown((current) => current - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [otpSent, countdown]);

  const form = tab === "worker" ? workerForm : employerForm;
  const setForm = tab === "worker" ? setWorkerForm : setEmployerForm;
  const districtOptions = indiaLocations[form.state] || [];

  const toggleSkill = (skill) => {
    setWorkerForm((current) => ({
      ...current,
      skills: current.skills.includes(skill)
        ? current.skills.filter((item) => item !== skill)
        : [...current.skills, skill],
    }));
  };

  const validate = () => {
    if (form.name.trim().length < 3) return "Full name must be at least 3 characters";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) return "Enter a valid 10-digit Indian mobile number";
    if ((form.password || "").length < 8) return "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    if (tab === "worker" && workerForm.skills.length === 0) return "Select at least one skill";
    if (tab === "employer" && !employerForm.companyName.trim()) return "Company or farm name is required";
    return null;
  };

  const sendOtp = async () => {
    const errorMessage = validate();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post("/auth/send-otp", { mobile: form.mobile });
      setOtpSent(true);
      setCountdown(60);
      setDevOtpHint(data.devOtp || "");
      toast.success(data.devOtp ? `OTP sent. Use ${data.devOtp} for local testing.` : "OTP sent successfully");
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    const errorMessage = validate();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    if (otp.length !== 6) {
      toast.error("Enter the 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      const payload = tab === "worker"
        ? {
            mobile: workerForm.mobile,
            password: workerForm.password,
            role: "WORKER",
            name: workerForm.name,
            state: workerForm.state,
            district: workerForm.district,
            village: workerForm.village,
            skills: workerForm.skills,
            otp,
          }
        : {
            mobile: employerForm.mobile,
            password: employerForm.password,
            role: "EMPLOYER",
            name: employerForm.name,
            state: employerForm.state,
            district: employerForm.district,
            village: employerForm.village,
            skills: [],
            companyName: employerForm.companyName,
            businessType: employerForm.businessType,
            otp,
          };
      const { data } = await api.post("/auth/register", payload);
      setAuth({ token: data.token, user: data.user });
      if (data.user?.language) {
        setLanguage(data.user.language);
      }
      toast.success("Account created");
      navigate(getPostAuthPath(data.user), { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Fill in your details, receive an OTP, and finish signup in one clean flow."
      footerText="Already have an account?"
      footerLink="/auth/signin"
      footerLabel="Sign in"
    >
      <div>
        <span className="rounded-full border border-saffron-500/25 bg-saffron-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-saffron-300">
          Join GramRozgaar
        </span>
        <h1 className="mt-5 font-display text-5xl text-cream">Sign Up</h1>
        <p className="mt-3 max-w-lg text-base leading-8 text-cream/70">
          Choose the account type that fits you and complete registration with mobile OTP verification.
        </p>
      </div>

      <div className="mt-8 inline-flex rounded-full border border-[var(--glass-border)] bg-[var(--card-bg)] p-1">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setTab(item.id);
              setOtpSent(false);
              setOtp("");
              setDevOtpHint("");
            }}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${tab === item.id ? "bg-saffron-500 text-charcoal" : "text-cream/75 hover:text-cream"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm text-cream/70">Full Name</span>
          <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
        </label>

        {tab === "employer" ? (
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm text-cream/70">Farm / Company Name</span>
            <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={employerForm.companyName} onChange={(event) => setEmployerForm((current) => ({ ...current, companyName: event.target.value }))} />
          </label>
        ) : null}

        {tab === "employer" ? (
          <label className="space-y-2">
            <span className="text-sm text-cream/70">Business Type</span>
            <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={employerForm.businessType} onChange={(event) => setEmployerForm((current) => ({ ...current, businessType: event.target.value }))}>
              {employerBusinessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </label>
        ) : null}

        <label className="space-y-2">
          <span className="text-sm text-cream/70">State</span>
          <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.state} onChange={(event) => setForm((current) => ({ ...current, state: event.target.value, district: indiaLocations[event.target.value]?.[0] || "" }))}>
            {stateOptions.map((state) => <option key={state} value={state}>{state}</option>)}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm text-cream/70">District</span>
          <select className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.district} onChange={(event) => setForm((current) => ({ ...current, district: event.target.value }))}>
            {districtOptions.map((district) => <option key={district} value={district}>{district}</option>)}
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm text-cream/70">Village / Town</span>
          <input className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4 py-3 outline-none transition focus:border-saffron-500/50" value={form.village} onChange={(event) => setForm((current) => ({ ...current, village: event.target.value }))} />
        </label>

        {tab === "worker" ? (
          <div className="space-y-2 sm:col-span-2">
            <span className="text-sm text-cream/70">Skills</span>
            <div className="flex flex-wrap gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] p-3">
              {skillOptions.map((skill) => {
                const active = workerForm.skills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`rounded-full px-3 py-2 text-sm transition ${active ? "bg-saffron-500 text-charcoal" : "border border-[var(--glass-border)] bg-[var(--card-bg)] text-cream/70 hover:border-saffron-500/30"}`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        <label className="space-y-2">
          <span className="text-sm text-cream/70">Mobile Number</span>
          <div className="flex items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4">
            <Phone size={18} className="text-saffron-300" />
            <span className="ml-3 text-sm text-cream/70">+91</span>
            <input value={form.mobile} onChange={(event) => setForm((current) => ({ ...current, mobile: event.target.value.replace(/\D/g, "").slice(0, 10) }))} className="w-full bg-transparent px-3 py-4 outline-none" />
          </div>
        </label>
        <label className="space-y-2">
          <span className="text-sm text-cream/70">Password</span>
          <div className="flex items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4">
            <LockKeyhole size={18} className="text-saffron-300" />
            <input type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} className="w-full bg-transparent px-3 py-4 outline-none" />
          </div>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm text-cream/70">Confirm Password</span>
          <div className="flex items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] px-4">
            <LockKeyhole size={18} className="text-saffron-300" />
            <input type="password" value={form.confirmPassword} onChange={(event) => setForm((current) => ({ ...current, confirmPassword: event.target.value }))} className="w-full bg-transparent px-3 py-4 outline-none" />
          </div>
        </label>
      </div>

      {!otpSent ? (
        <button onClick={sendOtp} disabled={loading} className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-saffron-500 px-5 py-3.5 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? <Loader2 size={18} className="animate-spin" /> : null}
          Send OTP
        </button>
      ) : (
        <div className="mt-8 rounded-[28px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-5">
          <p className="text-sm text-cream/70">Enter the 6-digit OTP sent to +91 {form.mobile}</p>
          {devOtpHint ? <p className="mt-2 text-sm text-saffron-300">Test code: {devOtpHint}</p> : null}
          <div className="mt-4">
            <OtpInput value={otp} onChange={setOtp} />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-cream/60">
            <span>{countdown > 0 ? `Resend OTP in ${countdown}s` : "You can resend OTP now"}</span>
            <button type="button" onClick={sendOtp} disabled={countdown > 0 || loading} className="font-medium text-saffron-300 disabled:cursor-not-allowed disabled:opacity-40">
              Resend OTP
            </button>
          </div>
          <button onClick={handleRegister} disabled={loading} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-saffron-500 px-5 py-3.5 font-semibold text-charcoal transition hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? <Loader2 size={18} className="animate-spin" /> : null}
            Verify OTP and Create Account
          </button>
        </div>
      )}
    </AuthShell>
  );
}




