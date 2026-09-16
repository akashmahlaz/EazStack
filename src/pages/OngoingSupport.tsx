import { motion } from "framer-motion";
import { HeadphonesIcon, Shield, Zap, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const services = [
  { icon: Shield, title: "Security Updates", desc: "Regular security patches and vulnerability fixes." },
  { icon: Zap, title: "Performance", desc: "Optimizations to keep your app fast and responsive." },
  { icon: RefreshCw, title: "App Updates", desc: "New features, OS updates, and compatibility fixes." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Priority support for critical issues anytime." },
];

const OngoingSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo 
        title="Punjab Tech | Ongoing Support - Maintenance, Updates, App Fixes"
        description="Post-launch support and maintenance. Security updates, performance optimization, and 24/7 support. Keep your app running smoothly."
      />

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
              Ongoing Support
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              We Keep You Running
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our job doesn't end at launch. We provide ongoing support to keep 
              your app secure, fast, and up-to-date.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all">
                Get Support Plan
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl">Support Services</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-warm transition-all"
              >
                <item.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-background p-8 md:p-12 border border-border">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Support Plans</h2>
                <p className="text-muted-foreground mb-6">Choose a plan that fits your needs. All plans include dedicated support and regular updates.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Monthly bug fixes</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> OS compatibility</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Security patches</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Priority support</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block rounded-2xl bg-card border border-border p-8">
                  <p className="text-sm text-muted-foreground mb-2">Starting at</p>
                  <div className="font-heading text-4xl text-primary mb-2">₹5,000<span className="text-lg text-muted-foreground">/mo</span></div>
                  <p className="text-sm text-muted-foreground">Flexible plans available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl mb-4">Get Ongoing Support</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's keep your app running smoothly.
          </p>
          <a
            href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27m%20interested%20in%20ongoing%20support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
          >
            Chat on WhatsApp
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default OngoingSupport;