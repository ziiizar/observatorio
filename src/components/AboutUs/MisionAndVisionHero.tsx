import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";
import Image from "next/image";

const MisionAndVisionHero = ({ currentSection }) => {
  return (
    <section className="w-[66%] flex relative rounded-br-3xl rounded-tl-3xl rounded-bl-lg rounded-tr-lg place-content-end">
      {/* SVG Container - Ensure it's on top of everything */}
      <div className="absolute top-[15%]  z-50">
        <div className="shadow-shadowBlack p-4 rounded-full bg-white flex justify-center items-center size-[400px]">
          {currentSection.image}
        </div>
      </div>

      {/* Uncomment and use this block if you need a background image */}
      {/* 
      <div className="absolute inset-0">
        <Image
          src={currentSection.bgImage}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={cn("absolute inset-0 opacity-90", "")} />
      </div>
      */}

      {/* Content Section */}
      <div className="relative z-10 flex w-1/2 bg-black text-white">
        <div className="w-full flex flex-col place-content-center p-8">
          <h2 className="text-4xl font-bold mb-4">{currentSection.title}</h2>
          <p className={cn("mb-6", zodiak.className)}>
            {currentSection.description}
          </p>
          {/* <Button>Get Service</Button> */}
        </div>
      </div>

      {/* Right section */}
      <div className="flex w-1/2">
        <div className="w-1/2 bg-black"></div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default MisionAndVisionHero;
