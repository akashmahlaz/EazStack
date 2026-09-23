import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Github, Linkedin, Twitter, MessageCircle, ArrowUpRight, Sparkles, MoveRight } from "lucide-react";
import { Input } from "./ui/input";
import {
  COMPANY_NAME,
  EMAIL,
  FOOTER_NAV,
  LEGAL_LINKS,
  PHONE,
  SOCIAL_LINKS,
  BOOKING_URL,
} from "@/lib/config";

// --- Magnetic Button Component ---
const MagneticWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Spinning Orbital Badge CTA ---
const OrbitalCTA = () => {
  const text = "START A PROJECT • WORK WITH US • ";
  return (
    <MagneticWrapper className="relative flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-background shadow-warm border border-primary/20 group hover:bg-primary transition-colors duration-500">
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible opacity-50 group-hover:opacity-100 group-hover:text-primary-foreground transition-all">
          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
          <text fontSize="10.5" fontWeight="bold" className="fill-primary group-hover:fill-primary-foreground uppercase tracking-widest font-heading">
            <textPath href="#circlePath" startOffset="0%">{text}</textPath>
          </text>
        </svg>
      </div>
      <ArrowUpRight size={40} strokeWidth={1.5} className="text-primary group-hover:text-primary-foreground group-hover:scale-125 transition-transform duration-500" />
    </MagneticWrapper>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLElement>(null);

  // --- Scroll Parallax for Marquee ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const smoothX = useSpring(rawX, { damping: 30, stiffness: 100 });

  // --- Mouse Spotlight Effect ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightMask = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black 10%, transparent 80%)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Invalid email.");
      return;
    }
    setMessage("Welcome aboard! 🚀");
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=Newsletter`;
    }, 1000);
  };

  return (
    <footer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mt-32 w-full overflow-hidden bg-background border-t border-border pt-10"
    >
      {/* 1. THE INTERACTIVE SPOTLIGHT BACKGROUND */}
      {/* Base Layer: Outlined Text */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-10">
        <h1
          className="text-[20vw] font-black leading-none font-heading whitespace-nowrap text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          {COMPANY_NAME}
        </h1>
        <h1
          className="text-[20vw] font-black leading-none font-heading whitespace-nowrap text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          {COMPANY_NAME}
        </h1>
      </div>

      {/* Hover Reveal Layer: Colorful Filled Text masked by cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center bg-background/50"
        style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
      >
        <div className="absolute inset-0 bg-gradient-warm opacity-10 blur-3xl mix-blend-multiply" />
        <h1 className="text-[20vw] font-black leading-none font-heading whitespace-nowrap text-gradient">
          {COMPANY_NAME}
        </h1>
        <h1 className="text-[20vw] font-black leading-none font-heading whitespace-nowrap text-gradient">
          {COMPANY_NAME}
        </h1>
      </motion.div>


      {/* 2. THE MAIN CONTENT (Architectural Grid) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-12">

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 border-b border-border/60 pb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary"
            >
              <span className="block h-px w-8 bg-primary"></span>
              Have an idea?
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-foreground leading-[0.9]">
              Let's create the <br />
              <span className="italic font-light text-muted-foreground">impossible.</span>
            </h2>
          </div>

          <a href={BOOKING_URL} className="shrink-0">
            <OrbitalCTA />
          </a>
        </div>

        {/* Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-border/60">

          {/* Company Links */}
          <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-border/60 p-8 pl-0">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Company</h3>
            <ul className="flex flex-col gap-5">
              {FOOTER_NAV.company.links.map((link, i) => (
                <li key={link.href} className="group overflow-hidden">
                  <a href={link.href} className="flex items-center gap-2 text-xl font-heading font-medium text-foreground transition-all hover:text-primary">
                    <span className="relative flex overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                      <span className="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">{link.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1 md:col-span-3 border-r-0 md:border-r border-b md:border-b-0 border-border/60 p-8 md:pl-8">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Services</h3>
            <ul className="flex flex-col gap-5">
              {FOOTER_NAV.services.links.map((link) => (
                <li key={link.href} className="group overflow-hidden">
                  <a href={link.href} className="flex items-center gap-2 text-xl font-heading font-medium text-foreground transition-all hover:text-primary">
                    <span className="relative flex overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                      <span className="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">{link.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-6 p-8 md:pl-12 flex flex-col justify-center">
            <h3 className="mb-4 text-3xl font-heading font-bold text-foreground">
              Stay ahead of the curve.
            </h3>
            <p className="mb-8 max-w-md text-muted-foreground">
              Join our exclusive newsletter for the latest tech insights, case studies, and design trends. No spam, ever.
            </p>

            <form onSubmit={handleSubmit} className="relative w-full max-w-md group">
              <div className="relative flex items-center overflow-hidden rounded-full border border-border bg-card shadow-soft transition-all duration-300 focus-within:border-primary focus-within:shadow-warm hover:border-primary/50">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-16 border-0 bg-transparent px-6 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0"
                />
                <button
                  type="submit"
                  className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-95 hover:bg-primary"
                >
                  <MoveRight size={20} />
                </button>
              </div>
              {message && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-7 left-4 text-xs font-bold text-primary">
                  {message}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* 3. PARALLAX MARQUEE */}
        <div className="relative flex overflow-hidden py-16">
          <motion.div style={{ x: smoothX }} className="flex whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <h1 key={i} className="mr-8 text-8xl md:text-[140px] font-black font-heading tracking-tighter text-muted/30 select-none">
                BUILD • SCALE • WIN •
              </h1>
            ))}
          </motion.div>
        </div>

        {/* 4. BOTTOM BAR (Legal & Socials) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {COMPANY_NAME}.</span>
            <span className="hidden sm:inline-block">Designed in Punjab.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.twitter} className="hover:text-primary hover:-translate-y-1 transition-transform"><Twitter size={18} /></a>
            <a href={SOCIAL_LINKS.linkedin} className="hover:text-primary hover:-translate-y-1 transition-transform"><Linkedin size={18} /></a>
            <a href={SOCIAL_LINKS.github} className="hover:text-primary hover:-translate-y-1 transition-transform"><Github size={18} /></a>
            <a href={SOCIAL_LINKS.whatsapp} className="hover:text-primary hover:-translate-y-1 transition-transform"><MessageCircle size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
