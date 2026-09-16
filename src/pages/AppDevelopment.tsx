import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { title: "MVP Mobile App", desc: "Ship a lean, production-ready MVP to the stores fast — validated features, no fluff." },
  { title: "React Native (iOS & Android)", desc: "One codebase, two stores. Built with React Native & Expo." },
  { title: "App Store & Play Store Publishing", desc: "Listing, screenshots, metadata, and review fixes — we ship your app live." },
  { title: "App Backend & APIs", desc: "Auth, databases, and REST/GraphQL APIs tuned for mobile." },
  { title: "Post-Launch Support", desc: "Updates, crash fixes, and ASO to keep your app growing." },
];

const caseStudies = [
  { name: "Mindset", desc: "Mobile mindfulness app — live on the Google Play Store (com.mindset.app).", href: "https://play.google.com/store/apps/details?id=com.mindset.app" },
  { name: "Sailors Platform", desc: "Maritime social app — real-time audio, crew discovery, and messaging.", href: "https://sailorsplatform.com" },
  { name: "HiringBull", desc: "Real-time job alerts tailored to experience level — built for mobile-first hiring.", href: "https://hiringbull.org" },
  { name: "JustBeCause", desc: "Volunteer hiring network connecting nonprofits with talent.", href: "https://justbecausenetwork.com" },
];

const Mockup = ({ title, href }: { title: string; href?: string }) => (
  <div className="flex flex-col items-center gap-3">
    <svg width="152" height="304" viewBox="0 0 152 304" className="text-foreground">
      <rect x="6" y="4" width="140" height="296" rx="22" ry="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="26" width="116" height="240" rx="14" ry="14" fill="#f1f5f5" />
      <text x="76" y="160" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="ui-sans,system-ui,sans-serif">
        {title} screenshot
      </text>
    </svg>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary">
        → {title} live
      </a>
    ) : (
      <span className="text-xs text-muted-foreground">In progress</span>
    )}
  </div>
);

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title="Punjab Tech | Mobile App Development (React Native) - Akashdeep Singh" description="Punjab Tech builds mobile apps with React Native for iOS and Android. MVPs, Play Store apps, and full startup launch. Based in Punjab. Book a free call." />
      <section className="py-24 pt-20 text-center">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Mobile App Development
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-heading text-4xl leading-[1.1] md:text-6xl"
          >
            We build mobile apps that ship to the App Store & Play Store.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          >
            Punjab Tech builds mobile apps (React Native) that get downloaded, used, and featured. Built by Akashdeep Singh.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20build%20an%20app%20together"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground"
          >
            Chat on WhatsApp
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      <section className="border-y border-border py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 px-6 text-center text-sm text-muted-foreground">
          <span>MVPs shipped to the stores</span><span>&middot;</span>
          <span>React Native & Expo</span><span>&middot;</span>
          <span>iOS + Android</span>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 font-heading text-3xl text-center">How we help</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border p-6">
                <h3 className="mb-2 font-heading text-xl">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 font-heading text-3xl text-center">Live apps &amp; mockups</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-sm text-muted-foreground">
            Apps we have shipped — mobile-first. (Phone frames below are placeholders; swap in real screenshots.)
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3">
            <Mockup title="Mindset" href="https://play.google.com/store/apps/details?id=com.mindset.app" />
            <Mockup title="Sailors Platform" href="https://sailorsplatform.com" />
            <Mockup title="HiringBull" href="https://hiringbull.org" />
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.mindset.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18v1H3z" opacity=".2"/><path d="M12 22c5.523 0 10-4.477 10-10S18.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2V5v15z"/></svg>
              Get Mindset on Google Play
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 font-heading text-3xl text-center">MVP in 4 weeks</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Ship a real mobile app to the stores — not a deck.
          </p>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">1</span>
              <div className="text-left">
                <p className="font-semibold">Week 1 — Discover &amp; scope</p>
                <p className="text-sm text-muted-foreground">Feature list, user flow, and the leanest MVP that proves value.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">2</span>
              <div className="text-left">
                <p className="font-semibold">Week 2 — Build the core</p>
                <p className="text-sm text-muted-foreground">Native navigation, auth, onboarding, and the 3 features users actually need.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">3</span>
              <div className="text-left">
                <p className="font-semibold">Week 3 — Backend + stores</p>
                <p className="text-sm text-muted-foreground">API integration, App Store Connect, Play Console listing, and review fixes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">4</span>
              <div className="text-left">
                <p className="font-semibold">Week 4 — Ship &amp; fix</p>
                <p className="text-sm text-muted-foreground">Final QA, go-live, and the first round of crash/log fixes — live in the stores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 font-heading text-3xl text-center">Selected work</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-sm text-muted-foreground">Apps we have shipped — proof of work.</p>
          <div className="mx-auto grid max-w-5xl gap-6">
            {caseStudies.map((c) => (
              <div key={c.name} className="rounded-xl border border-border p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-heading text-xl">{c.name}</h3>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="text-xs font-medium text-primary">
                      → live
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 font-heading text-3xl">Ready to build your app?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            A free, no-strings chat about your app idea. We'll cover scope, tech stack, timeline, and budget.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20chat%20about%20a%20project"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:akashdalla406@gmail.com?subject=App%20Development%20Inquiry"
              className="rounded-full border border-border px-8 py-4 font-body text-base font-semibold"
            >
              Email Akash →
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Or call/text +91 78140 02784. Based in Punjab, serving clients worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
