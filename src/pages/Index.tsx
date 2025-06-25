
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExamplesSection from "@/components/ExamplesSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
