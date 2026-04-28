import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/919999999999?text=Hi%20SunriseBites%2C%20I%27d%20like%20to%20order%20breakfast."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Order via WhatsApp"
    className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-fresh text-secondary-foreground pl-4 pr-5 py-3.5 rounded-full font-semibold shadow-fresh hover:scale-105 transition-smooth animate-pulse-ring"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">Order via WhatsApp</span>
  </a>
);

export default WhatsAppFab;
