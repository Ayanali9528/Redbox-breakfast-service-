import { ShieldCheck, Wallet, Zap } from "lucide-react";
import parathas from "@/assets/menu-parathas.jpg";
import eggs from "@/assets/menu-eggs.jpg";
import poori from "@/assets/menu-poori.jpg";
import idli from "@/assets/menu-idli.jpg";

const items = [
  { name: "Aloo Paratha with Chai", desc: "2 stuffed aloo parathas + hot masala chai", img: parathas, price: "₹49" },
  { name: "Paneer Paratha with Chai", desc: "2 paneer parathas + butter & chai", img: parathas, price: "₹49" },
  { name: "Oats with Milk", desc: "Wholesome oats + fresh fruits & milk", img: idli, price: "₹49" },
  { name: "Daliya with Milk", desc: "Warm daliya bowl + nuts & milk", img: idli, price: "₹49" },
  { name: "Sandwich", desc: "Grilled veg sandwich + tomato ketchup", img: poori, price: "₹49" },
  { name: "Omelette with Matri", desc: "Fluffy omelette + crispy matris", img: eggs, price: "₹49" },
  { name: "Plain Paratha + Anda Bhurji", desc: "2 parathas + spicy anda bhurji", img: eggs, price: "₹49" },
  { name: "Curd Toast with Chai", desc: "Curd-topped toast + masala chai", img: poori, price: "₹49" },
  { name: "Bread Pakora with Chai", desc: "2 bread pakoras + chutney & chai", img: poori, price: "₹49" },
  { name: "Boiled Egg, Banana & Milk", desc: "2 boiled eggs + banana + glass of milk", img: eggs, price: "₹49" },
  { name: "Anda in a Hole + Chai", desc: "Egg-in-bread classic + masala chai", img: eggs, price: "₹49" },
];

const usps = [
  { icon: ShieldCheck, title: "Hygienic Quality", desc: "Kitchen cleaned and sanitized daily. Sealed, tamper-proof boxes.", tone: "secondary" },
  { icon: Wallet, title: "Pocket-Friendly", desc: "Plans starting at ₹49/box. No hidden fees, no surge pricing.", tone: "primary" },
  { icon: Zap, title: "Lightning Fast", desc: "Hot breakfast at your door before 9 AM, every single morning.", tone: "secondary" },
];

const Menu = () => (
  <section id="menu" className="py-20 lg:py-28 bg-muted/40">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {usps.map(({ icon: Icon, title, desc, tone }) => (
          <div key={title} className="bg-card rounded-3xl p-7 border border-border shadow-soft">
            <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-5 ${
              tone === "primary" ? "bg-warm text-primary-foreground shadow-glow" : "bg-fresh text-secondary-foreground shadow-fresh"
            }`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Today's Menu</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">
            <span className="text-primary">Double Unit</span> Boxes — quantity you can feel.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">Every box packs <strong className="text-foreground">2 units</strong> — two parathas, two eggs, two pooris — because half-portions never fix hunger.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {items.map((item) => (
          <div key={item.name} className="group bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={item.img}
                alt={item.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-3 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-display text-sm sm:text-lg font-bold leading-tight">{item.name}</h4>
                <span className="text-primary font-bold text-sm sm:text-base shrink-0">{item.price}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
              <span className="inline-block mt-2 sm:mt-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-soft px-2 py-1 rounded-full">
                Double Unit
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Menu;
