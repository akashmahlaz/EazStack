const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="font-heading text-xl font-bold">
          <span className="text-gradient">Build</span>
          <span className="text-foreground">Stack</span>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#services" className="transition-colors hover:text-primary">Services</a>
          <a href="#team" className="transition-colors hover:text-primary">Team</a>
          <a href="#process" className="transition-colors hover:text-primary">Process</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 BuildStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
