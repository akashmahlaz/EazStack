import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Globe, Code2, Palette, ShoppingCart, BarChart3, Shield, Zap, Search, MessageCircle, TrendingUp, Users, Smartphone, ExternalLink, Layout, Database, Lock, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const stats = [
  { value: "100+", label: "Web Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24h", label: "Average Delivery Time" },
];

const benefits = [
  { icon: Zap, title: "Blazing Fast Performance", desc: "Next.js + Vercel delivers sub-second load times. Speed improves UX, SEO, and conversions." },
  { icon: Search, title: "SEO Optimized Out of the Box", desc: "Every site built with proper semantic HTML, metadata, sitemaps, and structured data for Google ranking." },
  { icon: Smartphone, title: "Fully Responsive Design", desc: "Perfect experience on desktop, tablet, and mobile. Your site looks great on every device." },
  { icon: Shield, title: "Enterprise Security", desc: "SSL certificates, security headers, and best practices built in. Your data and users stay protected." },
  { icon: TrendingUp, title: "Conversion-Focused", desc: "Strategic CTA placement, optimized forms, and UX patterns that turn visitors into customers." },
  { icon: BarChart3, title: "Analytics Integration", desc: "Complete event tracking and conversion analytics. Clear visibility into user behavior and conversion optimization." },
];

const services = [
  { 
    title: "Landing Pages", 
    desc: "High-converting single pages that capture leads and drive action.",
    bullets: ["A/B testing ready", "Lead capture forms", "Fast loading", "SEO optimized"]
  },
  { 
    title: "E-commerce Stores", 
    desc: "Full online stores with product management, cart, and payments.",
    bullets: ["Stripe/Razorpay integration", "Inventory management", "Order tracking", "Mobile-first design"]
  },
  { 
    title: "SaaS Dashboards", 
    desc: "Admin panels and user dashboards for web applications.",
    bullets: ["Real-time data", "User management", "Analytics views", "API integration"]
  },
  { 
    title: "Web Applications", 
    desc: "Complex full-stack web apps with authentication and databases.",
    bullets: ["User auth systems", "Database design", "REST/GraphQL APIs", "Cloud deployment"]
  },
  { 
    title: "Corporate Websites", 
    desc: "Professional business websites that establish credibility.",
    bullets: ["CMS integration", "Blog functionality", "SEO foundation", "Team/case study pages"]
  },
  { 
    title: "Portfolio Sites", 
    desc: "Creative showcases for agencies, freelancers, and creators.",
    bulletS: ["Visual storytelling", "Performance optimized", "Contact integrations", "SEO ready"]
  },
];

const process = [
  { num: "01", title: "Discovery", desc: "We discuss your business, goals, target audience, and requirements in detail.", color: "bg-blue-500" },
  { num: "02", title: "Design", desc: "Wireframes and visual design tailored to your brand. We iterate until perfect.", color: "bg-purple-500" },
  { num: "03", title: "Development", desc: "Clean code with Next.js, TypeScript, and best practices. Regular progress updates.", color: "bg-pink-500" },
  { num: "04", title: "Launch", desc: "Deploy to Vercel with SSL, configure analytics, and provide documentation.", color: "bg-green-500" },
];

const techStack = [
  { name: "Next.js", desc: "React framework" },
  { name: "TypeScript", desc: "Type safety" },
  { name: "Tailwind CSS", desc: "Styling" },
  { name: "Prisma", desc: "Database ORM" },
  { name: "PostgreSQL", desc: "Database" },
  { name: "Vercel", desc: "Deployment" },
  { name: "Stripe", desc: "Payments" },
  { name: "AWS", desc: "Cloud" },
];

const faqs = [
  { question: "How much does a website cost?", answer: "Our web development packages start at $299 for landing pages. E-commerce stores start at $799, and custom web applications start at $1,999. We provide detailed quotes after understanding your requirements." },
  { question: "How long does it take to build a website?", answer: "Landing pages: 3-5 days. Business websites: 1-2 weeks. E-commerce stores: 3-6 weeks. SaaS applications: 8-16 weeks. Timelines vary based on complexity and scope." },
  { question: "Do I own the website?", answer: "Yes, you get 100% ownership of all code, designs, and assets. We provide full source code with documentation." },
  { question: "Will my website rank on Google?", answer: "We build SEO best practices into every site - fast loading, proper headings, semantic HTML, meta tags, and sitemaps. For competitive keywords, we recommend ongoing SEO services." },
  { question: "Can you help with domain and hosting?", answer: "Yes, we can handle everything - domain registration, DNS configuration, and managed hosting on Vercel or AWS. We make it completely hassle-free." },
];

// Web Development Pricing in USD
const webPricingTiers = [
  {
    name: "Landing Page",
    price: "$299",
    originalPrice: "$599",
    desc: "Single high-converting page",
    features: ["1-5 sections", "Contact forms", "Mobile responsive", "Basic SEO", "Fast loading", "Custom design", "3-5 day delivery"]
  },
  {
    name: "Business Website",
    price: "$599",
    originalPrice: "$1,199",
    desc: "Professional corporate site",
    features: ["Up to 10 pages", "Blog integration", "Contact forms", "Advanced SEO", "Analytics setup", "CMS integration", "1-2 week delivery"],
    popular: true
  },
  {
    name: "E-commerce Store",
    price: "$1,299",
    originalPrice: "$2,599",
    desc: "Full online store",
    features: ["Unlimited products", "Payment gateway", "Inventory management", "Order tracking", "Mobile app view", "Admin dashboard", "3-6 week delivery"]
  }
];

const WebDevelopment = () => {
const testimonials = [
  { name: "Tech Startup", role: "SaaS Dashboard", desc: "Built our entire product dashboard. Excellent code quality and communication.", rating: 5 },
  { name: "Restaurant Chain", role: "Online Ordering", desc: "E-commerce site increased orders by 40% in first month. Highly recommended.", rating: 5 },
  { name: "Consulting Firm", role: "Corporate Website", desc: "Professional, fast, and exactly what we needed. Great experience.", rating: 5 },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Punjab Tech | Expert Web Development - Next.js, React, Custom Websites"
        description="Hire expert web developers. Next.js websites, e-commerce stores, and web apps built for speed, SEO, and conversion. Starting at $499. Free consultation."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                <Code2 size={14} />
                Next.js & React Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Websites That{" "}
              <span className="text-primary">Load Fast</span>{" "}
              &{" "}
              <span className="text-primary">Convert Better</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stop losing customers to slow websites. We build blazing-fast Next.js 
              websites and web apps that look stunning and turn visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27need%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Quote
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 100% Source Code</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> SEO Optimized</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Fast Loading</span>
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

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Punjab Tech</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Websites Built for Business Results</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites. We build conversion machines that 
              help your business grow.
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
      <section id="services" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Build</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Web Solutions for Every Need</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-8 hover:shadow-warm transition-all"
              >
                <h3 className="font-heading text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Built with modern, battle-tested technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="text-center p-4 rounded-xl bg-card border border-border">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </div>
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
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Process</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">How We Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border bg-background"
              >
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold mx-auto mb-4`}>
                  {step.num}
                </div>
                <h3 className="font-heading text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
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
                className="rounded-2xl border border-border bg-card p-8"
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Startup-friendly pricing to get your business online fast.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {webPricingTiers.map((tier, i) => (
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
              <a href="https://wa.me/917814002784?text=Interested%20in%20{tier.name}" className={`block text-center rounded-full py-3 font-semibold transition-all ${tier.popular ? 'bg-gradient-warm text-primary-foreground hover:shadow-warm' : 'border border-border hover:bg-background'}`}>Get Started</a>
          </motion.div>
          ))}
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Unlimited products</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Payment integration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Order management</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" /> 3-6 weeks delivery</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Admin dashboard</li>
              </ul>
              <a href="/contact" className="block text-center rounded-full border border-border py-3 font-medium hover:bg-background transition-colors">Get Started</a>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Build Your Website?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free quote within 24 hours. Tell us about your project and we'll get back to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%20need%20a%20website"
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

export default WebDevelopment;