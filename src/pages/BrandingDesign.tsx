import { motion } from "framer-motion";
import { Palette, PenTool, Type, Image, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const services = [
  { icon: PenTool, title: "Logo Design", desc: "Unique, memorable logos that represent your brand's identity." },
  { icon: Type, title: "Brand Identity", desc: "Complete visual identity including colors, typography, and guidelines." },
  { icon: Image, title: "Marketing Materials", desc: "Business cards, brochures, banners, and more." },
  { icon: Megaphone, title: "Social Media Kits", desc: "Consistent branding across all your social platforms." },
];

const BrandingDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo 
        title="Punjab Tech | Branding & Design - Logo, Brand Identity"
        description="Professional branding and design services. Logo design, brand identity, marketing materials, and social media kits. Stand out from the competition."
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
              Branding & Design
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Build a Brand That Stands Out
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design services that elevate your brand. 
              From logos to complete brand identity systems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all">
                Get a Quote
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
            <h2 className="font-heading text-4xl md:text-5xl">Our Design Services</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item, i) => (
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

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Let's Build Your Brand</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Create a lasting impression with professional branding.
            </p>
            <a
              href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27m%20interested%20in%20branding%20services"
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

export default BrandingDesign;