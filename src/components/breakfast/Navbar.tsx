import logo from "@/assets/logo-redbox.png";

const Navbar = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
    <nav className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
        <img src={logo} alt="Red Dabba logo" className="w-10 h-10 rounded-full object-cover" />
        Red<span className="text-primary">Box</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#plans" className="hover:text-foreground transition-smooth">Plans</a>
        <a href="#menu" className="hover:text-foreground transition-smooth">Menu</a>
        <a href="#audience" className="hover:text-foreground transition-smooth">For You</a>
        <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
      </div>
      <a href="#plans" className="inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-smooth">
        Order Now
      </a>
    </nav>
  </header>
);

export default Navbar;
