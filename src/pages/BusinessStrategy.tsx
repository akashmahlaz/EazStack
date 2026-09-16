import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Target, TrendingUp, Lightbulb, BarChart3, Globe, Users, Rocket, MapPin, Shield, MessageCircle, Award, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const stats = [
  { value: "100+", label: "Startups Advised" },
  { value: "$24M+", label: "Value Created" },
  { value: "50+", label: "PMF Achieved" },
  { value: "3x", label: "Avg. Growth Achieved" },
];

const process = [
  { num: "01", title: "Business Assessment", desc: "Deep dive into your startup's current state, market position, challenges, and growth opportunities." },
  { num: "02", title: "Strategy Development", desc: "Create a comprehensive growth strategy with clear objectives, milestones, and execution roadmap." },
  { num: "03", title: "Implementation Support", desc: "Work alongside your team to implement strategic initiatives and overcome execution challenges." },
  { num: "04", title: "Review & Iterate", desc: "Regular strategy reviews, performance tracking, and pivots based on market feedback and data." },
];

const benefits = [
  { icon: Target, title: "Product-Market Fit", desc: "Proven frameworks to validate your product with real users and achieve product-market fit faster." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven growth strategies tailored to your startup's stage, resources, and market opportunities." },
  { icon: MapPin, title: "Go-to-Market Plans", desc: "Comprehensive GTM strategies that position your product for maximum traction and market penetration." },
  { icon: BarChart3, title: "Revenue Models", desc: "Optimize your business model and revenue streams for maximum unit economics and scalability." },
  { icon: Users, title: "Team Scaling", desc: "Strategic hiring plans and organizational structure to support your growth trajectory." },
  { icon: Award, title: "Competitor Analysis", desc: "Deep competitive analysis to identify differentiation opportunities and market gaps." },
];

const services = [
  { name: "PMF Consulting", desc: "Achieve product-market fit" },
  { name: "GTM Strategy", desc: "Go-to-market planning" },
  { name: "Growth Strategy", desc: "Scale your startup" },
  { name: "Business Model", desc: "Optimize revenue streams" },
  { name: "Market Research", desc: "Deep market insights" },
  { name: "Competitor Analysis", desc: "Strategic positioning" },
];

const testimonials = [
  { name: "SaaS Starter", role: "B2B SaaS", desc: "Helped us find PMF in 3 months. Revenue grew 5x after implementing their growth framework!", rating: 5 },
  { name: "EcomPlus", role: "E-commerce", desc: "Strategic guidance on market entry was invaluable. We avoided costly mistakes thanks to their insights.", rating: 5 },
  { name: "HealthTech", role: "Healthcare SaaS", desc: "Their GTM strategy helped us acquire 100+ enterprise customers in first year. Highly recommend!", rating: 5 },
];

const faqs = [
  { question: "Who is this service for?", answer: "Our business strategy consulting is ideal for early-stage startups, founders seeking product-market fit, and growing companies needing strategic direction." },
  { question: "How long does engagement last?", answer: "Most consulting engagements last 2-3 months for initial strategy development, with ongoing advisory support available." },
  { question: "What deliverables do I get?", answer: "You'll receive a comprehensive strategy document including market analysis, growth roadmap, GTM plan, and KPI framework." },
  { question: "Do you work with the team directly?", answer: "Yes! We don't just deliver reports—we work alongside your team to implement strategies and achieve results." },
  { question: "What makes your approach different?", answer: "We combine hands-on implementation with strategic thinking. We don't advise from the sidelines—we're in the trenches with you." },
];

const BusinessStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Business Strategy Consulting for Startups | Punjab Tech"
        description="Expert business strategy consulting for startups. Product-market fit, growth strategy & GTM planning. 100+ startups advised, $24M+ value created. Free consultation."
      />
      <Navbar />

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
                100+ Startups Advised • ₹200Cr+ Value Created
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Strategy That <span className="text-primary">Executes</span>—Not Just Advises
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We don't just create strategies—we help you execute them. 
              Product-market fit, growth, and scaling strategies that deliver real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20business%20strategy%20consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Strategy Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body text-base font-semibold hover:bg-card transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Hands-On Execution</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />3x Average Growth</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />PMF Specialists</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Strategic Partners in Your Growth</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We combine strategic expertise with hands-on execution support. 
              Your success is our metric—we succeed when you grow.
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
          <p className="text-center text-sm text-muted-foreground mb-8">What we offer</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Strategy to Execution in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Flexible Engagement Options</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Strategy Sprint</h3>
              <p className="text-muted-foreground text-sm mb-4">Quick strategy assessment</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Business assessment</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Strategy document</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Growth recommendations</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />1 week delivery</li>
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
              <h3 className="font-heading text-xl mb-2">Growth Partnership</h3>
              <p className="text-muted-foreground text-sm mb-4">Full strategy & implementation</p>
              <div className="font-heading text-4xl mb-6">₹1.5L<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Complete strategy</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3-month execution</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Weekly coaching calls</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />KPI tracking</li>
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
              <h3 className="font-heading text-xl mb-2">Advisory Board</h3>
              <p className="text-muted-foreground text-sm mb-4">Long-term strategic partnership</p>
              <div className="font-heading text-4xl mb-6">₹3L<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Ongoing strategy</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Monthly strategy calls</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Investor introductions</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Priority access</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Scale Your Startup?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free strategy consultation. We'll assess your current position 
              and create a roadmap to your next growth milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20a%20free%20strategy%20consultation"
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

export default BusinessStrategy;