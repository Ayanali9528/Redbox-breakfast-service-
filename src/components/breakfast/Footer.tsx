const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div>© {new Date().getFullYear()} SunriseBites. Fresh mornings, delivered.</div>
      <div className="flex gap-5">
        <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
        <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
        <a href="#contact" className="hover:text-foreground transition-smooth">Support</a>
      </div>
    </div>
  </footer>
);

export default Footer;
