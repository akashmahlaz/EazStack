"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleCheck,
  CreditCard,
  Database,
  Globe2,
  GitBranch,
  Headphones,
  Megaphone,
  Radio,
  Scale,
  Smartphone,
  Sparkles,
  ShieldCheck,
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
  <div className="relative mx-auto flex h-72 w-44 flex-col overflow-hidden rounded-[1.75rem] border-[5px] border-foreground bg-background p-3 shadow-soft sm:h-80 sm:w-48">
    <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-foreground/20" />
    <div className="flex items-center justify-between text-[9px] font-semibold text-muted-foreground">
      <span>9:41</span>
      <span className="flex items-center gap-1 text-primary"><Radio size={9} /> LIVE</span>
    </div>
    <div className="mt-4 rounded-md bg-secondary p-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-medium text-muted-foreground">Weekly activity</span>
        <span className="text-[9px] font-semibold text-primary">+18%</span>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5">
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
    <div className="mt-2 grid grid-cols-2 gap-2">
      <div className="rounded-md border border-border bg-card p-2.5">
        <p className="text-[9px] text-muted-foreground">Frame rate</p>
        <p className="mt-1 text-base font-semibold text-foreground">60 <span className="text-[9px] font-normal">FPS</span></p>
      </div>
      <div className="rounded-md border border-border bg-card p-2.5">
        <p className="text-[9px] text-muted-foreground">Build</p>
        <p className="mt-1 text-base font-semibold text-foreground">1.4.2</p>
      </div>
    </div>
    <div className="mt-auto flex items-center gap-1.5 rounded-md bg-primary/10 p-2 text-[9px] font-semibold text-primary">
      <CircleCheck size={13} /> App Store approved
    </div>
  </div>
);

const WebPreview = () => (
  <div className="flex h-72 flex-col overflow-hidden rounded-lg border border-border bg-background shadow-soft sm:h-80">
    <div className="flex h-11 items-center gap-3 border-b border-border bg-secondary/60 px-4">
      <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-primary/70" /><span className="h-2 w-2 rounded-full bg-primary/40" /><span className="h-2 w-2 rounded-full bg-primary/20" /></div>
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[9px] text-muted-foreground">
        <ShieldCheck size={11} className="text-primary" /> app.production.com
      </div>
    </div>
    <div className="grid flex-1 grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr]">
      <div className="flex flex-col items-center gap-4 border-r border-border bg-secondary/35 py-4 text-muted-foreground">
        <Globe2 size={17} className="text-primary" /><BarChart3 size={17} /><Database size={17} /><GitBranch size={17} />
      </div>
      <div className="min-w-0 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div><p className="text-[9px] font-semibold uppercase text-muted-foreground">Global performance</p><p className="mt-1 font-heading text-lg">Production overview</p></div>
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-1 text-[9px] font-semibold text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Healthy</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-border bg-card p-3"><p className="text-[9px] text-muted-foreground">EDGE LATENCY</p><p className="mt-1 text-xl font-semibold">12<span className="text-[10px] text-primary">ms</span></p></div>
          <div className="rounded-md border border-border bg-card p-3"><p className="text-[9px] text-muted-foreground">UPTIME SLA</p><p className="mt-1 text-xl font-semibold">99.99%</p></div>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1 rounded-md border border-border bg-secondary/30 px-3 pb-3 pt-4">
          {[32, 46, 38, 61, 52, 78, 59, 88, 67, 92, 75, 96].map((height, index) => (
            <motion.span key={index} className="flex-1 rounded-sm bg-primary/60" initial={{ height: "18%" }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .035 }} />
          ))}
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
        <SpotlightCard href="/app-development" label="Explore Mobile App Development" className="min-h-[560px] p-6 sm:p-8 lg:col-span-5">
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

        <SpotlightCard href="/web-development" label="Explore Full-Stack Web Applications" className="min-h-[560px] p-6 sm:p-8 lg:col-span-7">
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
