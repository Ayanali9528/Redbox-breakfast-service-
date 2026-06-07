import { ShoppingBag } from "lucide-react";
import rajma from "@/assets/menu/rajma-chawal.jpg.asset.json";
import dal from "@/assets/menu/dal-chawal.jpg.asset.json";
import kadhi from "@/assets/menu/kadhi-chawal.jpg.asset.json";
import chole from "@/assets/menu/chole-chawal.jpg.asset.json";

const meals = [
  { name: "Rajma Chawal", tag: "Comfort Food Special", desc: "Slow-cooked kidney beans in rich tomato gravy with steamed basmati rice.", price: "₹49", img: rajma.url },
  { name: "Dal Chawal", tag: "Homestyle Simple", desc: "Tadka dal with a dollop of ghee, served over fluffy white rice.", price: "₹49", img: dal.url },
  { name: "Kadhi Chawal", tag: "Authentic Desi Taste", desc: "Tangy yogurt kadhi with crispy pakoras, paired with basmati rice.", price: "₹49", img: kadhi.url },
  { name: "Chole Chawal", tag: "Spicy & Flavorful", desc: "Punjabi-style chickpea masala with onion, lemon & steamed rice.", price: "₹49", img: chole.url },
];

const SpecialMeals = () => (
  <section id="specials" className="py-12 lg:py-16 bg-sunrise">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Local Specials (Single Meals)</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Ghar jaisa <span className="text-primary">desi khaana</span>, single plate.
        </h2>
        <p className="text-muted-foreground mt-4">No subscription needed — order any single meal, delivered hot.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {meals.map((m) => (
          <div
            key={m.name}
            className="group bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1 flex flex-col"
          >
            <div className="aspect-square overflow-hidden bg-muted relative">
              <img
                src={m.img}
                alt={m.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              <span className="absolute top-3 left-3 bg-warm text-primary-foreground text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-glow">
                {m.price}
              </span>
            </div>
            <div className="p-3 sm:p-5 flex flex-col flex-1">
              <h4 className="font-display text-base sm:text-xl font-bold leading-tight">{m.name}</h4>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-secondary mt-1">
                {m.tag}
              </span>
              <p className="text-[11px] sm:text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{m.desc}</p>
              <a
                href={`https://wa.me/919528328181?text=${encodeURIComponent(
                  `Hi Red Dabba, I'd like to order ${m.name} (${m.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-1.5 bg-foreground text-background py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialMeals;
