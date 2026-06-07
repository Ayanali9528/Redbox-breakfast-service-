import Navbar from "@/components/breakfast/Navbar";
import Hero from "@/components/breakfast/Hero";
import MenuToggle from "@/components/breakfast/MenuToggle";
import CustomerReviews from "@/components/breakfast/CustomerReviews";
import WhatsAppFab from "@/components/breakfast/WhatsAppFab";
import Footer from "@/components/breakfast/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
    <Navbar />
    <main className="flex-1 flex flex-col">
      <section className="w-full"><Hero /></section>
      <section className="w-full"><MenuToggle /></section>
      <section className="w-full"><CustomerReviews /></section>
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Index;
