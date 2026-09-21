import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import teamCeo from "@/assets/team-ceo.png";
import teamDesigner from "@/assets/sahil.png";
import teamDev from "@/assets/satinder.png";
import teamMarketing from "@/assets/vickeramjit-singh.png";
import teamConsultant from "@/assets/arshdeep.png";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  desc: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const members: TeamMember[] = [
  { 
    name: "Akash Mahla", 
    role: "Founder & CEO", 
    img: teamCeo, 
    desc: "Exceptional Software Engineering, Product Engineering & 5 years Startup ecosystem experience.",
    linkedin: "https://linkedin.com/in/akashmahlax",
    twitter: "https://x.com/akashmahlax",
    github: "https://github.com/akashmahlaz?tab=repositories"
  },
  { 
    name: "Sahil Dutt", 
    role: "Lead Designer & frontend developer", 
    img: teamDesigner, 
    desc: "Crafts pixel-perfect brands and digital experiences.",
    linkedin: "https://www.linkedin.com/in/sahildutt/",
    github: "https://sahilduttpb06.github.io/sahilportfolio"
  },
  { name: "Satinder Singh", role: "iOS & Android Developer", img: teamDev, desc: "Full-stack architect building scalable products." },
  { name: "Vickeramjit Singh", role: "Business Analyst & AI Product Engineer", img: teamMarketing, desc: "Growth strategist who scales brands from zero." },
  { name: "Arshdeep Singh", role: "Business Consultant", img: teamConsultant, desc: "Guides startups through funding and strategy." },
];

const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Meet The Crew
          </span>
          <h2 className="font-heading text-4xl md:text-5xl">
            The People Behind Your Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A diverse team of experts committed to launching your startup.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.desc}</p>
                <div className="mt-4 flex gap-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
