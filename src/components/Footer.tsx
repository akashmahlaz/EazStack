import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, MessageCircle, ArrowUpRight, Sparkles, MapPin, Clock } from "lucide-react";
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

// Magnetic Button Component for Socials
const MagneticSocial = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 transition-colors hover:bg-white hover:text-black overflow-hidden"
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.a>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Live Clock Logic (Punjab/India Time)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Welcome to the inner circle. 🚀");
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=Newsletter Subscription`;
    }, 1500);
  };

  return (
    <footer className="relative w-full px-4 pb-4 pt-32 overflow-hidden bg-background">
      {/* Floating Bento Container */}
      <motion.div
        ref={containerRef}
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl rounded-[2.5rem] bg-zinc-950 px-6 py-12 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Main CTA & Brand Card (Spans 8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-3xl bg-white/[0.03] border border-white/5 p-8 md:p-12 hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight size={120} className="text-white/5" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for new projects
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Let's build the next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic font-serif">big thing</span> together.
              </h2>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={BOOKING_URL}
                className="group/btn relative overflow-hidden rounded-full bg-white px-8 py-4 text-black font-bold transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a project <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" />
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="px-6 py-4 text-zinc-400 hover:text-white transition-colors font-medium">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Clock & Location Card (Spans 4 columns) */}
          <div className="lg:col-span-4 rounded-3xl bg-white/[0.03] border border-white/5 p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex items-center gap-3 text-zinc-400">
              <MapPin size={20} />
              <span className="font-medium tracking-wide">PUNJAB, IN</span>
            </div>

            <div className="relative z-10 mt-8">
              <div className="text-zinc-500 text-sm font-medium mb-2 flex items-center gap-2">
                <Clock size={14} /> LOCAL TIME
              </div>
              <div className="text-4xl md:text-5xl font-mono text-white font-light tracking-tighter">
                {time || "00:00:00"}
              </div>
            </div>
          </div>

          {/* Links Grid (Spans 5 columns) */}
          <div className="lg:col-span-5 rounded-3xl bg-white/[0.03] border border-white/5 p-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Explore</h3>
                <ul className="flex flex-col gap-4">
                  {FOOTER_NAV.company.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-zinc-300 hover:text-primary transition-colors inline-flex items-center gap-2 group">
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Services</h3>
                <ul className="flex flex-col gap-4">
                  {FOOTER_NAV.services.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-zinc-300 hover:text-white transition-colors hover:underline decoration-white/30 underline-offset-4">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Socials (Spans 7 columns) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6">
            {/* Newsletter */}
            <div className="flex-1 rounded-3xl bg-white/[0.03] border border-white/5 p-8 relative overflow-hidden">
              <Sparkles className="absolute top-8 right-8 text-white/10" size={80} />
              <h3 className="text-zinc-100 font-bold text-xl mb-2 relative z-10">Stay in the loop.</h3>
              <p className="text-zinc-400 text-sm mb-6 relative z-10">No spam, just top-tier tech insights.</p>

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-3">
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-zinc-600 h-14 pl-6 pr-32 rounded-2xl focus-visible:ring-primary/50 focus-visible:border-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-white text-black font-bold px-6 rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    Join
                  </button>
                </div>
                {message && <p className="text-primary text-sm font-medium">{message}</p>}
              </form>
            </div>

            {/* Socials Grid */}
            <div className="sm:w-[120px] grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex sm:flex-col gap-4 justify-between h-full">
                <MagneticSocial href={SOCIAL_LINKS.twitter}><Twitter size={24} /></MagneticSocial>
                <MagneticSocial href={SOCIAL_LINKS.linkedin}><Linkedin size={24} /></MagneticSocial>
                <MagneticSocial href={SOCIAL_LINKS.github}><Github size={24} /></MagneticSocial>
                <MagneticSocial href={SOCIAL_LINKS.whatsapp}><MessageCircle size={24} /></MagneticSocial>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Marquee / Typography Section */}
        <div className="relative mt-24 mb-12 flex flex-col items-center justify-center overflow-hidden border-t border-white/10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full text-center"
          >
            <h1 className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
              PUNJAB TECH
            </h1>
          </motion.div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Designed in Punjab.</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
