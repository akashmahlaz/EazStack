import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Wallet, TrendingUp, Users, FileText, Award, Globe, Handshake, Lightbulb, MessageCircle, Target, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "₹50Cr+", label: "Funds Raised for Clients" },
  { value: "40+", label: "Startups Funded" },
  { value: "80%", label: "Pitch Success Rate" },
  { value: "100+", label: "Investor Connections" },
];

const process = [
  { num: "01", title: "Funding Assessment", desc: "We evaluate your startup's funding readiness, valuation, and identify the best funding path for you." },
  { num: "02", title: "Pitch Preparation", desc: "Create compelling pitch decks, financial projections, and business plans that investors love." },
  { num: "03", title: "Investor Connect", desc: "Leverage our network to connect with angel investors, VCs, and government grant programs." },
  { num: "04", title: "Fundraising Support", desc: "Guidance through due diligence, term negotiation, and closing your funding round." },
];

const benefits = [
  { icon: FileText, title: "Pitch Deck Mastery", desc: "Investor-ready pitch decks that tell your story compellingly and highlight your startup's potential." },
  { icon: Target, title: "Investor Network", desc: "Access to 100+ angel investors, VC funds, and government startup programs across India." },
  { icon: TrendingUp, title: "Valuation Guidance", desc: "Data-driven valuation strategies to maximize your round while closing deals faster." },
  { icon: Building2, title: "Grant Assistance", desc: "Help you apply for government grants like Startup India, SIDBI, and state startup schemes." },
  { icon: Handshake, title: "Term Sheet Negotiation", desc: "Expert guidance on term sheets, equity dilution, and closing favorable deals." },
  { icon: Award, title: "Due Diligence Prep", desc: "Complete documentation and data room preparation for smooth investor due diligence." },
];

const services = [
  { name: "Pitch Deck", desc: "Investor-ready pitch deck design" },
  { name: "Business Plan", desc: "Comprehensive business plan" },
  { name: "Financial Model", desc: "3-5 year projections" },
  { name: "Investor Connect", desc: "Direct investor introductions" },
  { name: "Grant Application", desc: "Govt grants & schemes" },
  { name: "Valuation", desc: "Startup valuation services" },
];

const testimonials = [
  { name: "AgriTech Solutions", role: "Agritech Startup", desc: "Raised ₹2Cr seed round within 3 months. Pitch deck and investor connect were game-changing!", rating: 5 },
  { name: "EdTech Pro", role: "Education Platform", desc: "Helped us secure ₹5Cr Series A. Their valuation guidance ensured we didn't leave money on table.", rating: 5 },
  { name: "HealthFirst", role: "Healthcare SaaS", desc: "Government grant of ₹50L through Startup India. Complete handholding through the process.", rating: 5 },
];

const faqs = [
  { question: "How long does fundraising take?", answer: "Typical seed rounds take 3-6 months from start to close. We help you prepare faster so you can close quicker." },
  { question: "Whatpitch deck services do you offer?", answer: "We create complete pitch decks including story flow, financial projections, market analysis, team slides, and investor-friendly design." },
  { question: "Do you guarantee funding?", answer: "No ethical consultant can guarantee funding. However, our 80% success rate and investor network significantly improve your chances." },
  { question: "What are typical fees for fundraising help?", answer: "Our packages range from ₹25K for pitch deck only to ₹1.5L for complete fundraising support with investor connections." },
  { question: "Can you help with government grants?", answer: "Yes! We assist with Startup India registration, SIDBI grants, and various state startup scheme applications." },
];

const FundingGuidance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Startup Funding Guidance & Investor Consulting - Pitch Deck & Fundraising</title>
      <meta name="description" content="Expert fundraising consulting for startups. Pitch deck, investor connections & grant assistance. Raised ₹50Cr+ for 40+ startups. Free consultation." />
      <meta name="keywords" content="startup funding, investor consulting, pitch deck services, fundraising consultant, startup accelerator, venture capital, angel investor, startup grant India, pitch deck design, fundraising strategy Punjab" />
      <meta property="og:title" content="Punjab Tech | Startup Funding & Investor Consulting - Raise Capital for Your Startup" />
      <meta property="og:description" content="Expert fundraising help. Pitch decks, investor connections, and grants. ₹50Cr+ raised for startups. Get funded faster." />
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
                ₹50Cr+ Raised for 40+ Startups
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              From Pitch to{" "}
              <span className="text-primary">Funded</span>—We Make It Happen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Expert fundraising support from pitch deck to closing. 
              Access 100+ investors and raise the capital your startup needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20help%20with%20fundraising"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Funding Assessment
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />100+ Investor Connections</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />80% Pitch Success Rate</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Grant Assistance</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Fundraising Support That Delivers Results</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We don't just consult—we help you raise. From pitch deck to closing, 
              our proven process connects you with the right investors.
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

      {/* Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Our services</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <div key={service.name} className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-semibold text-sm">{service.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Your Path to Funding in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Flexible Funding Packages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Pitch Deck Only</h3>
              <p className="text-muted-foreground text-sm mb-4">For founders who need a professional deck</p>
              <div className="font-heading text-4xl mb-6">₹25K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Investor-ready pitch deck</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Financial projections</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Market analysis</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />5-day delivery</li>
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
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</div>
              <h3 className="font-heading text-xl mb-2">Fundraising Pack</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete support for seed raise</p>
              <div className="font-heading text-4xl mb-6">₹75K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Pitch deck + business plan</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Financial模型</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Investor introductions</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Grant assistance</li>
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
              <h3 className="font-heading text-xl mb-2">Series A+</h3>
              <p className="text-muted-foreground text-sm mb-4">For larger funding rounds</p>
              <div className="font-heading text-4xl mb-6">₹1.5L<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Complete due diligence pack</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />VC-level pitch deck</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Direct VC connections</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Term sheet negotiation</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Raise Your Next Round?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free funding assessment. We'll evaluate your startup and create 
              a roadmap to your next funding milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20fundraising%20support"
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

export default FundingGuidance;