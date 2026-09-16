import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Link2, Database, Workflow, BarChart3, Shield, Zap, Globe, Settings, MessageCircle, Target, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const stats = [
  { value: "100+", label: "CRM Implementations" },
  { value: "50+", label: "Integrations Built" },
  { value: "3 Days", label: "Avg. Setup Time" },
  { value: "200%", label: "Sales Efficiency Increase" },
];

const process = [
  { num: "01", title: "Needs Assessment", desc: "We analyze your sales process, current tools, and identify gaps where CRM can drive efficiency." },
  { num: "02", title: "CRM Selection & Setup", desc: "Recommend the right CRM (Salesforce, HubSpot, Zoho) based on your needs and set it up optimally." },
  { num: "03", title: "Custom Integration", desc: "Connect CRM with your website, app, email, payment systems, and other business tools." },
  { num: "04", title: "Training & Handover", desc: "Complete team training, documentation, and ongoing support to ensure adoption and success." },
];

const benefits = [
  { icon: Target, title: "Centralized Customer Data", desc: "Unify all customer interactions, leads, and deals in one powerful system. Never lose track of a prospect again." },
  { icon: TrendingUp, title: "Automated Workflows", desc: "Save 10+ hours weekly with automated lead scoring, follow-ups, and task assignments based on customer actions." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Powerful dashboards showing sales pipeline, conversion rates, team performance, and revenue forecasts." },
  { icon: Link2, title: "Seamless Integrations", desc: "Connect CRM with your website forms, app, email marketing, payment gateways, and 100+ other tools." },
  { icon: Workflow, title: "Custom Pipelines", desc: "Tailored sales pipelines that match your unique sales process from lead to customer." },
  { icon: Shield, title: "Enterprise Security", desc: "Role-based access control, data encryption, and audit logs keep your customer data secure and compliant." },
];

const services = [
  { name: "Salesforce", desc: "Implementation, customization & integration" },
  { name: "HubSpot", desc: "Complete setup & marketing automation" },
  { name: "Zoho CRM", desc: "Affordable CRM for growing businesses" },
  { name: "Pipedrive", desc: "Simple pipeline-focused CRM" },
  { name: "Custom API", desc: "Build custom CRM integrations" },
  { name: "Data Migration", desc: "Migrate data from old systems" },
];

const testimonials = [
  { name: "AutoConnect", role: "Automotive SaaS", desc: "HubSpot integration doubled our lead conversion. automation saves team 15 hours/week!", rating: 5 },
  { name: "RetailKing", role: "E-commerce", desc: "Salesforce setup for our 50-person sales team. Pipeline visibility improved 10x.", rating: 5 },
  { name: "ServicePro", role: "Service Business", desc: "Custom CRM integration connected our app, website, and accounting. Game changer!", rating: 5 },
];

const faqs = [
  { question: "Which CRM is best for my startup?", answer: "It depends on your needs and budget. HubSpot is great for startups (free tier available), Salesforce for enterprise features, and Zoho for cost-effective solutions. We help you choose based on your specific requirements." },
  { question: "How long does CRM implementation take?", answer: "Basic setup takes 3-5 business days. Full implementation with custom integrations and team training typically takes 2-3 weeks." },
  { question: "Do you provide ongoing support?", answer: "Yes! We offer monthly support packages starting at $199/month including bug fixes, new integrations, and optimization." },
  { question: "Can you migrate data from our old CRM?", answer: "Absolutely. We handle complete data migration including contacts, deals, activities, and historical data with zero data loss." },
  { question: "Will my team actually use the CRM?", answer: "We provide comprehensive training and make the system intuitive. Our implementations focus on adoption—we configure the CRM to match your team's workflow, not the other way around." },
];

const CrmIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="CRM Integration Services | HubSpot, Salesforce Setup - Punjab Tech"
        description="Expert CRM integration services. Setup HubSpot, Salesforce, Zoho for your startup. Data migration, automation & training. Starting at $299. Free consultation."
      />
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | CRM Integration Services - Salesforce, HubSpot Implementation & Setup</title>
      <meta name="description" content="Expert CRM integration & implementation. Salesforce, HubSpot & Zoho setup for startups. Custom integrations, data migration & training. Double your sales efficiency." />
      <meta name="keywords" content="CRM integration, Salesforce implementation, HubSpot setup, CRM for startups, salesforce partner, HubSpot integration, Zoho CRM, CRM data migration, sales automation, Punjab CRM company" />
      <meta property="og:title" content="Punjab Tech | CRM Integration & Implementation - Salesforce, HubSpot Experts" />
      <meta property="og:description" content="Transform your sales process with expert CRM implementation. Salesforce, HubSpot, custom integrations—all in one place." />
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
                100+ CRM Implementations Completed
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Stop Wrestling With{" "}
              <span className="text-primary">Your CRM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Salesforce, HubSpot & custom integrations that actually work. 
              Automate workflows, track leads, and close more deals—without the headache.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20discuss%20CRM%20integration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free CRM Assessment
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />3-Day Basic Setup</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />100+ Integrations</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Team Training Included</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">CRM That Empowers Your Sales Team</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We don't just set up CRM—we transform how your team sells. 
              Automation, insights, and processes that drive real results.
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
          <p className="text-center text-sm text-muted-foreground mb-8">CRMs We Work With</p>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">CRM Implementation in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">SimpleCRM Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Basic Setup</h3>
              <p className="text-muted-foreground text-sm mb-4">For small teams getting started</p>
              <div className="font-heading text-4xl mb-6">₹25K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />CRM selection & setup</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Pipeline configuration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Basic automation</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3-5 day delivery</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />2 hours training</li>
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
              <h3 className="font-heading text-xl mb-2">Standard</h3>
              <p className="text-muted-foreground text-sm mb-4">Complete CRM for growing businesses</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Full CRM setup</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />3 custom integrations</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Advanced automation</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Data migration</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Team training</li>
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
              <p className="text-muted-foreground text-sm mb-4">Full-scale CRM transformation</p>
              <div className="font-heading text-4xl mb-6">₹1L<span className="text-lg text-muted-foreground">+</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Custom CRM development</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Unlimited integrations</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Advanced analytics</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Dedicated support</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />1-year maintenance</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Transform Your Sales?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free CRM assessment. We'll analyze your needs and recommend 
              the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20a%20free%20CRM%20assessment"
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

export default CrmIntegration;