const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto mb-10 max-w-4xl px-6 text-center">
        <p className="font-heading text-xl text-foreground">A clearer way to buy digital services</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Every proposal defines deliverables, milestones, ownership, exclusions, and support before work starts. Prices shown are starting investments in USD unless a government fee requires INR.</p>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="font-heading text-xl text-foreground">
          Punjab<span className="text-primary">Tech</span>
        </div>
        <div className="flex flex-wrap items-center gap-8 text-sm">
          <a href="/services" className="text-muted-foreground transition-colors hover:text-foreground">Services</a>
          <a href="/team" className="text-muted-foreground transition-colors hover:text-foreground">Team</a>
          <a href="/process" className="text-muted-foreground transition-colors hover:text-foreground">Process</a>
          <a href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="mailto:akashdalla406@gmail.com" className="hover:text-foreground">akashdalla406@gmail.com</a>
          <a href="https://wa.me/917814002784" className="hover:text-foreground">+91 78140 02784</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Punjab Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
