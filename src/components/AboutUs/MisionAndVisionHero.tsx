import { sectionsType } from "@/components/AboutUs/MisionAndVision";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";

interface MisionAndVisionHeroProps {
  currentSection: sectionsType;
}

const MisionAndVisionHero: React.FC<MisionAndVisionHeroProps> = ({ currentSection }) => {
  return (
    <section className="w-[66%] flex relative rounded-br-3xl rounded-tl-3xl rounded-bl-lg rounded-tr-lg place-content-end">
      <div className="absolute top-[15%] z-50">
        <div className="shadow-shadowBlack p-4 rounded-full bg-white flex justify-center items-center size-[400px]">
          {currentSection.image}
        </div>
      </div>

      <div className="relative z-10 flex w-1/2 bg-black text-white">
        <div className="w-full flex flex-col place-content-center p-8">
          <h2 className="text-4xl font-bold mb-4">{currentSection.title}</h2>
          <p className={cn("mb-6", zodiak.className)}>
            {currentSection.description}
          </p>
        </div>
      </div>

      <div className="flex w-1/2">
        <div className="w-1/2 bg-black"></div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default MisionAndVisionHero;
