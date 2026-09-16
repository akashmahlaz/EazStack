import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Smartphone, Globe, AppleIcon, Play, Camera, FileText, TrendingUp, Shield, Clock, MessageCircle, Monitor, Star as StarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const stats = [
  { value: "500+", label: "Apps Published" },
  { value: "100%", label: "Approval Rate" },
  { value: "24/7", label: "Review Support" },
  { value: "3 Days", label: "Avg. Approval Time" },
];

const process = [
  { num: "01", title: "App Audit", desc: "We review your app to ensure it meets all App Store & Play Store guidelines before submission." },
  { num: "02", title: "Store Listing", desc: "Create compelling app title, description, keywords, and screenshots that convert browsers to downloads." },
  { num: "03", title: "Submission", desc: "Handle complete submission process for both stores including developer accounts and compliance." },
  { num: "04", title: "Post-Launch", desc: "Monitor reviews, respond to feedback, and optimize listing for better visibility and downloads." },
];

const benefits = [
  { icon: Shield, title: "100% Approval Guarantee", desc: "We ensure your app meets all guidelines before submission. Our approval rate is 100%—no rejections." },
  { icon: Globe, title: "Dual Store Presence", desc: "Get your app published on both Google Play Store and Apple App Store to reach 99% of smartphone users." },
  { icon: TrendingUp, title: "Optimized Listings", desc: "Strategic keyword optimization, compelling screenshots, and descriptions that drive installs." },
  { icon: FileText, title: "Policy Compliance", desc: "We handle complex compliance requirements—privacy policies, in-app purchases, subscriptions, and more." },
  { icon: Camera, title: "Screenshot & Preview Design", desc: "Professional app preview images, feature graphics, and video trailers that capture attention." },
  { icon: Clock, title: "Fast Turnaround", desc: "Average 3-day approval time. Rush submissions available for time-sensitive launches." },
];

const services = [
  { name: "Play Store", desc: "Google Play submission & optimization" },
  { name: "App Store", desc: "Apple App Store submission" },
  { name: "Developer Account", desc: "Developer account setup & management" },
  { name: "ASO", desc: "App Store Optimization services" },
  { name: "Screenshots", desc: "Professional screenshot design" },
  { name: "Privacy Policy", desc: "Privacy policy & compliance docs" },
];

const testimonials = [
  { name: "Mindset App", role: "Wellness & Fitness", desc: "Launched on both stores in 5 days. Their expertise made the process seamless!", rating: 5 },
  { name: "FoodieExpress", role: "Food Delivery", desc: "Got 10K downloads in first month thanks to their ASO optimization.", rating: 5 },
  { name: "LearnPro", role: "EdTech Platform", desc: "Handle complex education app compliance perfectly. Highly recommended!", rating: 5 },
];

const faqs = [
  { question: "How long does app store submission take?", answer: "Play Store typically takes 1-3 days. App Store takes 1-7 days. We fast-track submissions when possible and keep you updated throughout." },
  { question: "Do I need developer accounts?", answer: "Yes, you'll need developer accounts for both stores. We can help you set them up—one-time fees apply (Google: $25, Apple: $99/year)." },
  { question: "What if my app gets rejected?", answer: "We minimize rejections with our pre-submission audit. If rejected, we handle the appeal process at no extra cost and fix any issues." },
  { question: "Can you help with app updates?", answer: "Absolutely! We handle all future updates including new versions, screenshots, descriptions, and compliance updates." },
  { question: "Do you provide ASO services?", answer: "Yes! App Store Optimization is included. We research keywords, optimize descriptions, and create conversion-optimized screenshots." },
];

const AppStorePublishing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Seo 
        title="Punjab Tech | App Store Publishing - Play Store & App Store Submission Services"
        description="Get your app published on Play Store & App Store. 100% approval guarantee, ASO optimization & fast submission. Launch in 3 days. Free consultation."
      />

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
                100% Approval Rate - 500+ Apps Published
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Get Your App{" "}
              <span className="text-primary">in Users' Hands</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Play Store & App Store publishing with 100% approval guarantee. 
              ASO optimization, screenshots, and ongoing management included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20publish%20my%20app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Publishing Quote
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />100% Approval Rate</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />3-Day Avg. Approval</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Both Stores</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Publishing Without the Headache</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We handle the complex publishing process so you can focus on 
              building your app. Zero rejections, maximum visibility.
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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Process</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">From Build to Launch in 4 Steps</h2>
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
                    <StarIcon key={i} size={16} className="fill-primary text-primary" />
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Transparent Publishing Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Single Store</h3>
              <p className="text-muted-foreground text-sm mb-4">Play Store OR App Store</p>
              <div className="font-heading text-4xl mb-6">$99<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />One store submission</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Listing optimization</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Screenshot design</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3-5 day approval</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Policy compliance</li>
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
              <h3 className="font-heading text-xl mb-2">Both Stores</h3>
              <p className="text-muted-foreground text-sm mb-4">Play Store + App Store</p>
              <div className="font-heading text-4xl mb-6">$199<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Both stores submission</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Full ASO optimization</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Screenshot & preview design</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Priority review</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />30-day support</li>
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
              <h3 className="font-heading text-xl mb-2">Launch Premium</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete package with ASO</p>
              <div className="font-heading text-4xl mb-6">$299<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Both stores + developer accounts</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Advanced ASO</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Video trailer creation</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />1-year listing management</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Review monitoring</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Launch Your App?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free publishing assessment. We'll review your app and give you 
              a timeline for getting it live in both stores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20publish%20my%20app%20to%20the%20stores"
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

export default AppStorePublishing;