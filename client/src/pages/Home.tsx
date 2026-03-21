import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ScenariosSection from "@/components/ScenariosSection";
import DownloadSection from "@/components/DownloadSection";
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
        <LiveDemoSection />
        <ScenariosSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
