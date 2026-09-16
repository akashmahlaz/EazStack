import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, CreditCard, Lock, Globe, Smartphone, Wallet, Zap, Shield, Building2, MessageCircle, TrendingUp, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+", label: "Payment Integrations" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "100+", label: "Countries Supported" },
  { value: "Instant", label: "Settlement Options" },
];

const process = [
  { num: "01", title: "Payment Audit", desc: "We analyze your business model and recommend the best payment processors and payment methods for your audience." },
  { num: "02", title: "Integration Setup", desc: "Implement secure payment integration with your app or website using Stripe, Razorpay, or other processors." },
  { num: "03", title: "Testing & Security", desc: "Complete testing across all payment scenarios and ensure PCI-DSS compliance for secure transactions." },
  { num: "04", title: "Go Live & Support", desc: "Launch with confidence. Ongoing monitoring, dispute handling, and optimization support included." },
];

const benefits = [
  { icon: Globe, title: "Global Payment Methods", desc: "Accept cards, UPI, PayPal, wallets, bank transfers, and local payment methods across 100+ countries." },
  { icon: Zap, title: "Instant Settlements", desc: "Get funds in your account within hours, not days. Options for instant payouts to improve cash flow." },
  { icon: Shield, title: "PCI-DSS Compliance", desc: "Enterprise-grade security with full PCI compliance. Your customer data and payments are always safe." },
  { icon: TrendingUp, title: "Higher Conversion", desc: "Optimized checkout flows and multiple payment options reduce cart abandonment by upto 30%." },
  { icon: DollarSign, title: "Competitive Rates", desc: "Best-in-class processing fees. We help you negotiate rates based on your transaction volume." },
  { icon: Smartphone, title: "Mobile-Optimized", desc: "Seamless payment experience across all devices with responsive checkout designed for mobile-first." },
];

const services = [
  { name: "Stripe", desc: "Global card payments & more" },
  { name: "Razorpay", desc: "India-focused payments" },
  { name: "UPI", desc: "Unified Payments Interface" },
  { name: "Wallet", desc: "Paytm, Amazon Pay, etc." },
  { name: "International", desc: "PayPal, 2Checkout" },
  { name: "Subscriptions", desc: "Recurring billing & SaaS" },
];

const testimonials = [
  { name: "FitnessPro", role: "SaaS Subscription", desc: "Stripe subscriptions transformed our revenue. Monthly recurring revenue grew 5x in 6 months.", rating: 5 },
  { name: "FoodDelivery", role: "Food Tech", desc: "Razorpay integration with UPI increased our orders by 40%. Instant settlements are game-changer!", rating: 5 },
  { name: "CoursesPlus", role: "EdTech Platform", desc: "Global customers can now pay easily. Stripe international payments opened new markets for us.", rating: 5 },
];

const faqs = [
  { question: "Which payment processor should I choose?", answer: "For Indian businesses with Indian customers, Razorpay is best. For global SaaS businesses, Stripe is ideal. We help you choose based on your specific needs." },
  { question: "How long does payment integration take?", answer: "Basic integration takes 3-5 days. Complex scenarios like subscriptions or marketplace payments take 1-2 weeks." },
  { question: "What are the transaction fees?", answer: "Razorpay: 1.9% + GST for domestic cards. Stripe: 2.9% + $0.30 for international cards. Volume discounts available." },
  { question: "Do you handle tax/GST on payments?", answer: "We can integrate with platforms like QuickBooks or set up automated GST calculation and reporting." },
  { question: "Can I offer subscriptions or recurring payments?", answer: "Absolutely! We set up complete subscription infrastructure with trial periods, multiple plans, and automated billing." },
];

const PaymentIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Payment Gateway Integration - Stripe, Razorpay & Payment Processing</title>
      <meta name="description" content="Expert payment integration services. Stripe, Razorpay, UPI & global payments for apps & websites. PCI-DSS compliant, instant settlements. Free consultation." />
      <meta name="keywords" content="payment gateway integration, Stripe integration, Razorpay payment, UPI integration, payment processing, subscription billing, PCI compliance, payment gateway India, online payments, Razorpay vs Stripe" />
      <meta property="og:title" content="Punjab Tech | Payment Gateway Integration - Accept Payments Anywhere" />
      <meta property="og:description" content="Stripe, Razorpay & global payment integration. Accept cards, UPI, wallets. Set up subscriptions & get instant settlements." />
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
                50+ Payment Integrations Completed
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Accept Payments{" "}
              <span className="text-primary">Everywhere</span>—Securely
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stripe, Razorpay, UPI & global payments integrated seamlessly. 
              PCI-DSS compliant with instant settlements and higher conversion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20integrate%20payments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Payment Consultation
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />PCI-DSS Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />99.9% Uptime</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Instant Settlements</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Payments That Power Your Business</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We don't just integrate payments—we optimize your entire checkout experience 
              to maximize revenue and minimize friction.
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
          <p className="text-center text-sm text-muted-foreground mb-8">Payment solutions we offer</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Integration in 4 Simple Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Transparent Integration Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Basic Integration</h3>
              <p className="text-muted-foreground text-sm mb-4">For simple payment needs</p>
              <div className="font-heading text-4xl mb-6">₹15K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Single payment processor</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Card payments</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />5-day delivery</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Basic testing</li>
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
              <h3 className="font-heading text-xl mb-2">Business</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete payment solution</p>
              <div className="font-heading text-4xl mb-6">₹30K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Multiple processors</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />UPI & wallet payments</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Subscription billing</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />PCI compliance</li>
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
              <p className="text-muted-foreground text-sm mb-4">Full-scale payment platform</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Marketplace payments</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />International payments</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Custom checkout</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Accept Payments?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free payment consultation. We'll recommend the best solution 
              for your business and provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20integrate%20payments%20for%20my%20business"
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

export default PaymentIntegration;