import { Fragment } from "react/jsx-runtime";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ExamplesSection from "./ExamplesSection";
import TokenomicsSection from "./TokenomicsSection";
import RoadmapSection from "./RoadmapSection";
import VestingSection from "./VestingSection";

const Index = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <VestingSection />
    </Fragment>
  );
};

export default Index;
