import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

import teamCeo from "@/assets/team-ceo.png";
import teamDesigner from "@/assets/sahil.png";
import teamDev from "@/assets/satinder.png";
import teamMarketing from "@/assets/vickeramjit-singh.png";
import teamConsultant from "@/assets/arshdeep.png";
import teamGrowth from "@/assets/team-growth.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  desc: string;
  skills: string[];
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const team: TeamMember[] = [
  {
    name: "Akash Mahla",
    role: "Founder & CEO",
    img: teamCeo,
    desc: "Visionary leader with 10+ years in startup ecosystems. Passionate about helping entrepreneurs turn ideas into successful businesses.",
    skills: ["Strategy", "Leadership", "Business Development"],
    linkedin: "https://linkedin.com/in/akashmahlax",
    twitter: "https://x.com/akashmahlax",
    github: "https://github.com/akashmahlaz?tab=repositories"
  },
  {
    name: "Sahil Dutt",
    role: "Lead Designer & Frontend Developer",
    img: teamDesigner,
    desc: "Crafts pixel-perfect brands and digital experiences. Award-winning designer with a passion for creating memorable user journeys.",
    skills: ["UI/UX Design", "Brand Identity", "Figma"],
    linkedin: "https://www.linkedin.com/in/sahildutt/",
    github: "https://sahilduttpb06.github.io/sahilportfolio"
  },
  {
    name: "Satinder Singh",
    role: "Head of Engineering & iOS Developer",
    img: teamDev,
    desc: "Full-stack architect building scalable products. Expert in React Native, Node.js, and cloud infrastructure.",
    skills: ["React Native", "Node.js", "AWS"]
  },
  {
    name: "Vickeramjit Singh",
    role: "Business Analyst & Strategist",
    img: teamMarketing,
    desc: "Growth strategist who scales brands from zero. Data-driven marketer with expertise in digital campaigns.",
    skills: ["Growth Marketing", "SEO", "PPC"]
  },
  {
    name: "Arshdeep Singh",
    role: "Business Consultant & Finance",
    img: teamConsultant,
    desc: "Guides startups through funding and strategy. Former VC with deep expertise in fundraising and business planning.",
    skills: ["Fundraising", "Business Strategy", "Finance"]
  },
];

const values = [
  { title: "Excellence", desc: "We strive for excellence in everything we do, from code quality to client communication." },
  { title: "Innovation", desc: "We embrace new technologies and creative solutions to solve complex problems." },
  { title: "Transparency", desc: "We believe in open, honest communication throughout the entire project lifecycle." },
  { title: "Partnership", desc: "We treat your startup as our own, investing in your success as if it were ours." },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title="Punjab Tech | Team - Meet The Crew" description="Meet the expert team behind Punjab Tech. Our talented developers, designers, and strategists are ready to launch your startup." />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Meet The Crew
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              The People Behind Your Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of experts committed to launching your startup.
              We combine passion, expertise, and creativity to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl">Our Leadership</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Talented individuals who bring diverse expertise and shared vision.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-warm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                          <Twitter size={18} />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What Drives Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl">Our Values</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-8 text-center hover:shadow-warm transition-all"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <span className="font-heading text-2xl text-primary">{value.title[0]}</span>
                </div>
                <h3 className="font-heading text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-background p-12 md:p-16 border border-border"
          >
            <div className="max-w-2xl">
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Join Our Team
              </span>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">
                We're Always Looking for Talent
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you're passionate about building great products and want to work with a dynamic team, we'd love to hear from you.
              </p>
              <a
                href="mailto:akashdalla406@gmail.com?subject=Job%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-body font-semibold text-primary-foreground hover:shadow-warm transition-all"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
