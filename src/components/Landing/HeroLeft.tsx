import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";

const HeroLeft = () => {
  return (
    <div className="w-1/2 h-full mt-10 flex flex-col place-content-center gap-6">
    <h4 className="text-2xl font-bold">Bienvenido a nuestro:</h4>
    <h3 className="text-6xl font-[800]">Obser<span className="ml-[4px]">v</span>atorio Tecnológico</h3>
    <p className={cn("text-lg", zodiak.className)}>
      Monitoreamos las tendencias y avances tecnológicos para impulsar
      el desarrollo energético y minero en Cuba.
    </p>
    <Button className="bg-burgundy-900 w-28 text-white shadow-shadowRed">
      Explorar
    </Button>
  </div>
  )
}

export default HeroLeft