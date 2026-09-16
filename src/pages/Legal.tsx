import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Scale, FileText, Shield, Briefcase, Building2, Users, Lock, Globe, Award, Handshake, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "200+", label: "Companies Registered" },
  { value: "100%", label: "Compliance Rate" },
  { value: "7 Days", label: "Fast Registration" },
  { value: "24/7", label: "Legal Support" },
];

const process = [
  { num: "01", title: "Consultation", desc: "We understand your business type and recommend the optimal legal structure (LLP, Pvt Ltd, OPC, etc)." },
  { num: "02", title: "Document Preparation", desc: "Our experts prepare all required documents, MoA, AoA, and filings with precision." },
  { num: "03", title: "Government Filing", desc: "We handle all ROC filings, MCA submissions, and government registrations for you." },
  { num: "04", title: "Delivery & Support", desc: "Receive your registration certificates and ongoing compliance support for your business." },
];

const benefits = [
  { icon: Building2, title: "Company Registration", desc: "Complete Private Limited, LLP, OPC, and Sole Proprietorship registration with ROC filing included." },
  { icon: FileText, title: "Legal Drafting", desc: "Professional contracts, agreements, NDAs, and legal documents tailored to protect your business." },
  { icon: Shield, title: "Compliance & IP", desc: "Trademark registration, GST compliance, and regulatory filings to keep your business protected." },
  { icon: Briefcase, title: "Startup Legal Pack", desc: "Comprehensive legal solution for startups including founder agreements, ESOPs, and IP protection." },
  { icon: Award, title: "Investor-Ready Docs", desc: "Term sheets, SHA, SSA, and due diligence documents that meet investor standards." },
  { icon: Handshake, title: "Ongoing Legal Support", desc: "Dedicated legal advisor for all your business legal needs—contracts, disputes, and compliance." },
];

const services = [
  { name: "Private Limited Company", desc: "Complete registration with DSC, DIN, ROC filing" },
  { name: "LLP Registration", desc: "Limited Liability Partnership formation & compliance" },
  { name: "Trademark Registration", desc: "Protect your brand name, logo & intellectual property" },
  { name: "GST Registration", desc: "GSTIN registration & compliance setup" },
  { name: "Contracts & Agreements", desc: "Custom legal drafts for business relationships" },
  { name: "Startup Legal Pack", desc: "Founder agreements, ESOPs, IP assignment" },
];

const testimonials = [
  { name: "TechVentures Labs", role: "SaaS Startup", desc: "They set up our Pvt Ltd, trademark, and contracts in just 2 weeks. Perfect for startups!", rating: 5 },
  { name: "GreenFoods Delivery", role: "E-commerce", desc: "Professional legal documentation for our investor round. Due diligence passed smoothly.", rating: 5 },
  { name: "HealthFirst", role: "Healthcare Tech", desc: "ESOP structure for our team was handled perfectly. Highly recommend for startup legal needs.", rating: 5 },
];

const faqs = [
  { question: "How long does company registration take?", answer: "Private Limited registration takes 7-14 business days with all documents ready. LLP registration is faster, typically 5-7 days." },
  { question: "What documents do I need for company registration?", answer: "Basic documents include: PAN card, Aadhar, address proof, and passport-sized photos for all directors. We guide you through the complete list." },
  { question: "Do you handle trademark registration?", answer: "Yes! We provide complete trademark registration services including search, filing, examination response, and registration tracking." },
  { question: "What is included in the Startup Legal Pack?", answer: "Founder agreement, intellectual property assignment, employment contracts, NDA templates, and basic corporate governance documents." },
  { question: "Do you provide ongoing legal support?", answer: "Yes, we offer monthly legal support packages starting at ₹5,000/month for contract reviews, compliance queries, and legal guidance." },
];

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Legal Services for Startups - Company Registration, Trademark & Compliance</title>
      <meta name="description" content="Complete legal solutions for startups. Private Limited & LLP registration, trademark filing, contracts & compliance. Fast 7-day registration. Free consultation." />
      <meta name="keywords" content="company registration, legal services for startups, trademark registration, private limited company registration, LLP registration, GST registration, legal compliance, startup legal pack, legal consultant Punjab" />
      <meta property="og:title" content="Punjab Tech | Legal Services for Startups - Company Registration & More" />
      <meta property="og:description" content="Complete legal solutions for startups. Pvt Ltd, LLP registration, trademark filing, contracts & compliance—all in one place." />
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
                200+ Companies Successfully Registered
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Legal Made{" "}
              <span className="text-primary">Simple</span>{" "}
              for Your Startup
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Company registration, trademarks, contracts, and compliance— 
              all in one place. Get investor-ready legal foundation in days, not months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20legal%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Legal Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body text-base font-semibold hover:bg-card transition-all"
              >
                See Our Services
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />7-Day Registration</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />100% Compliance</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Transparent Pricing</span>
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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Complete Legal Solutions for Startups</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From company registration to investor-ready documentation—we handle 
              all legal aspects so you can focus on building your business.
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

      {/* Services Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">What we offer</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.name} className="text-center p-6 rounded-xl bg-background border border-border">
                <p className="font-semibold">{service.name}</p>
                <p className="text-xs text-muted-foreground mt-2">{service.desc}</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Simple 4-Step Process</h2>
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

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pricing</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Transparent Legal Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Company Registration</h3>
              <p className="text-muted-foreground text-sm mb-4">Pvt Ltd, LLP, or OPC setup</p>
              <div className="font-heading text-4xl mb-6">₹15K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Company registration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />DSC & DIN</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />MoA & AoA</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />ROC filing</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />7-day delivery</li>
              </ul>
              <a href="/contact" className="block text-center rounded-full border border-border py-3 font-medium hover:bg-background transition-colors">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-primary bg-card p-8 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Best Value</div>
              <h3 className="font-heading text-xl mb-2">Startup Legal Pack</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete legal for new startups</p>
              <div className="font-heading text-4xl mb-6">₹35K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Pvt Ltd registration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Trademark filing</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Founder agreements</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />GST registration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />NDA templates</li>
              </ul>
              <a href="/contact" className="block text-center rounded-full bg-gradient-warm py-3 font-semibold text-primary-foreground hover:shadow-warm transition-all">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Investor-Ready Pack</h3>
              <p className="text-muted-foreground text-sm mb-4">For fundraising startups</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Legal due diligence</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Term sheet & SHA</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />ESOP structure</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />IP protection</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Investor-ready docs</li>
              </ul>
              <a href="/contact" className="block text-center rounded-full border border-border py-3 font-medium hover:bg-background transition-colors">Contact Us</a>
            </motion.div>
          </div>
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Get Your Startup Legally Protected</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Free legal consultation. We'll assess your needs and recommend 
              the best legal structure for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20a%20free%20legal%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
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

      <Footer />
    </div>
  );
};

export default Legal;