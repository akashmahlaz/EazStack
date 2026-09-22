import { motion, useReducedMotion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleCheck,
  CreditCard,
  Database,
  GitBranch,
  Headphones,
  Megaphone,
  Radio,
  Scale,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const Chip = ({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) => (
  <span
    className={
      inverted
        ? "rounded-full border border-background/15 bg-background/10 px-2.5 py-1 text-[11px] font-medium text-background/80"
        : "rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
    }
  >
    {children}
  </span>
);

const MobilePreview = () => (
  <div className="relative mx-auto flex h-52 w-32 flex-col overflow-hidden rounded-[1.5rem] border-4 border-foreground bg-background p-2 shadow-soft sm:h-56 sm:w-36">
    <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-foreground/20" />
    <div className="flex items-center justify-between text-[8px] font-semibold text-muted-foreground">
      <span>9:41</span>
      <span className="flex items-center gap-1 text-primary"><Radio size={8} /> LIVE</span>
    </div>
    <div className="mt-3 rounded-md bg-secondary p-2">
      <span className="text-[8px] font-medium text-muted-foreground">Weekly activity</span>
      <div className="mt-2 flex h-12 items-end gap-1">
        {[35, 56, 42, 76, 62, 88, 68].map((height, index) => (
          <motion.span
            key={height + index}
            className="flex-1 rounded-sm bg-primary/70"
            initial={{ height: "15%" }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          />
        ))}
      </div>
    </div>
    <div className="mt-2 grid grid-cols-2 gap-1.5">
      <div className="rounded-md border border-border bg-card p-2">
        <p className="text-[8px] text-muted-foreground">Frame rate</p>
        <p className="mt-1 text-sm font-semibold text-foreground">60 <span className="text-[8px] font-normal">FPS</span></p>
      </div>
      <div className="rounded-md border border-border bg-card p-2">
        <p className="text-[8px] text-muted-foreground">Build</p>
        <p className="mt-1 text-sm font-semibold text-foreground">1.4.2</p>
      </div>
    </div>
    <div className="mt-auto flex items-center gap-1 rounded-md bg-primary/10 p-1.5 text-[8px] font-semibold text-primary">
      <CircleCheck size={11} /> App Store approved
    </div>
  </div>
);

const WebPreview = () => (
  <div className="flex h-52 flex-col overflow-hidden rounded-lg border border-foreground/15 bg-foreground p-4 font-mono text-background sm:h-56">
    <div className="flex items-center justify-between border-b border-background/15 pb-3 text-[10px] text-background/60">
      <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> EDGE NETWORK</span>
      <span>prod / global</span>
    </div>
    <div className="grid flex-1 grid-cols-[1fr_auto] gap-4 pt-4">
      <div className="space-y-2 text-[10px] text-background/70">
        <p><span className="text-primary">$</span> deploy --region global</p>
        <p><span className="text-primary">✓</span> functions compiled</p>
        <p><span className="text-primary">✓</span> edge cache warmed</p>
        <p><span className="text-primary">✓</span> health checks passing</p>
        <motion.p
          className="flex items-center gap-2 pt-2 text-background"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> listening for traffic
        </motion.p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="min-w-24 rounded-md border border-background/15 bg-background/5 p-3">
          <p className="text-[9px] text-background/55">EDGE LATENCY</p>
          <p className="mt-1 text-2xl font-semibold text-background">12<span className="text-xs text-primary">ms</span></p>
        </div>
        <div className="min-w-24 rounded-md border border-background/15 bg-background/5 p-3">
          <p className="text-[9px] text-background/55">SLA</p>
          <p className="mt-1 text-xl font-semibold text-background">99.99%</p>
        </div>
      </div>
    </div>
  </div>
);

const PipelinePreview = () => {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { icon: Sparkles, label: "Query" },
    { icon: Database, label: "Retrieve" },
    { icon: GitBranch, label: "RAG" },
    { icon: Radio, label: "LLM" },
  ];

  return (
    <div className="rounded-lg border border-border bg-secondary/55 p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between text-[10px] font-semibold uppercase text-muted-foreground">
        <span>Agent pipeline</span>
        <span className="flex items-center gap-1.5 text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Streaming</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {nodes.map((node, index) => (
          <div key={node.label} className="relative flex min-w-0 flex-col items-center text-center">
            {index < nodes.length - 1 && (
              <span className="absolute left-[62%] top-5 h-px w-[76%] overflow-hidden bg-border">
                <motion.span
                  className="block h-full w-1/2 bg-primary"
                  animate={reduceMotion ? undefined : { x: ["-100%", "220%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2, ease: "linear" }}
                />
              </span>
            )}
            <motion.span
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft"
              animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, delay: index * 0.25 }}
            >
              <node.icon size={17} />
            </motion.span>
            <span className="mt-2 truncate text-[10px] font-semibold text-foreground sm:text-xs">{node.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-md border border-border bg-card px-3 py-2 text-[10px]">
        <span className="text-muted-foreground">Tokens streaming</span>
        <span className="font-semibold text-primary">42 tok/s</span>
      </div>
    </div>
  );
};

const supportingServices = [
  { icon: Scale, title: "Legal & Compliance", desc: "Company setup, contracts and regulatory readiness.", href: "/legal", chips: ["Contracts", "Registration"] },
  { icon: Apple, title: "App Store Publishing", desc: "Listings, screenshots, submissions and review fixes.", href: "/app-store-publishing", chips: ["App Store", "Play Store"] },
  { icon: WalletCards, title: "Funding Guidance", desc: "Investor narratives, financial models and pitch support.", href: "/funding-guidance", chips: ["Pitch decks", "Modeling"] },
  { icon: CreditCard, title: "Payment Integration", desc: "Secure checkout, subscriptions and global payments.", href: "/payment-integration", chips: ["Stripe", "Razorpay"] },
  { icon: BarChart3, title: "CRM Integration", desc: "Sales pipelines, lead routing and useful automation.", href: "/crm-integration", chips: ["HubSpot", "Automation"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Search, paid acquisition and content that compounds.", href: "/digital-marketing", chips: ["SEO", "PPC"] },
  { icon: Users, title: "Hiring Support", desc: "Technical screening and team-building support.", href: "/hiring-support", chips: ["Sourcing", "Interviews"] },
  { icon: Headphones, title: "Ongoing Support", desc: "Monitoring, improvements and reliable release care.", href: "/ongoing-support", chips: ["Monitoring", "Updates"] },
];

const Services = () => (
  <section id="services" aria-labelledby="services-title" className="overflow-hidden py-24">
    <div className="container mx-auto px-6">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-12 max-w-3xl"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Built as one connected studio</p>
        <h2 id="services-title" className="font-heading text-4xl leading-tight md:text-5xl">From first build to full-scale business.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Senior product engineering at the center, with every service your startup needs to launch and grow around it.
        </p>
      </motion.header>

      <div className="grid auto-rows-fr gap-4 lg:grid-cols-12">
        <SpotlightCard href="/app-development" label="Explore Mobile App Development" className="min-h-[470px] p-6 sm:p-8 lg:col-span-5">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-primary"><Smartphone size={15} /> Flagship 01</p>
                <h3 className="font-heading text-3xl leading-tight">Mobile App Development</h3>
              </div>
              <ArrowUpRight className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Native-feeling iOS and Android products, tuned from interaction to store release.</p>
            <div className="my-6 flex-1"><MobilePreview /></div>
            <div className="flex flex-wrap gap-2"><Chip>React Native</Chip><Chip>Expo</Chip><Chip>Swift gestures</Chip></div>
          </div>
        </SpotlightCard>

        <SpotlightCard href="/web-development" label="Explore Full-Stack Web Applications" className="min-h-[470px] p-6 sm:p-8 lg:col-span-7">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-primary"><GitBranch size={15} /> Flagship 02</p>
                <h3 className="font-heading text-3xl leading-tight">Full-Stack Web Applications</h3>
              </div>
              <ArrowUpRight className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Fast, resilient platforms engineered for real traffic and real operational complexity.</p>
            <div className="my-6 flex-1"><WebPreview /></div>
            <div className="flex flex-wrap gap-2"><Chip>React</Chip><Chip>TypeScript</Chip><Chip>Edge compute</Chip><Chip>PostgreSQL</Chip></div>
          </div>
        </SpotlightCard>

        <SpotlightCard href="/web-development" label="Explore SaaS and AI Product Engineering" className="min-h-[390px] p-6 sm:p-8 lg:col-span-12">
          <div className="grid h-full items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-primary"><Sparkles size={15} /> Flagship 03</p>
                  <h3 className="font-heading text-3xl leading-tight sm:text-4xl">SaaS & AI Product Engineering</h3>
                </div>
                <ArrowUpRight className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">Production AI workflows, retrieval systems and subscription products shaped around a dependable core.</p>
              <div className="mt-6 flex flex-wrap gap-2"><Chip>LLM</Chip><Chip>RAG</Chip><Chip>Agents</Chip><Chip>Streaming</Chip></div>
            </div>
            <PipelinePreview />
          </div>
        </SpotlightCard>
      </div>

      <div className="my-10 flex items-end justify-between gap-6 border-b border-border pb-5">
        <div>
          <p className="text-xs font-semibold uppercase text-primary">Startup acceleration suite</p>
          <h3 className="mt-2 font-heading text-2xl sm:text-3xl">Everything around the product.</h3>
        </div>
        <span className="hidden text-sm text-muted-foreground sm:block">8 connected services</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {supportingServices.map((service, index) => (
          <SpotlightCard
            key={service.title}
            href={service.href}
            label={`Explore ${service.title}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.035 }}
            className="min-h-64 p-5 sm:p-6"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/15 bg-primary/10 text-primary"><service.icon size={19} /></span>
                <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h4 className="mt-6 font-heading text-xl leading-snug">{service.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {service.chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-muted-foreground">
        {["Strategy-led", "Senior delivery", "Launch-ready", "Built to scale"].map((item) => (
          <span key={item} className="flex items-center gap-2"><Check size={14} className="text-primary" /> {item}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Services;