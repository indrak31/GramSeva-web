export default function OtpInput({ value, onChange }) {
  const digits = value.padEnd(6, " ").slice(0, 6).split("");

  const updateDigit = (index, nextValue) => {
    const clean = nextValue.replace(/\D/g, "").slice(-1);
    const chars = value.padEnd(6, " ").slice(0, 6).split("");
    chars[index] = clean;
    onChange(chars.join("").replace(/\s/g, ""));
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-3">
      {digits.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit.trim()}
          onChange={(event) => updateDigit(index, event.target.value)}
          className="h-12 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)] text-center text-lg font-semibold text-cream outline-none transition focus:border-saffron-500/60 focus:ring-2 focus:ring-saffron-500/30"
        />
      ))}
    </div>
  );
}

