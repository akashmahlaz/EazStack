import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Share2, Users, MessageCircle, Hash, TrendingUp, Globe, Target, Megaphone, Video, PenTool } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "500K+", label: "Followers Grown" },
  { value: "50+", label: "Accounts Managed" },
  { value: "300%", label: "Avg. Engagement Increase" },
  { value: "24/7", label: "Active Support" },
];

const process = [
  { num: "01", title: "Social Audit", desc: "We analyze your current social media presence, competitor strategies, and identify opportunities for growth." },
  { num: "02", title: "Strategy Development", desc: "Create a personalized content strategy with posting schedules, content pillars, and growth tactics." },
  { num: "03", title: "Content Creation", desc: "Design and schedule engaging posts, stories, reels, and videos that resonate with your audience." },
  { num: "04", title: "Growth & Engagement", desc: "Active community management, engagement with followers, and data-driven optimization for results." },
];

const benefits = [
  { icon: TrendingUp, title: "Real, Engaged Followers", desc: "We grow your following with real users who genuinely engage—not bots or fake accounts that hurt your brand." },
  { icon: Target, title: "Platform Expertise", desc: "Specialized strategies for Instagram, LinkedIn, Twitter, and Facebook tailored to each platform's unique algorithm." },
  { icon: Megaphone, title: "Content That Converts", desc: "High-quality content designed to not just gain followers, but convert them into customers and brand advocates." },
  { icon: Video, title: "Video & Reels Production", desc: "Professional short-form video content that's optimized for viral reach and algorithm favor." },
  { icon: PenTool, title: "Brand Voice Development", desc: "Consistent visual identity and voice that makes your brand recognizable across all social platforms." },
  { icon: Globe, title: "Multi-Platform Presence", desc: "Strategic presence across all major social platforms, maximizing your reach and brand visibility." },
];

const servicesIncluded = [
  { name: "Content Strategy", desc: "Monthly content calendar & planning" },
  { name: "Post Creation", desc: "10-15 posts per month" },
  { name: "Story Management", desc: "Daily stories & highlights" },
  { name: "Reels/Shorts", desc: "4-6 short-form videos monthly" },
  { name: "Community Mgmt", desc: "Reply to comments & DMs" },
  { name: "Analytics Report", desc: "Monthly performance insights" },
];

const testimonials = [
  { name: "FashionHub", role: "E-commerce Brand", desc: "Our Instagram grew from 2K to 50K followers in 6 months. Sales increased by 200%!", rating: 5 },
  { name: "TechStart", role: "B2B SaaS", desc: "LinkedIn strategy got us 3 enterprise clients directly from inbound messages. Incredible ROI.", rating: 5 },
  { name: "CafeBrew", role: "Local Business", desc: "Local following exploded after their social management. Now we have waitlist every day!", rating: 5 },
];

const faqs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial growth within 2-4 weeks. Significant follower increases (50%+) typically within 2-3 months with consistent strategy execution." },
  { question: "Do you use bots or fake followers?", answer: "Absolutely not. We grow your audience organically with real, engaged followers. Fake followers provide no value and can actually harm your brand." },
  { question: "Which platforms do you manage?", answer: "We specialize in Instagram, LinkedIn, Twitter/X, and Facebook. We recommend 1-2 platforms initially for maximum impact, then expand." },
  { question: "What content do you create?", answer: "We create a mix of educational, promotional, and engagement content including static posts, carousels, stories, reels, and videos—all tailored to your brand voice." },
  { question: "Can you handle influencer partnerships?", answer: "Yes! Our premium packages include influencer outreach and partnership management to amplify your brand reach through relevant creators." },
];

const SocialMediaGrowth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO */}
      <title>Punjab Tech | Social Media Marketing & Growth Agency - Instagram, LinkedIn Management</title>
      <meta name="description" content="Grow your social media presence with Punjab's top agency. Instagram, LinkedIn & Facebook management. Real followers, engagement, and conversions. Free audit." />
      <meta name="keywords" content="social media marketing agency, Instagram growth service, LinkedIn marketing, social media management, grow followers, influencer marketing, content creation, Punjab social media agency" />
      <meta property="og:title" content="Punjab Tech | Social Media Growth Agency - Real Followers, Real Results" />
      <meta property="og:description" content="Transform your social media presence. Get real followers, engagement, and customers through data-driven social strategies." />
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
                500K+ Followers Grown for Clients
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            >
              Build a Community,{" "}
              <span className="text-primary">Not Just Followers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Real followers who engage, convert, and become brand advocates. 
              Data-driven social media growth that delivers measurable business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20to%20grow%20my%20social%20media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get Free Social Audit
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
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Real Followers (No Bots)</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />300% Avg. Engagement Lift</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" />Monthly Reporting</span>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Social Media That Actually Grows Your Business</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We don't just post content—we build communities, generate leads, 
              and create brand advocates who drive real business growth.
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

      {/* Services Included */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">What's included in every package</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesIncluded.map((item) => (
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">From Zero to Community in 4 Steps</h2>
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
            <h2 className="font-heading text-4xl md:text-5xl mt-4">Flexible Social Media Packages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm mb-4">For small businesses starting out</p>
              <div className="font-heading text-4xl mb-6">₹15K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />1 Platform</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />12 Posts/month</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Daily stories</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Basic analytics</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Community mgmt</li>
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
              <p className="text-muted-foreground text-sm mb-4">For businesses ready to scale</p>
              <div className="font-heading text-4xl mb-6">₹30K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />2 Platforms</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />20 Posts/month</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />4 Reels/videos</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Detailed analytics</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Influencer outreach</li>
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
              <p className="text-muted-foreground text-sm mb-4">For brands needing full presence</p>
              <div className="font-heading text-4xl mb-6">₹50K<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />All platforms</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Unlimited posts</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />8+ Reels/videos</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary" />Ad management</li>
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
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Grow Your Social Presence?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free social media audit and growth strategy. 
              No commitment—just insights to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917814002784?text=Hi%20Akash%2C%20I%27d%20like%20a%20free%20social%20media%20audit"
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

export default SocialMediaGrowth;