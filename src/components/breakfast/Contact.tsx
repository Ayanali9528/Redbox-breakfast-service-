import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 lg:py-28 bg-fresh text-secondary-foreground">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs font-semibold tracking-widest uppercase opacity-80">Get in touch</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">Tomorrow's breakfast is one message away.</h2>
        <p className="opacity-90 max-w-md mb-8">Drop us a WhatsApp with your area & plan choice. We'll confirm in minutes and start delivery the very next morning.</p>

        <a
          href="https://wa.me/919528328181?text=Hi%20Red%20Dabba%2C%20I%27d%20like%20to%20start%20a%20breakfast%20plan."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-full font-bold shadow-soft hover:scale-[1.02] transition-smooth"
        >
          <MessageCircle className="w-5 h-5 text-secondary" />
          Order on WhatsApp
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Phone, label: "Call us", value: "+91 95283 28181" },
          { icon: Mail, label: "Email", value: "Ayanali753366@gmail.com" },
          { icon: MapPin, label: "Location", value: "Shahanshahbad, Jamalpur, Aligarh" },
          { icon: MessageCircle, label: "WhatsApp", value: "+91 95283 28181" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-background/10 backdrop-blur rounded-2xl p-5 border border-background/20">
            <Icon className="w-5 h-5 mb-3 opacity-90" />
            <div className="text-xs uppercase tracking-wider opacity-70">{label}</div>
            <div className="font-semibold mt-1">{value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
