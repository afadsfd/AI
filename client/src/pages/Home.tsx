import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";

import ScenariosSection from "@/components/ScenariosSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsShowcase />
        <FeaturesSection />
        <HowItWorksSection />
        <ScenariosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
