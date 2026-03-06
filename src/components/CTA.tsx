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
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-12 text-center md:p-20"
        >
          <div className="relative">
            <h2 className="mb-4 font-heading text-4xl md:text-5xl">
              Ready to <em className="text-primary">Launch?</em>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Book a free discovery call and let's map out everything you need to launch successfully.
            </p>
            <a
              href="mailto:hello@launchcrew.co"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-shadow hover:shadow-warm"
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
