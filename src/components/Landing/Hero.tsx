import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 py-5 px-6 h-screen w-full justify-between">
      <HeroLeft></HeroLeft>
      <HeroRight></HeroRight>
    </section>
  );
};

export default Hero;
