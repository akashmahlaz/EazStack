import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-heading text-2xl tracking-tight text-foreground">
          Punjab<span className="text-primary">Tech</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/app-development"
            className="text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            App Development
          </a>
          <a
            href="/contact"
            className="rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-warm"
          >
            Get Started
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/app-development"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-primary hover:text-foreground"
            >
              App Development
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-gradient-warm px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
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