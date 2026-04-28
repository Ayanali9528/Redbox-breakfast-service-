import { ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import hero from "@/assets/hero-breakfast.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-sunrise">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
      <div className="space-y-7">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-soft text-secondary text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" /> First-time? Get 10% off the trial
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-foreground">
          Fresh, hygienic & <span className="text-primary">pocket-friendly</span> breakfast.
          <span className="block text-secondary">Delivered fast.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Wake up to homemade goodness — wholesome <strong className="text-foreground">Double Unit Boxes</strong> of parathas, eggs, idlis & more, dropped at your door before your day begins.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#plans" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-warm text-primary-foreground font-semibold shadow-glow hover:translate-y-[-2px] transition-smooth">
            See the Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
          </a>
          <a href="#menu" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card border border-border font-semibold hover:bg-muted transition-smooth">
            View Menu
          </a>
        </div>
        <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> Kitchen sanitized daily</span>
          <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Delivered by 9 AM</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 bg-warm rounded-[3rem] opacity-20 blur-2xl" aria-hidden />
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow border border-border/60 animate-float">
          <img src={hero} alt="Fresh paratha and eggs breakfast plate" width={1920} height={1080} className="w-full h-auto" />
        </div>
        <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl px-5 py-3 shadow-soft border border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary-soft grid place-items-center">
            <span className="text-secondary font-bold">4.9</span>
          </div>
          <div className="text-xs">
            <div className="font-semibold">2,400+ happy mornings</div>
            <div className="text-muted-foreground">Rated by students & pros</div>
          </div>
        </div>
        <div className="absolute -top-4 -right-3 bg-warm text-primary-foreground rounded-2xl px-4 py-3 shadow-glow rotate-3">
          <div className="text-[10px] uppercase tracking-wider opacity-90">Starts at</div>
          <div className="font-display text-2xl font-bold leading-none">₹49<span className="text-xs font-medium">/box</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
