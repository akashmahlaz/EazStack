import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Wrench, Shield, Zap, Clock, Smartphone, Globe, BarChart3, RefreshCw, MessageCircle, Bug, Monitor, Lock, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "100+", label: "Apps Maintained" },
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "<2hrs", label: "Critical Fix Time" },
  { value: "24/7", label: "Monitoring" },
];

const process = [
  { num: "01", title: "App Audit", desc: "We assess your app's current state, identify issues, and create a maintenance roadmap." },
  { num: "02", title: "Setup & Monitoring", desc: "Implement crash monitoring, performance tracking, and automated alert systems." },
  { num: "03", title: "Ongoing Maintenance", desc: "Regular updates, bug fixes, security patches, and new feature implementations." },
  { num: "04", title: "Continuous Optimization", desc: "Performance improvements, OS compatibility updates, and feature enhancements." },
];

const benefits = [
  { icon: Shield, title: "Security Updates", desc: "Regular security patches and vulnerability fixes to keep your app and user data safe from threats." },
  { icon: Zap, title: "Performance Optimization", desc: "Continuous monitoring and optimization to ensure fast load times and smooth user experience." },
  { icon: RefreshCw, title: "OS Compatibility", desc: "Stay compatible with the latest iOS and Android versions—no broken features after OS updates." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Detailed usage analytics, crash reports, and actionable insights to improve your app." },
  { icon: Bug, title: "Bug Fixes & Support", desc: "Quick turnaround on bug fixes. Critical issues resolved within 2 hours. Regular maintenance included." },
  { icon: TrendingUp, title: "Feature Enhancements", desc: "Add new features, improvements, and updates based on user feedback and market trends." },
];

const services = [
  { name: "Bug Fixes", desc: "Priority bug resolution" },
  { name: "Security", desc: "Security patches & audits" },
  { name: "OS Updates", desc: "iOS & Android compatibility" },
  { name: "Analytics", desc: "Crash & usage monitoring" },
  { name: "Performance", desc: "Speed & optimization" },
  { name: "New Features", desc: "Feature development" },
];

const testimonials = [
  { name: "Mindset App", role: "Wellness Platform", desc: "Their maintenance keeps our app running smoothly. 99.9% uptime for 2 years straight!", rating: 5 },
  { name: "FoodDelivery", role: "Food Tech", desc: "Quick fixes for critical bugs during peak hours. Saved us many times. Highly recommend!", rating: 5 },
  { name: "LearnPro", role: "EdTech Platform", desc: "Regular OS updates and new features keep us competitive. Great partnership.", rating: 5 },
];

const faqs = [
  { question: "What's included in maintenance?", answer: "Bug fixes, OS updates, security patches, crash monitoring, performance optimization, and new feature development. Everything to keep your app running perfectly." },
  { question: "How quickly do you respond to issues?", answer: "Critical issues (app crashes, major bugs): 2 hours. High priority: 24 hours. Standard issues: 3-5 business days." },
  { question: "Do you handle app store updates?", answer: "Yes! We handle complete app store update process—including testing, submission, and managing the review process." },
  { question: "Can I upgrade to a higher plan later?", answer: "Absolutely! You can upgrade or downgrade plans anytime. We'll pro-rate the difference." },
  { question: "What happens if I cancel?", answer: "You own 100% of your code. You can take your app elsewhere anytime. We provide a handoff document with all details." },
];

const OngoingSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | App Maintenance & Support - Ongoing App Updates, Security & Performance</title>
      <meta name="description" content="Expert app maintenance & support services. Security updates, OS compatibility, bug fixes & performance optimization. 99.9% uptime guarantee. Starting ₹5K/month." />
      <meta name="keywords" content="app maintenance, mobile app support, app updates, iOS Android maintenance, app security, bug fixes, app performance, ongoing support, app maintenance company, mobile app maintenance India" />
      <meta property="og:title" content="Punjab Tech | App Maintenance & Support - Keep Your App Running Perfectly" />
      <meta property="og:description" content="99.9% uptime. 24/7 monitoring. Security updates, OS compatibility & bug fixes. Your app, always performing at its best." />
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
                100+ Apps Maintained • 99.9% Uptime
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Keep Your App{" "}
              <span className="text-primary">Running Perfectly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Ongoing maintenance, security updates, and support. 
              24/7 monitoring, OS compatibility, and fast bug fixes—starting at just ₹5K/month.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20app%20maintenance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Maintenance Quote
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />24/7 Monitoring</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />2hr Critical Fix</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />OS Updates</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">More Than Just Bug Fixes</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We proactively maintain your app so issues never reach your users. 
              Security, performance, and continuous improvement—handled.
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
          <p className="text-center text-sm text-muted-foreground mb-8">What's included</p>
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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How It Works</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">App Care in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Flexible Maintenance Plans</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Basic Care</h3>
              <p className="text-muted-foreground text-sm mb-4">For stable apps</p>
              <div className="font-heading text-4xl mb-6">₹5K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Bug fixes (10/mo)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />OS updates (quarterly)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Email support</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />48hr response</li>
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
              <h3 className="font-heading text-xl mb-2">Pro Care</h3>
              <p className="text-muted-foreground text-sm mb-4">For growing apps</p>
              <div className="font-heading text-4xl mb-6">₹10K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Unlimited bug fixes</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />OS updates (monthly)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Priority support</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />2hr critical response</li>
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
              <h3 className="font-heading text-xl mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm mb-4">For mission-critical apps</p>
              <div className="font-heading text-4xl mb-6">₹25K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Everything in Pro</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />24/7 phone support</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Feature development</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Dedicated manager</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Protect Your App Investment</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Don't let bugs and outdated OS versions hurt your users. 
              Get peace of mind with professional app maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20get%20app%20maintenance%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                <MessageCircle size={18} />
                Get Maintenance Quote
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

export default OngoingSupport;