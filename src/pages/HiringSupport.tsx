import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Users, Search, Briefcase, Gift, Globe, Shield, Clock, MessageCircle, Target, Rocket, Heart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "200+", label: "Tech Hires Placed" },
  { value: "50+", label: "Companies Served" },
  { value: "2 Weeks", label: "Avg. Time to Hire" },
  { value: "95%", label: "Retention Rate" },
];

const process = [
  { num: "01", title: "Requirement Analysis", desc: "We deeply understand your technical needs, team culture, and role requirements to find the perfect match." },
  { num: "02", title: "Talent Sourcing", desc: "Leverage our extensive network and sourcing strategies to identify top-tier candidates." },
  { num: "03", title: "Screening & Assessment", desc: "Rigorous technical screening, coding assessments, and cultural fit evaluation." },
  { num: "04", title: "Interview & Offer", desc: "Coordinate interviews, provide feedback, and support offer negotiation for successful closes." },
];

const benefits = [
  { icon: Target, title: "Tech-Specialized", desc: "We focus exclusively on tech hiring—React Native, React, Node.js, Python, Flutter, and more." },
  { icon: Rocket, title: "Fast Turnaround", desc: "Average time to hire is just 2 weeks. We move fast to help you build your team quickly." },
  { icon: Heart, title: "Quality Candidates", desc: "We pre-screen thoroughly—so you only interview candidates who are genuinely great fits." },
  { icon: Zap, title: "Remote Ready", desc: "Expertise in hiring remote talent across India and globally. Find the best, not just nearest." },
  { icon: Briefcase, title: "Flexible Models", desc: "Full-time, contract, or hourly—we help you hire in whatever model suits your needs." },
  { icon: Shield, title: "Risk-Free Trial", desc: "2-week trial period on all placements. If it doesn't work, we replace at no extra cost." },
];

const roles = [
  { name: "React Native", desc: "Mobile developers" },
  { name: "React/Next.js", desc: "Frontend engineers" },
  { name: "Node.js", desc: "Backend developers" },
  { name: "Python", desc: "Full-stack & AI/ML" },
  { name: "Flutter", desc: "Cross-platform devs" },
  { name: "UI/UX", desc: "Designers" },
];

const testimonials = [
  { name: "TechVentures", role: "SaaS Startup", desc: "Hired 5 developers through them in 2 months. Quality was exceptional—still with us today!", rating: 5 },
  { name: "EcomGiant", role: "E-commerce", desc: "Found us a senior React architect when we couldn't for months. Game changer for our team.", rating: 5 },
  { name: "FinTech Pro", role: "Finance App", desc: "Remote hiring expertise helped us build a distributed team across 3 cities. Highly recommend!", rating: 5 },
];

const faqs = [
  { question: "How is this different from other recruiters?", answer: "We're tech-specialized—we understand the skills, frameworks, and what makes a great developer. No generic job board postings." },
  { question: "Do you also hire internationally?", answer: "Yes! We have experience hiring across India, US, UK, and other countries. Remote work is our specialty." },
  { question: "What about replacement if someone leaves?", answer: "We offer a 2-week trial period and 90-day replacement guarantee for permanent placementsat no extra cost." },
  { question: "How quickly can you submit candidates?", answer: "Typically within 3-5 business days of engagement. For urgent roles, we can expedite." },
  { question: "What's your fee structure?", answer: "We work on contingency—no upfront fees. Our fee is a percentage of the annual CTC, with flexible payment terms." },
];

const HiringSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Tech Hiring & Recruitment - Hire React Native, React, Node.js Developers</title>
      <meta name="description" content="Expert tech recruitment services. Hire React Native, React, Node.js, Python developers for startups. 200+ placements, 2-week avg hire time. Free candidate search." />
      <meta name="keywords" content="tech recruiting, hire developers, React Native developer hire, tech recruitment agency, startup hiring, remote developer hiring, IT staffing, software engineer recruitment, hiring support India, tech talent acquisition" />
      <meta property="og:title" content="Punjab Tech | Tech Hiring & Recruitment - Hire Top Developers" />
      <meta property="og:description" content="Hire exceptional developers in 2 weeks. React Native, React, Node.js, Python & more. 200+ successful placements. Free consultation." />
      <meta property="og:type" content="website" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Star size={14} className="fill-primary" />
                200+ Tech Placements • 95% Retention
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Hire Top Tech Talent{" "}
              <span className="text-primary">Without the Hunt</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We find exceptional developers so you can focus on building. 
              React Native, React, Node.js, Python—we've placed them all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20hire%20tech%20talent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Post a Job Requirement
                <ArrowRight size={18} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body text-base font-semibold hover:bg-card transition-all"
              >
                See Our Process
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />2-Week Avg. Hire Time</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />95% Retention Rate</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Risk-Free Trial</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/30 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Hiring Built for Startups</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We understand startup hiring needs—speed, quality, and cultural fit. 
              Our process is designed to help you build your dream team fast.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-warm transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Tech roles we hire for</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {roles.map((role) => (
              <div key={role.name} className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-semibold text-sm">{role.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Process</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Hire in 4 Simple Steps</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-warm transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-heading text-lg text-primary">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Client Reviews</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.desc}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / CTA */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Build Your Team?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Post your requirement today and get pre-screened candidates within 5 days. 
              No upfront fees—we only get paid when you hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20hire%20developers%20for%20my%20team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                <MessageCircle size={18} />
                Post a Requirement
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body font-semibold hover:bg-card transition-all"
              >
                Contact Form
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Or call/WhatsApp: +91 78140 02784</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-heading text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiringSupport;