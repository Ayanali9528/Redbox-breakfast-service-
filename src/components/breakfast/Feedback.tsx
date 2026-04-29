import { useEffect, useState } from "react";
import { Star, Send, Quote } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Review = {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
};

const seed: Review[] = [
  { id: "s1", name: "Aarav (Hostel)", rating: 5, message: "Daily 8 AM par garam paratha milta hai. Mess se 10x better!", date: "2 days ago" },
  { id: "s2", name: "Priya (Office)", rating: 5, message: "Packaging neat, taste ekdum ghar jaisa. Worth every rupee.", date: "5 days ago" },
  { id: "s3", name: "Rahul", rating: 4, message: "Oats bowl lajawab. Variety thodi aur badhao please!", date: "1 week ago" },
];

const STORAGE_KEY = "redbox_reviews_v1";

const Feedback = () => {
  const [reviews, setReviews] = useState<Review[]>(seed);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        if (Array.isArray(parsed) && parsed.length) setReviews([...parsed, ...seed]);
      } catch {}
    }
  }, []);

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || rating === 0) {
      toast({ title: "Add your name, rating & message", variant: "destructive" });
      return;
    }
    const next: Review = {
      id: crypto.randomUUID(),
      name: name.trim(),
      rating,
      message: message.trim(),
      date: "Just now",
    };
    const userReviews = reviews.filter((r) => !seed.find((s) => s.id === r.id));
    const updated = [next, ...userReviews];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setReviews([next, ...reviews]);
    setName("");
    setMessage("");
    setRating(0);
    toast({ title: "Thanks for your feedback! 🧡" });
  };

  return (
    <section id="feedback" className="py-20 lg:py-28 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Feedback & Ratings</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">What our morning tribe says.</h2>
          <div className="mt-5 inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 shadow-soft">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i <= Math.round(avg) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="font-bold">{avg.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">· {reviews.length} reviews</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-2 bg-card rounded-3xl p-7 border border-border shadow-soft h-fit"
          >
            <h3 className="font-display text-2xl font-bold mb-1">Share your experience</h3>
            <p className="text-sm text-muted-foreground mb-6">Help others find their perfect breakfast.</p>

            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ayush"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 mb-5 outline-none focus:border-primary transition-smooth"
            />

            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your rating</label>
            <div className="flex gap-1.5 mb-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-smooth hover:scale-110"
                  aria-label={`${i} star`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      i <= (hover || rating) ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="What did you love? What can we improve?"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 mb-5 outline-none focus:border-primary transition-smooth resize-none"
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-warm text-primary-foreground py-3.5 rounded-full font-semibold shadow-glow hover:opacity-90 transition-smooth"
            >
              <Send className="w-4 h-4" />
              Submit Feedback
            </button>
          </form>

          {/* Reviews list */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 content-start">
            {reviews.slice(0, 6).map((r) => (
              <div
                key={r.id}
                className="bg-card rounded-2xl p-5 border border-border shadow-soft hover:shadow-glow transition-smooth"
              >
                <Quote className="w-6 h-6 text-secondary mb-3 opacity-60" />
                <p className="text-sm text-foreground leading-relaxed mb-4">"{r.message}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i <= r.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
