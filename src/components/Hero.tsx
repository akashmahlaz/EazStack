import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground"
          >
            <Rocket size={16} className="text-primary" />
            Your All-in-One Startup Launch Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            We Build Your{" "}
            <span className="text-gradient">Entire Startup</span>
            <br />
            From Zero to Launch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Website. App. CRM. Marketing. Branding. Hiring. Funding.
            We handle everything so you can focus on your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-4 font-heading text-base font-semibold text-primary-foreground transition-shadow hover:shadow-glow"
            >
              Launch Your Startup
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-secondary px-8 py-4 font-heading text-base font-medium text-secondary-foreground transition-colors hover:bg-border"
            >
              See What We Do
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { value: "50+", label: "Startups Launched" },
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "12+", label: "Services Offered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-gradient md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
