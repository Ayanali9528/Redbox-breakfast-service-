import { useState } from "react";
import Menu from "./Menu";
import Plans from "./Plans";
import SpecialMeals from "./SpecialMeals";

type Tab = "local" | "tiffin";

const MenuToggle = () => {
  const [tab, setTab] = useState<Tab>("local");

  return (
    <section id="order" className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Choose Your Vibe</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            What are you hungry for?
          </h2>
        </div>

        <div className="mx-auto mb-10 max-w-md grid grid-cols-2 gap-2 p-1.5 bg-muted rounded-full border border-border shadow-soft">
          <button
            type="button"
            onClick={() => setTab("local")}
            aria-pressed={tab === "local"}
            className={`py-3 rounded-full text-sm sm:text-base font-bold transition-smooth ${
              tab === "local"
                ? "bg-warm text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Local Menu
          </button>
          <button
            type="button"
            onClick={() => setTab("tiffin")}
            aria-pressed={tab === "tiffin"}
            className={`py-3 rounded-full text-sm sm:text-base font-bold transition-smooth ${
              tab === "tiffin"
                ? "bg-warm text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Student Tiffin
          </button>
        </div>
      </div>

      <div className="transition-smooth">
        {tab === "local" ? (
          <SpecialMeals />
        ) : (
          <>
            <Menu />
            <Plans />
          </>
        )}
      </div>
    </section>
  );
};

export default MenuToggle;
