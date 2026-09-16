import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Clock, Globe, Smartphone, Code2, Rocket, Users, TrendingUp, MessageCircle, Play, Monitor, BarChart3, Tablet, Download, RefreshCw, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useState } from "react";

const stats = [
  { value: "50+", label: "Apps Delivered" },
  { value: "7+", label: "Apps on Play Store" },
  { value: "4 Weeks", label: "Average MVP Time" },
  { value: "100%", label: "Success Rate" },
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We learn about your vision, goals, target audience, and business requirements." },
  { num: "02", title: "Strategy & Planning", desc: "Custom roadmap with feature prioritization, tech stack selection, and timeline." },
  { num: "03", title: "Design & Build", desc: "UI/UX design and agile development in 2-week sprints with regular demos." },
  { num: "04", title: "Testing & QA", desc: "Comprehensive testing across devices, performance optimization, and bug fixes." },
  { num: "05", title: "App Store Launch", desc: "Complete Play Store & App Store submission, metadata, screenshots, and review handling." },
  { num: "06", title: "Post-Launch Support", desc: "30 days free support, crash monitoring, and ongoing maintenance options." },
];

const benefits = [
  { icon: Zap, title: "Lightning Fast Development", desc: "Our streamlined process delivers MVPs in 4 weeks, not months. You launch faster and start validating your idea sooner." },
  { icon: Globe, title: "Cross-Platform Ready", desc: "One codebase for both iOS and Android. Save time and money while reaching 99% of smartphone users worldwide." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Bank-level security with OAuth 2.0, encrypted databases, and secure API integrations. Your user data stays protected." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Built to grow with your business. From 100 to 1 million users, our apps handle increased load seamlessly." },
  { icon: Code2, title: "Clean, Maintainable Code", desc: "Full source code ownership with detailed documentation. Future developers can easily understand and extend your app." },
  { icon: Monitor, title: "Admin Dashboard Included", desc: "Web-based admin panel to manage users, content, analytics, and business operations from anywhere." },
];

const techStack = [
  { name: "React Native", desc: "Cross-platform framework" },
  { name: "Expo", desc: "Rapid development & easy updates" },
  { name: "TypeScript", desc: "Type-safe, maintainable code" },
  { name: "Firebase", desc: "Authentication & backend" },
  { name: "PostgreSQL", desc: "Reliable database" },
  { name: "AWS", desc: "Cloud infrastructure" },
];

const faqs = [
  { question: "How much does it cost to build a mobile app?", answer: "Our MVP package starts at $499 - one of the most competitive rates in the market. Growth and Enterprise packages are available at $1,499 and $3,999 respectively. We offer flexible payment terms and startup discounts." },
  { question: "How long does it take to develop a mobile app?", answer: "MVP development takes 4-6 weeks. More complex apps with advanced features take 8-16 weeks. We follow agile methodology with 2-week sprints for predictable delivery." },
  { question: "Will I own the source code?", answer: "Yes, you get 100% ownership of all source code, designs, and intellectual property. We provide well-documented, clean code that any developer can work with." },
  { question: "Do you provide app store submission?", answer: "Yes, we handle complete Play Store and App Store submission including account setup, metadata, screenshots, app preview videos, and review handling. Your app goes live in both stores." },
  { question: "What happens after my app is launched?", answer: "We provide 30 days of free post-launch support to handle any bugs or issues. After that, we offer optional maintenance packages starting at $99/month for ongoing updates and support." },
];

const testimonials = [
  { name: "Mindset App", role: "Mindfulness & Wellness", desc: "Built and launched to Play Store in just 4 weeks. Excellent team!", rating: 5 },
  { name: "Sailors Platform", role: "Maritime Social App", desc: "Real-time audio, messaging, and crew discovery. Professional delivery.", rating: 5 },
  { name: "HiringBull", role: "Job Portal App", desc: "From concept to launch in 6 weeks. Great communication throughout.", rating: 5 },
];

// Pricing tiers with US Dollar for global positioning
const pricingTiers = [
  {
    name: "MVP Launch",
    price: "$499",
    originalPrice: "$999",
    desc: "Perfect for validating your startup idea",
    features: [
      "Core 5-7 features",
      "iOS & Android apps",
      "Basic UI/UX design",
      "User authentication",
      "Push notifications",
      "Admin dashboard",
      "4-week delivery",
      "30-day support"
    ],
    popular: false,
    cta: "Start MVP"
  },
  {
    name: "Growth",
    price: "$1,499",
    originalPrice: "$2,999",
    desc: "For startups ready to scale",
    features: [
      "10-15 advanced features",
      "iOS & Android apps",
      "Premium UI/UX design",
      "Payment integration",
      "Real-time features",
      "Analytics dashboard",
      "API integrations",
      "6-week delivery",
      "90-day support"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$3,999",
    originalPrice: "$7,999",
    desc: "Full-featured app with all extras",
    features: [
      "Unlimited features",
      "iOS & Android + Web",
      "Custom UI/UX design",
      "Advanced security",
      "AI/ML integration",
      "Custom admin panel",
      "Third-party APIs",
      "10-week delivery",
      "1-year support"
    ],
    popular: false,
    cta: "Go Enterprise"
  }
];

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Mobile App Development Company | React Native Apps - Punjab Tech"
        description="Expert mobile app development services. Build iOS & Android apps with React Native. MVP in 4 weeks, Play Store publishing included. Starting at $499. Free consultation."
      />
      <Navbar />

      {/* SEO */}
      <title>Punjab Tech | Mobile App Development Company - React Native, iOS & Android</title>
      <meta name="description" content="Hire Punjab's top mobile app development company. React Native experts building iOS & Android apps. MVP in 4 weeks, Play Store submission included. Get free quote." />
      <meta name="keywords" content="mobile app development company, React Native app development, hire mobile app developer, iOS Android app development, MVP development, cross-platform app development, Play Store submission, mobile app development Punjab, app development India" />
      <meta property="og:title" content="Punjab Tech | Mobile App Development Company - React Native Experts" />
      <meta property="og:description" content="Build your dream mobile app with Punjab's leading React Native developers. MVP in 4 weeks, Play Store ready. Get free consultation." />
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
                Rated #1 App Development Company in Punjab
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Build a Mobile App That{" "}
              <span className="text-primary">Ships to Stores</span>{" "}
              in 4 Weeks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stop dreaming about your app. Start shipping. React Native experts
              deliver production-ready iOS & Android apps with Play Store & App Store
              submission included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20build%20a%20mobile%20app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Consultation
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 100% Source Code Ownership</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Free 30-Day Support</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Play Store Ready</span>
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

      {/* Problem/Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Startups Choose Us</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Most Agencies Take 6+ Months. We Ship in Weeks.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Traditional agencies overcomplicate things. We focus on what matters —
              getting your app into users' hands fast.
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

      {/* Tech Stack */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Built with battle-tested technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">From Idea to App Store in 6 Steps</h2>
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

      {/* Live Apps */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Work</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Apps We've Shipped</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Play className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-heading text-xl mb-2">Mindset</h3>
              <p className="text-sm text-muted-foreground mb-4">Mindfulness & Wellness App</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.mindset.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                View on Play Store →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-heading text-xl mb-2">Sailors Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">Maritime Social Network</p>
              <a
                href="https://sailorsplatform.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                Visit Website →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-heading text-xl mb-2">HiringBull</h3>
              <p className="text-sm text-muted-foreground mb-4">Job Portal Application</p>
              <a
                href="https://hiringbull.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                Visit Website →
              </a>
            </motion.div>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Startup-friendly pricing designed to help you enter the market. All packages include full source code ownership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 relative ${tier.popular ? 'border-primary bg-card shadow-lg shadow-primary/10' : 'border-border bg-card'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading text-xl mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.desc}</p>
                <div className="mb-6">
                  <span className="font-heading text-4xl">{tier.price}</span>
                  <span className="text-lg text-muted-foreground line-through ml-2">{tier.originalPrice}</span>
                </div>
                <ul className="space-y-3 text-sm mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2"><CheckCircle2 size={16} className="text-primary flex-shrink-0" /> {feature}</li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/917814002784?text=Hi%20Akash,%20interested%20in%20{tier.name}%20package" 
                  className={`block text-center rounded-full py-3 font-semibold transition-all ${tier.popular ? 'bg-gradient-warm text-primary-foreground hover:shadow-warm' : 'border border-border hover:bg-background'}`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Build Your App?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free 30-minute consultation. We'll discuss your idea, provide insights,
              and give you a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20build%20an%20app"
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

export default AppDevelopment;
