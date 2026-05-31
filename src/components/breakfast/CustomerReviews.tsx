import { Star, Play } from "lucide-react";

// Admin: paste embed URLs here (YouTube Shorts / Instagram Reels / direct mp4)
const videos: { title: string; embedUrl?: string; poster?: string }[] = [
  {
    title: "Student Review — AMU Hostel",
    embedUrl: "",
    poster: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=1066&fit=crop",
  },
  {
    title: "Unboxing Red Dabba",
    embedUrl: "",
    poster: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=1066&fit=crop",
  },
  {
    title: "Morning Routine with Red Dabba",
    embedUrl: "",
    poster: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=1066&fit=crop",
  },
];

const photos = [
  {
    name: "Riya · AMU",
    quote: "Fresh, hot & on time every single morning. Total game-changer!",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=600&fit=crop",
  },
  {
    name: "Karan · Hostel 4",
    quote: "Ghar jaisa swaad. Mess se 10x better, seriously.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop",
  },
  {
    name: "Aman · PG",
    quote: "Packaging neat, taste perfect. Worth every rupee.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=600&fit=crop",
  },
  {
    name: "Neha · BTech",
    quote: "Daily 8 AM par garam paratha. Mera favorite!",
    img: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=600&h=600&fit=crop",
  },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 star rating">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

const CustomerReviews = () => (
  <section id="reviews" className="py-12 lg:py-16 bg-muted/40">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
          Customer Reviews & Feedback
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Real stories from our <span className="text-primary">morning tribe.</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          A curated gallery of student videos & photo reviews — updated by the Red Dabba team.
        </p>
      </div>

      {/* Video Feedback */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <Play className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-bold uppercase tracking-wider">Video Reviews</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-smooth"
            >
              <div className="aspect-[9/16] bg-foreground/5 relative overflow-hidden">
                {v.embedUrl ? (
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src={v.poster}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-14 h-14 rounded-full bg-background/90 grid place-items-center shadow-glow">
                        <Play className="w-6 h-6 fill-primary text-primary ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 text-center">
                <h4 className="font-display text-lg font-bold leading-tight">{v.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Feedback */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="text-sm font-bold uppercase tracking-wider">Photo Reviews</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {photos.map((p) => (
            <figure
              key={p.name}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`Photo review by ${p.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <figcaption className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
                <Stars />
                <p className="text-[11px] sm:text-sm text-foreground leading-snug line-clamp-3">
                  "{p.quote}"
                </p>
                <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground mt-auto">
                  — {p.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CustomerReviews;
