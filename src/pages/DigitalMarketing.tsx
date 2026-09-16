import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Search, TrendingUp, DollarSign, Target, MessageCircle, BarChart3, Users, Globe, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "300%", label: "Avg. ROI Increase" },
  { value: "50+", label: "Clients Grown" },
  { value: "₹10Cr+", label: "Ad Spend Managed" },
  { value: "24/7", label: "Campaign Monitoring" },
];

const services = [
  { 
    title: "Search Engine Optimization (SEO)", 
    desc: "Rank higher on Google and drive organic traffic that keeps growing.",
    features: ["Technical SEO audit", "On-page optimization", "Link building", "Content strategy", "Local SEO", "Monthly reporting"]
  },
  { 
    title: "Pay-Per-Click (PPC) Ads", 
    desc: "Google Ads and Meta Ads that deliver immediate,measurable results.",
    features: ["Campaign setup", "Ad copywriting", "Audience targeting", "A/B testing", "Conversion tracking", "Weekly optimization"]
  },
  { 
    title: "Social Media Marketing", 
    desc: "Build engaged communities and convert followers into customers.",
    features: ["Content calendar", "Post creation", "Community management", "Influencer outreach", "Paid social ads", "Analytics"]
  },
  { 
    title: "Email Marketing", 
    desc: "Automated sequences that nurture leads and drive repeat purchases.",
    features: ["Campaign strategy", "Template design", "Automation flows", "List segmentation", "A/B testing", "Performance reports"]
  },
  { 
    title: "Content Marketing", 
    desc: "Valuable content that establishes authority and attracts your ideal audience.",
    features: ["Blog posts", "Case studies", "Whitepapers", "Video scripts", "Infographics", "Distribution"]
  },
  { 
    title: "Analytics & Reporting", 
    desc: "Data-driven insights to optimize every aspect of your marketing.",
    features: ["Traffic analysis", "Conversion tracking", "KPI dashboards", "Competitor analysis", "Monthly strategy calls", "Actionable insights"]
  },
];

const process = [
  { num: "01", title: "Audit & Analysis", desc: "We analyze your current presence, competitors, and opportunities." },
  { num: "02", title: "Strategy Development", desc: "Custom marketing plan aligned with your business goals." },
  { num: "03", title: "Implementation", desc: "Execute campaigns with creative assets and targeting." },
  { num: "04", title: "Optimization", desc: "Continuous testing and improvement for better results." },
];

const faqs = [
  { question: "How soon will I see results from digital marketing?", answer: "SEO takes 3-6 months for significant results. PPC ads can generate traffic immediately. Social media growth typically shows progress within 2-3 months. We provide monthly progress reports so you can track performance." },
  { question: "How much should I spend on digital marketing?", answer: "Budget depends on your goals, industry, and competition. We recommend starting with ₹25,000-50,000/month for small businesses and scaling based on results. We'll help you allocate budget across channels for maximum ROI." },
  { question: "Do you offer packages or customize strategies?", answer: "We create custom strategies based on your specific business needs, goals, and budget. Every business is unique, and we tailor our approach accordingly. We do offer standard packages for common needs like SEO or PPC management." },
  { question: "What industries do you work with?", answer: "We've worked with e-commerce, SaaS, healthcare, education, real estate, restaurants, and more. Our data-driven approach adapts to any industry. Contact us to see if we're a good fit for your specific niche." },
  { question: "Can I manage my own campaigns with your guidance?", answer: "Absolutely! We offer done-with-you options where we set up campaigns and train your team to manage them. Or we can handle everything for you - just let us know what level of involvement works best." },
];

const testimonials = [
  { name: "E-commerce Brand", role: "Fashion & Apparel", desc: "ROAS increased by 250% in 3 months. Excellent ROI.", rating: 5 },
  { name: "SaaS Startup", role: "B2B Software", desc: "Generated 200+ qualified leads per month. Very professional.", rating: 5 },
  { name: "Local Restaurant", role: "Food & Dining", desc: "Online orders increased 3x after local SEO optimization.", rating: 5 },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Digital Marketing Agency - SEO, PPC, Social Media Marketing</title>
      <meta name="description" content="Grow your business with expert digital marketing. SEO, Google Ads, Meta advertising, and social media marketing. 300% average ROI increase. Free marketing audit." />
      <meta name="keywords" content="digital marketing agency, SEO company, PPC management, Google Ads, social media marketing, content marketing, email marketing, digital marketing services, marketing agency Punjab, growth marketing" />
      <meta property="og:title" content="Punjab Tech | Digital Marketing Agency - SEO & PPC Experts" />
      <meta property="og:description" content="Grow your business with data-driven digital marketing. SEO, Google Ads, social media. 300% average ROI." />
      <meta property="og:type" content="website" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
                <TrendingUp size={14} />
                Data-Driven Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Grow Your Business with{" "}
              <span className="text-primary">Data-Driven</span>{" "}
              Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stop guessing with marketing. We use real data and proven strategies 
              to drive traffic, leads, and revenue. 300% average ROI increase for our clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27need%20digital%20marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Audit
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body text-base font-semibold hover:bg-card transition-all"
              >
                See Our Services
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> 300% Avg. ROI</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> No Long-term Contracts</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Transparent Reporting</span>
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

      {/* Why Digital Marketing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Digital Marketing</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Marketing That Delivers Real Results</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In today's digital world, your customers are online. We help you 
              find them, engage them, and convert them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-warm transition-all"
              >
                <h3 className="font-heading text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">How We Grow Your Business</h2>
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
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold mx-auto mb-4">
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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Client Results</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">What Our Clients Achieve</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Flexible Marketing Packages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm mb-4">For small businesses</p>
              <div className="font-heading text-4xl mb-6">₹25K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Basic SEO</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Google Ads management</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Monthly report</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Email support</li>
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
              <h3 className="font-heading text-xl mb-2">Growth</h3>
              <p className="text-muted-foreground text-sm mb-4">For scaling businesses</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Full SEO package</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Multi-platform ads</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Social media management</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Email campaigns</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Bi-weekly calls</li>
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
              <p className="text-muted-foreground text-sm mb-4">For large organizations</p>
              <div className="font-heading text-4xl mb-6">₹1L<span className="text-lg text-muted-foreground">+/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Custom strategy</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Full digital presence</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Dedicated manager</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Daily monitoring</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500" /> Priority support</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Grow?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free marketing audit and growth strategy. No obligation, just actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%20want%20a%20free%20marketing%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                <MessageCircle size={18} />
                Get Free Audit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-body font-semibold hover:bg-card transition-all"
                >
                Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;