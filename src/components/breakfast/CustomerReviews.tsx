import { useEffect, useState, type FormEvent } from "react";
import { Star, Quote, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";




type TextReview = { name: string; quote: string };

const seedReviews: TextReview[] = [
  { name: "Arjun · AMU Hostel", quote: "Red Dabba saved my semester. Hot breakfast at 8 AM sharp, no mess queue, no cold food. Game changer for hostel life." },
  { name: "Priya · PG Near Campus", quote: "As a working student, I never had time to cook. Red Dabba feels like home food delivered to my door. Dal chawal is my comfort fix." },
  { name: "Zaid · Hostel 3", quote: "Tried the 3-day trial and instantly upgraded to monthly. The packaging is neat, food is fresh, and the variety keeps it interesting." },
  { name: "Sana · BSc Student", quote: "Kadhi chawal tastes exactly like my mom makes it. I recommend Red Dabba to everyone in my hostel wing." },
  { name: "Rohit · Engineering", quote: "Affordable, tasty, and reliable. After 8 PM classes, knowing breakfast is sorted removes so much stress." },
  { name: "Fatima · AMU", quote: "The chole chawal on weekends is something I genuinely look forward to. Best decision I made this year." },
];

const reviewSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(60, "Name too long"),
  quote: z.string().trim().min(10, "Feedback must be at least 10 characters").max(400, "Feedback too long"),
});

const STORAGE_KEY = "reddabba_text_reviews_v1";
const VISIBLE_LIMIT = 10;

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 star rating">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

const CustomerReviews = () => {
  const [reviews, setReviews] = useState<TextReview[]>(seedReviews);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as TextReview[];
        if (Array.isArray(parsed) && parsed.length) setReviews(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const persist = (next: TextReview[]) => {
    setReviews(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = reviewSchema.safeParse({ name, quote });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const next = [{ name: result.data.name, quote: result.data.quote }, ...reviews];
    persist(next);
    setName("");
    setQuote("");
    toast.success("Thanks for your feedback!");
  };

  const isScrollable = reviews.length > VISIBLE_LIMIT;

  return (
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

        {/* Text Feedback */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
            <div className="flex items-center gap-2">
              <Quote className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-bold uppercase tracking-wider">Text Reviews</span>
              <span className="text-xs text-muted-foreground">({reviews.length})</span>
            </div>
            {isScrollable && (
              <span className="text-xs text-muted-foreground">
                Showing all — scroll to see more
              </span>
            )}
          </div>

          {/* Submit form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-soft mb-6"
          >
            <h3 className="font-display text-lg font-bold mb-1">Share your feedback</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Tell us about your Red Dabba experience.
            </p>
            <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (e.g. Riya · AMU)"
                maxLength={60}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              />
              <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Write your feedback..."
                maxLength={400}
                rows={2}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                required
              />
            </div>
            <div className="flex items-center justify-between mt-3 gap-3">
              <span className="text-[11px] text-muted-foreground">
                {quote.length}/400 characters
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-soft hover:shadow-glow transition-smooth"
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </button>
            </div>
          </form>

          <div
            className={
              isScrollable
                ? "max-h-[600px] overflow-y-auto pr-2 rounded-2xl"
                : ""
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-soft hover:shadow-glow transition-smooth flex flex-col"
                >
                  <Stars />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed mt-4 flex-1">
                    "{t.quote}"
                  </p>
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-5">
                    — {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
