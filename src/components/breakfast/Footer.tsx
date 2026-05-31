import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const terms = [
  {
    title: "Order Timings",
    body: "Breakfast orders must be placed before 9:30 PM the previous night for next-day morning delivery between 7:00 AM and 9:30 AM. Specials & subscription meals follow the same daily cut-off.",
  },
  {
    title: "Delivery Area",
    body: "We currently deliver across Shahanshahbad, Jamalpur and nearby areas of Aligarh (AMU campus, hostels, PGs and offices within a 4 km radius). Areas outside this boundary may incur a small delivery fee or be unserviceable.",
  },
  {
    title: "Subscriptions",
    body: "Weekly and monthly plans can be paused, skipped or cancelled anytime via WhatsApp with at least 12 hours notice before the next delivery. Refunds for skipped days are credited to your next cycle.",
  },
  {
    title: "Food Quality",
    body: "Every box is prepared fresh each morning in a hygienic kitchen and sealed before dispatch. If you are not happy with your meal, message us within 30 minutes of delivery for a free replacement or refund.",
  },
];

const privacy = [
  {
    title: "What we collect",
    body: "We collect only the basic info you share over WhatsApp — your name, phone number, delivery address and order preferences. We do not collect payment card data; payments happen through trusted third-party processors.",
  },
  {
    title: "How we use it",
    body: "Your details are used solely to confirm, prepare and deliver your orders, and to share occasional updates about menu or offers. We never sell, rent or trade your personal information.",
  },
  {
    title: "Data security",
    body: "Order data is stored on secure servers and accessible only to authorised Red Dabba team members. Subscription history is retained for billing and support purposes.",
  },
  {
    title: "Your choices",
    body: "You can ask us to delete your account, stop marketing messages, or export your order history anytime by writing to us on WhatsApp at +91 95283 28181.",
  },
];

const Footer = () => {
  const [open, setOpen] = useState<null | "terms" | "privacy">(null);

  const content = open === "terms" ? terms : open === "privacy" ? privacy : [];
  const title = open === "terms" ? "Terms & Conditions" : "Privacy Policy";
  const desc =
    open === "terms"
      ? "Please read these terms carefully before placing an order with Red Dabba."
      : "How Red Dabba collects, uses and protects your personal information.";

  return (
    <>
      <footer className="border-t border-border mt-8">
        <div className="container py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-display text-xl font-bold">
              Red<span className="text-primary"> Dabba</span>
            </h4>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Subah ki sahi shuruaat — fresh, hygienic breakfast & desi meals delivered hot across Aligarh.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Explore</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#specials" className="hover:text-primary transition-smooth">Local Specials</a></li>
              <li><a href="#plans" className="hover:text-primary transition-smooth">Subscription Plans</a></li>
              <li><a href="#menu" className="hover:text-primary transition-smooth">Breakfast Menu</a></li>
              <li><a href="#feedback" className="hover:text-primary transition-smooth">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Contact</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shahanshahbad, Jamalpur, Aligarh</li>
              <li>
                <a href="https://wa.me/919528328181" className="hover:text-primary transition-smooth">
                  WhatsApp: +91 95283 28181
                </a>
              </li>
              <li>Mon–Sun · 6 AM – 11 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Red Dabba — Subah Ki Sahi Shuruaat!</div>
            <div className="flex gap-5">
              <button onClick={() => setOpen("terms")} className="hover:text-primary transition-smooth">
                Terms &amp; Conditions
              </button>
              <button onClick={() => setOpen("privacy")} className="hover:text-primary transition-smooth">
                Privacy Policy
              </button>
              <a href="#contact" className="hover:text-primary transition-smooth">Support</a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 mt-3">
            {content.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-foreground mb-1">{c.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-3 border-t border-border">
              Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })} · Questions? WhatsApp us at +91 95283 28181.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
