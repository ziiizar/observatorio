import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";

const HeroLeft = () => {
  return (
    <div className="w-full lg:w-1/2 h-full mt-10 flex flex-col place-content-center gap-4 md:gap-6 ">
      <h4 className="text-[clamp(1rem,3vw,1.5rem)] font-bold">
        Bienvenido a nuestro:
      </h4>
      <h3 className="text-[clamp(2rem,5vw,3.75rem)] font-[800] leading-tight">
        Obser<span className="ml-[0.5vw]">v</span>atorio Tecnológico
      </h3>
      <p className={cn("text-[clamp(1rem,2vw,1.125rem)]", zodiak.className)}>
        Monitoreamos las tendencias y avances tecnológicos para impulsar
        el desarrollo energético y minero en Cuba.
      </p>
      <Button className="bg-burgundy-900 w-28 text-white shadow-shadowRed text-[clamp(0.875rem,1.5vw,1rem)]">
        Explorar
      </Button>
    </div>
  )
}

export default HeroLeft