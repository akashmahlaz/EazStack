import { motion } from "framer-motion";
import {
  Globe, Smartphone, BarChart3, Megaphone, Users, Wallet,
  CreditCard, Palette, Share2, BookOpen, Briefcase, HeadphonesIcon,
  AppleIcon,
  Scale,
  Code2,
  Cloud,
  TrendingUp,
} from "lucide-react";

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS & Android apps built with React Native & Expo — from MVP to App Store & Play Store publishing.", href: "/app-development" },
  { icon: Scale, title: "Legal & Compliance", desc: "Company registration, contracts, and regulatory guidance.", href: "/legal" },
  { icon: AppleIcon, title: "App Store Publishing", desc: "Listing, screenshots, metadata, and review fixes for the App Store & Google Play.", href: "/app-store-publishing" },
  { icon: Globe, title: "Websites & Web Apps", desc: "High-conversion websites, dashboards, and SaaS apps built with Next.js.", href: "/web-development" },
  { icon: BarChart3, title: "CRM Integration", desc: "Seamless CRM setup to manage leads, sales, and customer relationships.", href: "/crm-integration" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, and content strategies that drive real growth.", href: "/digital-marketing" },
  { icon: Share2, title: "Social Media Growth", desc: "Build your brand presence across all major platforms.", href: "/social-media-growth" },
  { icon: Palette, title: "Branding & Design", desc: "Logos, business cards, banners, and complete brand identity.", href: "/branding-design" },
  { icon: Wallet, title: "Funding Guidance", desc: "Navigate investors, grants, and fundraising strategies.", href: "/funding-guidance" },
  { icon: CreditCard, title: "Payment Integration", desc: "Secure payment gateways and billing systems for your app/web.", href: "/payment-integration" },
  { icon: BookOpen, title: "Business Strategy", desc: "Market research, business plans, and competitive analysis.", href: "/business-strategy" },
  { icon: Users, title: "Hiring Support", desc: "Find and recruit the right talent for your growing team.", href: "/hiring-support" },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "Maintenance, updates, and crash fixes after launch.", href: "/ongoing-support" },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl">
            Everything Your Startup Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mobile apps first. One crew, one package — from idea to a thriving business.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-warm block"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;