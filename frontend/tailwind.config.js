/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "rgb(var(--blue-950-rgb) / <alpha-value>)",
          900: "rgb(var(--blue-900-rgb) / <alpha-value>)",
          800: "rgb(var(--blue-800-rgb) / <alpha-value>)",
          700: "rgb(var(--blue-700-rgb) / <alpha-value>)",
          600: "rgb(var(--blue-600-rgb) / <alpha-value>)",
          500: "rgb(var(--blue-500-rgb) / <alpha-value>)",
          400: "rgb(var(--blue-400-rgb) / <alpha-value>)",
          300: "rgb(var(--blue-300-rgb) / <alpha-value>)",
          200: "rgb(var(--blue-200-rgb) / <alpha-value>)",
          100: "rgb(var(--blue-100-rgb) / <alpha-value>)",
          50: "rgb(var(--blue-50-rgb) / <alpha-value>)",
        },
        forest: {
          950: "rgb(var(--blue-950-rgb) / <alpha-value>)",
          900: "rgb(var(--blue-900-rgb) / <alpha-value>)",
          800: "rgb(var(--blue-800-rgb) / <alpha-value>)",
          700: "rgb(var(--blue-700-rgb) / <alpha-value>)",
          600: "rgb(var(--blue-600-rgb) / <alpha-value>)",
        },
        saffron: {
          500: "rgb(var(--blue-500-rgb) / <alpha-value>)",
          400: "rgb(var(--accent-electric-rgb) / <alpha-value>)",
          300: "rgb(var(--blue-300-rgb) / <alpha-value>)",
          200: "rgb(var(--blue-200-rgb) / <alpha-value>)",
          100: "rgb(var(--blue-100-rgb) / <alpha-value>)",
        },
        cream: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        charcoal: "rgb(var(--blue-950-rgb) / <alpha-value>)",
        electric: "rgb(var(--accent-electric-rgb) / <alpha-value>)",
        sapphire: "rgb(var(--accent-sapphire-rgb) / <alpha-value>)",
        gold: "rgb(var(--accent-gold-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--shadow-glow-md)",
        glass: "var(--shadow-card)",
      },
      backgroundImage: {
        grain: "var(--gradient-hero)",
        surface: "var(--gradient-surface)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "var(--shadow-glow-sm)" },
          "50%": { boxShadow: "var(--shadow-glow-lg)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(16px,-18px,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
