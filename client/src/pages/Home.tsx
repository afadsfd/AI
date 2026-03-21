import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemoSection from "@/components/LiveDemoSection";
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
        <ProductSection />
        <FeaturesSection />
        <LiveDemoSection />
        <HowItWorksSection />
        <ScenariosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
