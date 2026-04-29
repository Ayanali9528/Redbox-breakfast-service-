import Navbar from "@/components/breakfast/Navbar";
import Hero from "@/components/breakfast/Hero";
import Plans from "@/components/breakfast/Plans";
import Menu from "@/components/breakfast/Menu";
import Audience from "@/components/breakfast/Audience";
import Feedback from "@/components/breakfast/Feedback";
import Contact from "@/components/breakfast/Contact";
import WhatsAppFab from "@/components/breakfast/WhatsAppFab";
import Footer from "@/components/breakfast/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <Plans />
      <Menu />
      <Audience />
      <Feedback />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Index;
