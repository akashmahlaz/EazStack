import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-12 text-center md:p-20"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[300px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
              Ready to{" "}
              <span className="text-gradient">Build Your Startup?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Book a free discovery call and let's map out everything you need to launch successfully.
            </p>
            <a
              href="mailto:hello@buildstack.co"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-4 font-heading text-base font-semibold text-primary-foreground transition-shadow hover:shadow-glow"
            >
              Book a Free Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
