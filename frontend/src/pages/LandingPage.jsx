// npm install react react-dom react-router-dom @tanstack/react-query zustand i18next react-i18next i18next-http-backend three @react-three/fiber @react-three/drei framer-motion axios react-hot-toast react-image-crop lucide-react date-fns
// npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  Leaf,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroCanvas from "../components/common/HeroCanvas";
import SectionHeading from "../components/common/SectionHeading";
import StatCounter from "../components/common/StatCounter";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const steps = [
  {
    icon: "01",
    title: "Register & Verify",
    description: "Aadhaar-linked secure login with OTP verification keeps every profile trusted and traceable.",
  },
  {
    icon: "02",
    title: "Choose Your Language",
    description: "Browse jobs, chat with GRAM AI, and complete onboarding in the language you actually use every day.",
  },
  {
    icon: "03",
    title: "Apply or Hire",
    description: "Real jobs from real employers across agriculture, construction, transport, domestic work, and skilled labour.",
  },
];

const features = [
  {
    icon: MessageSquareText,
    title: "GRAM AI Assistant",
    description: "Guides workers and employers with simple, local-language help for jobs, skills, and hiring decisions.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "OTP-Verified Profiles",
    description: "Every account begins with a trusted mobile verification flow to reduce spam and fake listings.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Nine language options across the product so onboarding does not exclude rural users.",
  },
  {
    icon: CheckCircle2,
    title: "Document Verification",
    description: "Upload Aadhaar, PAN, licence, or other identity documents for higher trust and faster hiring.",
  },
  {
    icon: Globe2,
    title: "Skill Courses",
    description: "Short, practical upskilling paths for workers who want stronger profiles and better pay.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Transparent worker-employer feedback helps high-quality people and businesses stand out.",
  },
];

const testimonials = [
  {
    name: "Savita Shinde",
    district: "Satara, Maharashtra",
    quote: "I found seasonal farm work within my district in three days, and the employer already knew my skills before calling.",
    avatar: "https://picsum.photos/seed/gramseva-1/160/160",
  },
  {
    name: "Rafiq Ansari",
    district: "Prayagraj, Uttar Pradesh",
    quote: "The Hindi flow made signup easy. GRAM AI helped me improve my profile and get shortlisted for masonry work.",
    avatar: "https://picsum.photos/seed/gramseva-2/160/160",
  },
  {
    name: "Patil Farms",
    district: "Nashik, Maharashtra",
    quote: "We posted vacancies, filtered workers by skills, and hired verified local labour faster than phone-based referrals.",
    avatar: "https://picsum.photos/seed/gramseva-3/160/160",
  },
];

function FloatingAccent({ className }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} aria-hidden="true" />;
}

function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition ${scrolled ? "border-[var(--glass-border)] bg-[color:rgb(var(--blue-950-rgb)/0.72)] shadow-glass backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-500/15 text-saffron-300">
            <Leaf size={22} />
          </div>
          <span className="font-display text-3xl text-cream">GramRozgaar</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-cream/76 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/auth/signin" className="btn-secondary rounded-full px-5 py-2.5 font-medium text-cream">
            Sign In
          </Link>
          <Link to="/auth/signup" className="btn-primary rounded-full px-5 py-2.5 font-semibold text-charcoal">
            Sign Up
          </Link>
        </div>

        <button className="rounded-full border border-[var(--glass-border)] p-2 lg:hidden" onClick={() => setOpen((current) => !current)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="glass-panel mx-auto mt-3 max-w-7xl rounded-[28px] p-5 lg:hidden">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-cream/76 transition hover:bg-blue-500/10 hover:text-cream" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link to="/auth/signin" className="btn-secondary rounded-full px-4 py-3 text-center text-sm font-medium text-cream">
              Sign In
            </Link>
            <Link to="/auth/signup" className="btn-primary rounded-full px-4 py-3 text-center text-sm font-semibold text-charcoal">
              Sign Up
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default function LandingPage() {
  return (
    <div className="luxury-shell relative overflow-hidden bg-charcoal text-cream">
      <LandingNav />
      <FloatingAccent className="left-[-8rem] top-24 h-72 w-72 bg-saffron-500/18" />
      <FloatingAccent className="right-[-6rem] top-40 h-72 w-72 bg-forest-600/20" />

      <main>
        <section id="home" className="relative min-h-screen bg-grain grain-overlay pt-28">
          <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }} className="relative z-10">
              <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="eyebrow-badge px-4 py-2 text-sm font-semibold">
                Trusted rural jobs platform
              </motion.span>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-7 max-w-3xl font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                Connecting Rural <span className="text-saffron-400 italic">Talent</span> with Real <span className="text-saffron-400 italic">Opportunity</span>
              </motion.h1>
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-2xl text-lg leading-8 text-cream/72 sm:text-xl">
                Find farm work, construction jobs, artisan gigs and more in your language, in your district, with trust built into every step.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap gap-4">
                <Link to="/auth/signup" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-charcoal">
                  Find Jobs
                  <ArrowRight size={18} />
                </Link>
                <Link to="/auth/signup" className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-cream">
                  Post a Job
                </Link>
              </motion.div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <StatCounter value={50000} label="Workers Connected" />
                <StatCounter value={12000} label="Employers Onboarded" />
                <StatCounter value={18} label="States Activated" suffix="" />
              </div>
            </motion.div>

            <div className="glass-panel relative h-[360px] overflow-hidden rounded-[36px] sm:h-[420px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-[36px] bg-surface opacity-90" />
              <div className="absolute left-10 top-10 h-16 w-16 animate-drift rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm" />
              <div className="absolute bottom-12 right-10 h-20 w-20 animate-float rounded-[28px] border border-saffron-500/20 bg-saffron-500/10 backdrop-blur-sm" />
              <HeroCanvas />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How It Works"
              title="Three Steps to Your Next Opportunity"
              description="Simple onboarding for workers, faster hiring for employers, and trusted verification at every stage."
              align="center"
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="glass-card hover-lift rounded-[30px] p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron-500/12 text-3xl">{step.icon}</div>
                  <h3 className="mt-8 text-2xl font-semibold text-cream">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-cream/68">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-forest-950/65 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Platform Strength"
              title="Built for trust, access, and rural earning power"
              description="GramRozgaar combines verified identity, local-language UX, AI guidance, and reusable worker reputation into one hiring system."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`rounded-[30px] border p-6 ${feature.featured ? "border-saffron-500/30 bg-gradient-to-br from-saffron-500/16 to-blue-300/8 shadow-glow lg:col-span-2" : "border-[var(--glass-border)] bg-[var(--card-bg)] shadow-glass"}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800/80 text-saffron-300">
                    <feature.icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-cream">{feature.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-cream/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-[var(--glass-border)] bg-forest-800/95 px-6 py-10 shadow-glass sm:px-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCounter value={50000} label="Workers Placed" />
              <StatCounter value={12000} label="Employers" />
              <StatCounter value={275} label="Districts Covered" />
              <StatCounter value={9} label="Languages" suffix="" />
            </div>
          </div>
        </section>

        <section id="success-stories" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Success Stories"
              title="Workers and employers already building momentum"
              description="From seasonal harvesting to construction crews, verified profiles and local discovery help both sides move faster."
            />
            <div className="custom-scrollbar mt-14 flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="min-w-[320px] rounded-[30px] border border-[var(--glass-border)] bg-[var(--card-bg)] p-6 shadow-glass lg:min-w-0"
                >
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div>
                      <h3 className="text-xl font-semibold text-cream">{testimonial.name}</h3>
                      <p className="text-sm text-cream/60">{testimonial.district}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-8 text-cream/72">“{testimonial.quote}”</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[var(--glass-border)] bg-forest-950 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-500/15 text-saffron-300">
                  <Leaf size={22} />
                </div>
                <span className="font-display text-3xl text-cream">GramRozgaar</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-cream/65">A rural employment marketplace connecting workers, farmers, contractors, and local businesses through trust-first digital infrastructure.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Explore</p>
                <div className="mt-4 space-y-3 text-sm text-cream/66">
                  <a href="#home">Home</a>
                  <a href="#how-it-works">How It Works</a>
                  <a href="#success-stories">Success Stories</a>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Support</p>
                <div className="mt-4 space-y-3 text-sm text-cream/66">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms</a>
                  <a href="mailto:hello@gramseva.in">Contact</a>
                  <a href="#">Help</a>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-saffron-300">Reach</p>
                <div className="mt-4 flex gap-3 text-sm text-cream/66">
                  <span className="rounded-full border border-[var(--glass-border)] px-3 py-2">X</span>
                  <span className="rounded-full border border-[var(--glass-border)] px-3 py-2">IG</span>
                  <span className="rounded-full border border-[var(--glass-border)] px-3 py-2">LI</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[var(--glass-border)] pt-6 text-sm text-cream/56">Built for rural India</div>
        </div>
      </footer>
    </div>
  );
}







