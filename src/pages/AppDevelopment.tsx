import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Smartphone, Rocket, Cloud, ShieldCheck } from "lucide-react";

const services = [
  { title: "Mobile Apps (React Native)", desc: "iOS & Android apps built with React Native & Expo — shipped to the App Store and Google Play.", icon: Smartphone },
  { title: "Web Apps & SaaS (Next.js)", desc: "Production Next.js web apps, dashboards, and SaaS products with secure backends.", icon: LayoutDashboard },
  { title: "MVP Development", desc: "Validate your idea fast with a lean, production-ready MVP.", icon: Rocket },
  { title: "Cloud & APIs", desc: "Auth, databases, REST/GraphQL APIs, and storage on Vercel & AWS.", icon: Cloud },
  { title: "App Store Publishing", desc: "Listing, screenshots, and metadata — we publish your app to the stores.", icon: ShieldCheck },
];

const caseStudies = [
  { name: "Sailors Platform", href: "https://sailorsplatform.com", gh: "https://github.com/akashmahlaz/Sailors-Platform", desc: "Maritime social platform — Next.js 15, MongoDB, AWS S3, live audio/video podcasts." },
  { name: "JustBeCause", href: "https://justbecausenetwork.com", gh: "https://github.com/akashmahlaz/JustBeCause", desc: "Volunteer hiring platform connecting nonprofits with designers, devs & marketers." },
  { name: "HiringBull", href: "https://hiringbull.org", gh: null, desc: "Real-time job alerts tailored to experience level." },
  { name: "Fireclaw", href: "https://github.com/akashmahlaz/fireclaw", gh: null, desc: "AI agents that grow business and power your team." },
  { name: "Mindset (Mobile)", href: "https://play.google.com/store/apps/details?id=com.mindset.app", gh: null, desc: "Mobile app live on the Google Play Store." },
];

const AppDevelopment = () => {
  return (
    <main className="min-h-screen">
      <section className="py-24 pt-32">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Mobile & Web Apps
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-heading text-4xl leading-[1.1] md:text-6xl"
          >
            We build mobile apps & web apps that actually ship.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          >
            Punjab Tech is an app development studio building mobile apps (React Native) and web apps (Next.js/SaaS) for startups and growing businesses. Built by Akashdeep Singh.
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
          <span>3.2+ years building production apps</span><span>·</span>
          <span>React Native • Next.js • TypeScript</span><span>·</span>
          <span>Apps live in the stores & on the web</span>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 font-heading text-3xl text-center">How we help</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-xl border border-border p-6">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 font-heading text-3xl text-center">Selected work</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-sm text-muted-foreground">Proof of work — apps and platforms we have shipped.</p>
          <div className="mx-auto grid max-w-5xl gap-6">
            {caseStudies.map((c) => (
              <div key={c.name} className="rounded-xl border border-border p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-heading text-xl">{c.name}</h3>
                  <div className="flex gap-3">
                    {c.gh ? (
                      <a href={c.gh} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:underline">
                        GitHub
                      </a>
                    ) : null}
                    <a href={c.href} target="_blank" rel="noreferrer" className="text-xs font-medium text-primary hover:underline">
                      → live
                    </a>
                  </div>
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
            Book a free, no-strings chat about your idea. We'll cover concept, tech stack, timeline, and budget.
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
    </main>
  );
};

export default AppDevelopment;
