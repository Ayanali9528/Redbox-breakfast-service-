import { Sun } from "lucide-react";

const Navbar = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
    <nav className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-warm text-primary-foreground shadow-glow">
          <Sun className="w-5 h-5" />
        </span>
        Sunrise<span className="text-primary">Bites</span>
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
