import { motion } from "framer-motion";
import { Globe, Code2, Palette, ShoppingCart, Gauge, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const features = [
  "Next.js & React Development",
  "E-commerce Solutions",
  "Custom Web Applications",
  "API Development & Integration",
  "Performance Optimization",
  "SEO-Friendly Architecture",
];

const deliverables = [
  "Full Source Code Ownership",
  "Modern, Responsive Design",
  "CMS Integration",
  "Analytics Setup",
  "Deployment to Vercel/AWS",
  "3 Months Free Support",
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo 
        title="Punjab Tech | Web Development - Next.js Websites & Web Apps"
        description="Professional web development services. Next.js websites, e-commerce, dashboards, and SaaS apps. Fast, SEO-friendly, and scalable. Get a free quote today."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Web Development
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Build Your Online Presence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-performance websites and web applications built with Next.js. 
              From landing pages to complex SaaS platforms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all">
                Get a Quote
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body font-semibold hover:bg-card transition-all">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Built with modern technologies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map((tech) => (
              <span key={tech} className="font-heading text-lg text-muted-foreground">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl">What We Build</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: "Landing Pages", desc: "High-converting landing pages that turn visitors into customers." },
              { icon: ShoppingCart, title: "E-commerce Stores", desc: "Full-featured online stores with payments, inventory, and more." },
              { icon: Code2, title: "SaaS Applications", desc: "Multi-tenant SaaS platforms with authentication and billing." },
              { icon: Palette, title: "Dashboards", desc: "Admin panels and analytics dashboards for your business." },
              { icon: Gauge, title: "Performance", desc: "Lightning-fast load times with SSR, caching, and optimization." },
              { icon: Search, title: "SEO Optimized", desc: "Built with best practices for search engine visibility." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-warm transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl">Our Process</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              { title: "Discovery", desc: "We discuss your goals, audience, and requirements." },
              { title: "Design", desc: "Wireframes and UI design tailored to your brand." },
              { title: "Development", desc: "Clean, documented code with modern best practices." },
              { title: "Launch", desc: "Deploy to production with SSL and CDN setup." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{i + 1}</span>
                <div>
                  <h3 className="font-heading text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl mb-6">What You Get</h2>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                {features.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Build?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create a website that grows your business.
            </p>
            <a
              href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27m%20interested%20in%20web%20development"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
            >
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;