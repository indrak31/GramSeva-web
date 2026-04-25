import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, label, suffix = "+" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    let animationFrame = 0;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="glass-card hover-lift rounded-3xl px-5 py-4"
    >
      <div className="font-display text-3xl text-cream sm:text-4xl">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-cream/70">{label}</p>
    </motion.div>
  );
}
