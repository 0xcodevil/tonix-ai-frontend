import { Fragment } from "react/jsx-runtime";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ExamplesSection from "./ExamplesSection";
import TokenomicsSection from "./TokenomicsSection";
import RoadmapSection from "./RoadmapSection";

const Index = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
      <TokenomicsSection />
      <RoadmapSection />
    </Fragment>
  );
};

export default Index;
