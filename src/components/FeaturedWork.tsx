import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Download, Smartphone, Globe, Sparkles } from "lucide-react";
import appMockups from "@/assets/mobile-apps.png";

/* ── browser chrome frame ─────────────────────────────── */
const BrowserFrame = ({
  url,
  variant = "light",
  children,
}: {
  url: string;
  variant?: "light" | "dark";
  children: React.ReactNode;
}) => (
  <div
    className={`rounded-xl overflow-hidden border shadow-lg ${
      variant === "dark"
        ? "border-white/10 shadow-white/5"
        : "border-border shadow-black/5"
    }`}
  >
    {/* title bar */}
    <div
      className={`flex items-center gap-3 px-4 py-3 ${
        variant === "dark" ? "bg-slate-800" : "bg-muted/80"
      }`}
    >
      <div className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div
        className={`flex-1 rounded-md px-3 py-1 text-xs truncate ${
          variant === "dark"
            ? "bg-slate-700 text-slate-300"
            : "bg-background text-muted-foreground"
        }`}
      >
        {url}
      </div>
    </div>

    {/* body */}
    <div className="relative">{children}</div>
  </div>
);

/* ── abstract website placeholder ─────────────────────── */
const JBCPlaceholder = () => (
  <div className="aspect-[16/10] bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 flex flex-col gap-4">
    {/* nav */}
    <div className="flex items-center justify-between">
      <div className="h-4 w-28 rounded bg-sky-200/70" />
      <div className="flex gap-3">
        <div className="h-3 w-14 rounded bg-slate-200" />
        <div className="h-3 w-14 rounded bg-slate-200" />
        <div className="h-3 w-14 rounded bg-slate-200" />
      </div>
    </div>
    {/* hero */}
    <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
      <div className="h-3 w-16 rounded bg-emerald-300/60" />
      <div className="h-6 w-56 rounded bg-sky-300/50" />
      <div className="h-6 w-44 rounded bg-sky-300/40" />
      <div className="h-3 w-64 rounded bg-slate-200/80" />
      <div className="mt-2 flex gap-3">
        <div className="h-8 w-24 rounded-full bg-sky-400/60" />
        <div className="h-8 w-24 rounded-full bg-emerald-400/50" />
      </div>
    </div>
    {/* cards */}
    <div className="flex gap-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-1 rounded-lg bg-white/80 border border-sky-100 p-3 flex flex-col gap-2"
        >
          <div className="h-2 w-12 rounded bg-sky-200/70" />
          <div className="h-2 w-full rounded bg-slate-200/60" />
          <div className="h-2 w-3/4 rounded bg-slate-200/40" />
        </div>
      ))}
    </div>
  </div>
);

const AFBPlaceholder = () => (
  <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col gap-4">
    {/* nav */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded bg-orange-400/70" />
        <div className="h-3 w-20 rounded bg-white/20" />
      </div>
      <div className="flex gap-3">
        <div className="h-3 w-12 rounded bg-white/10" />
        <div className="h-3 w-12 rounded bg-white/10" />
        <div className="h-6 w-16 rounded-full bg-white/15" />
      </div>
    </div>
    {/* hero */}
    <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
      <div className="h-7 w-52 rounded bg-white/15" />
      <div className="h-7 w-40 rounded bg-white/10" />
      <div className="h-3 w-72 rounded bg-white/5" />
      <div className="mt-2 h-9 w-28 rounded-full bg-white/15" />
    </div>
    {/* stats bar */}
    <div className="flex gap-4 justify-center">
      {["12,400+", "99.98%", "38ms"].map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <div className="h-3 w-14 rounded bg-emerald-400/30" />
          <div className="h-2 w-20 rounded bg-white/8" />
        </div>
      ))}
    </div>
    {/* cards */}
    <div className="flex gap-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 flex flex-col gap-2"
        >
          <div className="h-2 w-8 rounded bg-orange-400/30" />
          <div className="h-2 w-full rounded bg-white/8" />
          <div className="h-2 w-3/4 rounded bg-white/5" />
        </div>
      ))}
    </div>
  </div>
);

/* ── tag pill ─────────────────────────────────────────── */
const Tag = ({ label }: { label: string }) => (
  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
    {label}
  </span>
);

/* ── main section ─────────────────────────────────────── */
const FeaturedWork = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        {/* ── header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl">
            Real Products. Real Users.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Shipped, live, and used every day — not just concepts in a pitch deck.
          </p>
        </motion.div>

        {/* ── project 1 — mobile apps ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-20 grid items-center gap-10 md:grid-cols-2 lg:gap-16"
        >
          {/* image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={appMockups}
                alt="Mindset, Sailors, and HiringBull mobile apps"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Smartphone size={16} />
              <span className="font-semibold uppercase tracking-wider">
                Mobile Apps
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl leading-tight">
              Mindset · Sailors · HiringBull
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              From concept to Play Store in 4 weeks. Three production apps built
              with React Native, serving real users daily — meditation, maritime
              networking, and job discovery.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag label="React Native" />
              <Tag label="Expo" />
              <Tag label="iOS & Android" />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 w-fit">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold">
                Our Apps Live on Play Store
              </span>
            </div>

            <a
              href="https://play.google.com/store/search?q=pub:Punjab+Tech&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn mt-1 flex w-fit items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-warm"
            >
              <Download size={16} />
              Download Apps
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* ── project 2 — justbecause ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-20 grid items-center gap-10 md:grid-cols-2 lg:gap-16"
        >
          {/* text — LEFT on desktop */}
          <div className="flex flex-col gap-5 md:order-1">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Globe size={16} />
              <span className="font-semibold uppercase tracking-wider">
                Web Platform
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl leading-tight">
              JustBeCause Network
            </h3>

            <p className="text-lg text-muted-foreground/80 font-medium italic">
              AI-Powered NGO Job Platform
            </p>

            <p className="text-muted-foreground leading-relaxed">
              A full-stack platform connecting NGOs worldwide with skilled
              professionals. Features an AI-powered search engine, job matching,
              verified profiles, and real-time collaboration tools.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag label="Next.js" />
              <Tag label="AI Search" />
              <Tag label="PostgreSQL" />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 w-fit">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold">
                Connecting Skills to Purpose — Globally
              </span>
            </div>

            <a
              href="https://justbecausenetwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn mt-1 flex w-fit items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Visit Live Site
              <ExternalLink
                size={16}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </div>

          {/* mockup — RIGHT on desktop */}
          <div className="relative md:order-2">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-sky-500/5 blur-2xl" />
            <div className="relative transition-transform duration-700 group-hover:scale-[1.01]">
              <BrowserFrame url="justbecausenetwork.com" variant="light">
                <JBCPlaceholder />
              </BrowserFrame>
            </div>
          </div>
        </motion.div>

        {/* ── project 3 — agents for business ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-16 grid items-center gap-10 md:grid-cols-2 lg:gap-16"
        >
          {/* mockup — LEFT */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 blur-2xl" />
            <div className="relative transition-transform duration-700 group-hover:scale-[1.01]">
              <BrowserFrame
                url="agentsforbusiness.lovable.app"
                variant="dark"
              >
                <AFBPlaceholder />
              </BrowserFrame>
            </div>
          </div>

          {/* text — RIGHT */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Sparkles size={16} />
              <span className="font-semibold uppercase tracking-wider">
                SaaS Platform
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl leading-tight">
              Agents For Business
            </h3>

            <p className="text-lg text-muted-foreground/80 font-medium italic">
              AI Agent Management Platform
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Enterprise-grade platform to design, deploy, and observe AI agents
              across support, sales, and operations — from one calm, opinionated
              control room.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag label="SaaS" />
              <Tag label="AI Agents" />
              <Tag label="React" />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 w-fit">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold">
                200+ Tool Adapters · 99.98% Uptime
              </span>
            </div>

            <a
              href="https://agentsforbusiness.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn mt-1 flex w-fit items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Visit Live Site
              <ExternalLink
                size={16}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* ── see all work ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="/contact"
            className="group/all inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            See All Work
            <ArrowRight
              size={20}
              className="transition-transform group-hover/all:translate-x-2"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
