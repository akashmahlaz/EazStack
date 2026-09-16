import { motion } from "framer-motion";
import { Users, Search, UserCheck, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const services = [
  { icon: Search, title: "Tech Recruiting", desc: "Find the best developers, designers, and engineers." },
  { icon: UserCheck, title: "Technical Interviews", desc: "Structured interview process with technical assessments." },
  { icon: Briefcase, title: "Contract-to-Hire", desc: "Try before you hire with flexible engagement models." },
  { icon: Users, title: "Team Augmentation", desc: "Scale your team with dedicated resources." },
];

const HiringSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo 
        title="Punjab Tech | Hiring Support - Tech Recruiting, Team Build"
        description="Hiring support for startups. Tech recruiting, technical interviews, and team augmentation. Find the right talent for your growing team."
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
              Hiring Support
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Build Your Dream Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and hire top talent for your startup. From developers to designers, 
              we help you build a team that delivers results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all">
                Find Talent
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
            <h2 className="font-heading text-4xl md:text-5xl">Hiring Services</h2>
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
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Hire Top Talent</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's find the perfect fit for your team.
            </p>
            <a
              href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27m%20looking%20to%20hire%20talent"
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

export default HiringSupport;