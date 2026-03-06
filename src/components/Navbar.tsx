import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Services", "Team", "Process", "Contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-gradient">Build</span>
          <span className="text-foreground">Stack</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-glow"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
