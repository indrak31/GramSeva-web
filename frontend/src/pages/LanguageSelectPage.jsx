import { Check, Globe2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/client";
import { languageOptions } from "../data/languages";
import { useLanguageStore } from "../stores/languageStore";
import { useAuthStore } from "../stores/authStore";

export default function LanguageSelectPage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguageStore();
  const [selected, setSelected] = useState(language || null);
  const [saving, setSaving] = useState(false);

  const { updateUser } = useAuthStore();

  const handleContinue = async () => {
    if (!selected) return;
    try {
      setSaving(true);
      await api.patch("/user/language", { language: selected });
      setLanguage(selected);
      updateUser({ language: selected, needsLanguageSelection: false });
      toast.success("Language saved");
      navigate("/verify-documents", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.error || "Unable to save language");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="luxury-shell relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-100/40"
            style={{ left: `${(index * 11) % 100}%`, top: `${(index * 7) % 100}%`, animation: `float ${4 + (index % 6)}s ease-in-out infinite` }}
          />
        ))}
      </div>

      <div className="glass-panel relative w-full max-w-5xl rounded-[36px] p-6 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[var(--glass-border)] bg-blue-500/12 text-electric shadow-glow">
            <Globe2 size={28} />
          </div>
          <h1 className="mt-6 font-display text-5xl text-cream">Choose your language</h1>
          <p className="mt-4 text-base text-cream/70">You can change this later from your profile settings.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languageOptions.map((language) => {
            const active = selected === language.code;
            return (
              <button
                key={language.code}
                onClick={() => setSelected(language.code)}
                className={`glass-card relative rounded-[28px] p-6 text-left transition ${active ? "border-[var(--border-glow)] bg-blue-500/12 shadow-glow" : "hover-lift hover:border-[var(--border-glow)]"}`}
              >
                {active ? (
                  <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-saffron-500 text-charcoal shadow-glow">
                    <Check size={16} />
                  </span>
                ) : null}
                <div className="text-2xl font-semibold tracking-[0.24em] text-saffron-300">{language.symbol}</div>
                <p className="mt-6 text-2xl font-semibold text-cream">{language.nativeLabel}</p>
                <p className="mt-2 text-sm text-cream/62">{language.label}</p>
              </button>
            );
          })}
        </div>

        {selected ? (
          <div className="mt-10 flex justify-center">
            <button onClick={handleContinue} disabled={saving} className="btn-primary rounded-full px-8 py-3.5 font-semibold text-charcoal disabled:cursor-not-allowed disabled:opacity-70">
              {saving ? "Saving..." : "Continue"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}




