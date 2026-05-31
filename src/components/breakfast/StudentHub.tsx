import { Play, Heart, Camera } from "lucide-react";

type Item =
  | { type: "video"; name: "string"; caption: string; thumb: string; name_: string }
  | { type: "photo"; caption: string; thumb: string; name_: string };

const reels = [
  {
    type: "video" as const,
    name_: "Ananya · AMU",
    caption: "POV: 8 AM aur garam paratha door pe 🔥",
    thumb: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=900&fit=crop",
  },
  {
    type: "video" as const,
    name_: "Vivek · Hostel 4",
    caption: "Mess vs Red Dabba — no contest!",
    thumb: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=900&fit=crop",
  },
  {
    type: "video" as const,
    name_: "Sneha · PG",
    caption: "Daily unboxing — chai zaroori hai ☕",
    thumb: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=900&fit=crop",
  },
  {
    type: "video" as const,
    name_: "Mohit · BTech",
    caption: "Bread pakoda > class attendance",
    thumb: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&h=900&fit=crop",
  },
];

const photos = [
  { caption: "Fresh aloo paratha box", name_: "Riya", thumb: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=600&fit=crop" },
  { caption: "Sunday sandwich combo", name_: "Karan", thumb: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop" },
  { caption: "Omelette bread — chef's kiss", name_: "Aman", thumb: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=600&fit=crop" },
  { caption: "Hostel breakfast goals", name_: "Neha", thumb: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=600&h=600&fit=crop" },
];

const StudentHub = () => (
  <section id="student-hub" className="py-20 lg:py-28 bg-sunrise">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Student Hub</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Real reels. Real <span className="text-primary">desi breakfasts.</span>
        </h2>
        <p className="text-muted-foreground mt-4">Tagged by AMU hostlers, PG warriors & early-morning office goers.</p>
      </div>

      {/* Reels row */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Play className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-bold uppercase tracking-wider">Reels from campus</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide">
          {reels.map((r, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[160px] sm:w-[200px] aspect-[9/16] rounded-2xl overflow-hidden relative group cursor-pointer shadow-soft hover:shadow-glow transition-smooth"
            >
              <img src={r.thumb} alt={r.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 grid place-items-center shadow-glow">
                <Play className="w-4 h-4 fill-primary text-primary ml-0.5" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-background">
                <p className="text-xs font-semibold leading-snug line-clamp-2">{r.caption}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] opacity-80">{r.name_}</span>
                  <span className="inline-flex items-center gap-1 text-[10px]">
                    <Heart className="w-3 h-3 fill-primary text-primary" /> 2.{i + 1}k
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photos grid */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Camera className="w-4 h-4 text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Tagged photos</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth">
              <img src={p.thumb} alt={p.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-background translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-xs font-semibold leading-snug">{p.caption}</p>
                <span className="text-[10px] opacity-80">— {p.name_}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://wa.me/919528328181?text=Hi%20Red%20Dabba%2C%20I%27d%20like%20to%20share%20my%20feedback%20reel."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          <Camera className="w-4 h-4" />
          Share your reel
        </a>
      </div>
    </div>
  </section>
);

export default StudentHub;
