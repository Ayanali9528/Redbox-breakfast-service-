import { Check, Star } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  original: string;
  price: string;
  unit: string;
  perks: string[];
  popular?: boolean;
  badge?: string;
  variant: "trial" | "weekly" | "monthly";
};

const plans: Plan[] = [
  {
    name: "3-Day Trial",
    tagline: "Taste before you commit.",
    original: "₹165",
    price: "₹147",
    unit: "₹49/box · 3 boxes",
    perks: ["Flat ₹49 per Double Unit Box", "Pick any 3 menu items", "Free first delivery", "Extra 10% off for new users"],
    badge: "New User -10%",
    variant: "trial",
  },
  {
    name: "Weekly Plan",
    tagline: "For students & office goers.",
    original: "₹385",
    price: "₹343",
    unit: "₹49/box · 7 boxes",
    perks: ["Flat ₹49 per Double Unit Box", "Rotate 7 menu items", "Skip-a-day flexibility", "Priority morning slot"],
    popular: true,
    badge: "Most Popular",
    variant: "weekly",
  },
  {
    name: "Monthly Plan",
    tagline: "Best value, full month sorted.",
    original: "₹1,650",
    price: "₹1,470",
    unit: "₹49/box · 30 boxes",
    perks: ["Flat ₹49 per Double Unit Box", "Full menu access", "Free Sunday special", "Dedicated WhatsApp support"],
    badge: "Save big",
    variant: "monthly",
  },
];

const Plans = () => (
  <section id="plans" className="py-20 lg:py-28">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Subscription Plans</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Pick your morning rhythm.</h2>
        <p className="text-muted-foreground mt-4">Cancel anytime. Switch plans anytime. Real food, real prices.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((p) => {
          const isPopular = p.popular;
          return (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 border transition-smooth hover:-translate-y-2 ${
                isPopular
                  ? "bg-foreground text-background border-foreground shadow-glow scale-[1.02]"
                  : "bg-card border-border shadow-soft hover:shadow-glow"
              }`}
            >
              {p.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                    isPopular ? "bg-warm text-primary-foreground" : "bg-secondary-soft text-secondary"
                  }`}
                >
                  {isPopular && <Star className="w-3 h-3 fill-current" />}
                  {p.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-2xl font-bold ${isPopular ? "text-background" : ""}`}>{p.name}</h3>
                <p className={`text-sm mt-1 ${isPopular ? "text-background/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-3">
                <span className={`font-display text-5xl font-black ${isPopular ? "text-primary-glow" : "text-primary"}`}>
                  {p.price}
                </span>
                <span className={`text-base line-through ${isPopular ? "text-background/50" : "text-muted-foreground"}`}>
                  {p.original}
                </span>
              </div>
              <div className={`text-xs uppercase tracking-wider mb-6 ${isPopular ? "text-background/60" : "text-muted-foreground"}`}>
                {p.unit}
              </div>

              <ul className="space-y-3 mb-8">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full flex-shrink-0 ${
                      isPopular ? "bg-primary-glow text-foreground" : "bg-secondary-soft text-secondary"
                    }`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className={isPopular ? "text-background/90" : "text-foreground"}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center w-full py-3.5 rounded-full font-semibold transition-smooth ${
                  isPopular
                    ? "bg-warm text-primary-foreground hover:opacity-90 shadow-glow"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Start {p.name.split(" ")[0]} →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Plans;
