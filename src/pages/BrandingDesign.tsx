import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Palette, PenTool, Layout, Target, TrendingUp, Users, Quote, Lightbulb, Crown, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "100+", label: "Brands Designed" },
  { value: "50+", label: "Startup Logos" },
  { value: "3 Days", label: "Logo Delivery" },
  { value: "100%", label: "Satisfaction" },
];

const process = [
  { num: "01", title: "Brand Discovery", desc: "We dive deep into your startup's vision, values, target audience, and competitive landscape to understand what makes you unique." },
  { num: "02", title: "Concept Development", desc: "Our designers create 3-5 unique brand directions based on discovery insights, exploring different visual identities." },
  { num: "03", title: "Refinement & Delivery", desc: "You select your favorite concept, we refine every detail, and deliver all brand assets in multiple formats." },
  { num: "04", title: "Brand Guidelines", desc: "Comprehensive brand book with color codes, typography, logo usage rules, and brand voice guidelines." },
];

const benefits = [
  { icon: Crown, title: "Premium Brand Identity", desc: "Stand out in crowded markets with a distinctive visual identity that communicates your startup's unique value proposition instantly." },
  { icon: Target, title: "Strategic Positioning", desc: "We don't just design logos—we create brand strategies that position you for investor attention and customer trust." },
  { icon: PenTool, title: "Complete Brand Assets", desc: "Get logo in all formats (AI, PNG, SVG), color palette, typography, business cards, letterheads, and social media kits." },
  { icon: TrendingUp, title: "Investor-Ready Presentation", desc: "Professional branding that builds credibility with investors, partners, and customers from day one." },
  { icon: Users, title: "Audience Connection", desc: "Visual identity designed to resonate with your specific target audience and drive meaningful connections." },
  { icon: Layout, title: "Multi-Platform Consistency", desc: "Brands that work seamlessly across website, app, social media, print, and digital marketing materials." },
];

const deliverables = [
  { name: "Primary Logo", desc: "Main logo with full color, white, and black variants" },
  { name: "Logo Variations", desc: "Horizontal, stacked, and icon-only versions" },
  { name: "Color Palette", desc: "Primary, secondary, and accent colors with codes" },
  { name: "Typography", desc: "Heading and body font selections with usage guide" },
  { name: "Business Card", desc: "Professional business card design" },
  { name: "Brand Guidelines", desc: "Comprehensive brand style guide PDF" },
];

const testimonials = [
  { name: "TechVentures", role: "SaaS Startup", desc: "Our new logo and brand identity got us noticed by investors within weeks. Incredible work!", rating: 5 },
  { name: "GreenCart", role: "E-commerce", desc: "Professional branding that perfectly captures our eco-friendly mission. Highly recommended.", rating: 5 },
  { name: "HealthFirst", role: "Healthcare App", desc: "Clean, modern design that builds trust. Our user onboarding improved by 40% after rebrand.", rating: 5 },
];

const faqs = [
  { question: "How much does professional branding cost?", answer: "Our branding packages start at ₹25,000 for logo design. Complete brand identity (logo + colors + typography + guidelines) starts at ₹50,000. We offer flexible packages based on your startup's needs." },
  { question: "How long does the branding process take?", answer: "Logo concepts are delivered within 3-5 business days. Complete brand identity with guidelines takes 7-10 business days. Rush delivery available." },
  { question: "Will I own the complete brand assets?", answer: "Yes, 100% ownership of all brand assets including source files. You receive AI, EPS, SVG, PNG formats of all designs." },
  { question: "Do you provide revisions?", answer: "Each package includes 2-3 rounds of revisions. Our goal is to ensure you're completely satisfied with the final result." },
  { question: "What's included in brand guidelines?", answer: "Brand guidelines include logo usage rules, color palette with codes, typography specifications, imagery style, and brand voice principles—all in a professional PDF." },
];

const BrandingDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Professional Branding & Logo Design Services - Startup Brand Identity</title>
      <meta name="description" content="Punjab's top branding agency. Logo design, brand identity & visual identity for startups. Get investor-ready branding in 3 days. Free brand consultation." />
      <meta name="keywords" content="branding agency, logo design services, brand identity design, startup branding, visual identity, logo maker, professional graphic design, brand guidelines, Punjab branding company" />
      <meta property="og:title" content="Punjab Tech | Professional Branding & Logo Design for Startups" />
      <meta property="og:description" content="Build a memorable brand identity that attracts investors and customers. Logo design, brand strategy & complete visual identity." />
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
               Trusted by 100+ Startups Across India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Brand Stories That{" "}
              <span className="text-primary">Convert</span>{" "}
              & Win Investors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stand out in crowded markets with premium brand identity designed 
              to attract investors, engage customers, and build lasting recognition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20get%20branding%20for%20my%20startup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Brand Consultation
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />3-Day Logo Delivery</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />100% Source Files</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Unlimited Revisions</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Not Just a Logo — A Complete Brand Identity</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We build brands that tell stories, create Emotional connections, 
              and drive real business growth for your startup.
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

      {/* Deliverables */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">What's included in every package</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {deliverables.map((item) => (
              <div key={item.name} className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">From Concept to Iconic in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Simple, Transparent Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Logo Starter</h3>
              <p className="text-muted-foreground text-sm mb-4">For startups needing a professional logo</p>
              <div className="font-heading text-4xl mb-6">₹25K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />1 Logo Concept</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3 Revisions</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />All file formats</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3-day delivery</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Black & white variants</li>
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
              <h3 className="font-heading text-xl mb-2">Brand Identity</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete visual identity for startups</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3 Logo Concepts</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Unlimited revisions</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Color palette & typography</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Business card design</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Brand guidelines PDF</li>
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
              <h3 className="font-heading text-xl mb-2">Premium Brand</h3>
              <p className="text-muted-foreground text-sm mb-4">Full brand experience for scaling startups</p>
              <div className="font-heading text-4xl mb-6">₹1L<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />5 Logo Concepts</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Complete brand identity</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Social media kit</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Stationery design</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Priority support</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Build Your Brand?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free brand consultation. We'll discuss your vision and 
              create a visual identity that sets you apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20branding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                <Quote size={18} />
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

export default BrandingDesign;