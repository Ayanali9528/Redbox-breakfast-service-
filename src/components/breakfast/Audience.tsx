import { useState } from "react";
import { GraduationCap, Briefcase, Home } from "lucide-react";

const tabs = [
  {
    id: "students",
    icon: GraduationCap,
    label: "Hostel Students",
    headline: "No more skipping breakfast.",
    body: "Wake up late? Mess closed? We drop a hot Double Unit Box outside your hostel door — even on Sundays. Pocket-friendly plans built for student budgets.",
    bullets: ["From ₹49/day", "Skip-a-day flexibility", "Pay weekly or monthly"],
  },
  {
    id: "office",
    icon: Briefcase,
    label: "Office Professionals",
    headline: "Save 30 minutes every morning.",
    body: "Skip the rush. Get freshly-made breakfast delivered before your stand-up — so you start the day fueled, not frantic.",
    bullets: ["Delivered by 9 AM sharp", "Sealed, office-friendly packaging", "Invoice-ready billing"],
  },
  {
    id: "locals",
    icon: Home,
    label: "Local Residents",
    headline: "Homemade taste, zero kitchen mess.",
    body: "Family breakfast without the chopping, cooking and cleaning. Wholesome, hygienic and made fresh each morning in our sanitized kitchen.",
    bullets: ["Family-size plans on request", "No oil-heavy shortcuts", "Cancel anytime"],
  },
];

const Audience = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const Icon = current.icon;

  return (
    <section id="audience" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Who it's for</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Built for your morning.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {tabs.map((t) => {
            const TabIcon = t.icon;
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-smooth ${
                  isActive
                    ? "bg-foreground text-background shadow-soft"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-sunrise rounded-3xl p-8 md:p-12 border border-border shadow-soft">
          <div className="flex items-start gap-5 md:gap-7">
            <div className="hidden sm:grid place-items-center w-16 h-16 rounded-2xl bg-warm text-primary-foreground shadow-glow flex-shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">{current.headline}</h3>
              <p className="text-muted-foreground text-lg mb-6">{current.body}</p>
              <ul className="grid sm:grid-cols-3 gap-3">
                {current.bullets.map((b) => (
                  <li key={b} className="bg-card rounded-xl px-4 py-3 text-sm font-medium border border-border">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
