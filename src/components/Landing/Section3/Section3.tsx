import Image from "next/image";
import Hombre from "@/public/Hombre.webp";
import { Eficiencia, Renovable, Sostenible } from "@/Icons/Landing";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";

const Section3 = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 lg:pe-16 min-h-screen w-full py-6">
      <div className="bg-burgundy-900 h-[300px] lg:h-full w-full lg:w-1/2 rounded-[50px] lg:rounded-e-[200px] flex place-content-center items-center shadow-shadowBlack">
        <Image 
          alt="Hombre" 
          src={Hombre} 
          className="w-auto h-full object-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-6 lg:gap-10 py-4 lg:py-8 lg:ps-4 h-full w-full lg:w-1/2">
        <h4 className="text-center lg:text-right font-black text-2xl lg:text-4xl">
          Principales áreas de Investigación y Desarrollo.
        </h4>

        <article className="flex flex-col lg:flex-row gap-4 lg:gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Eficiencia />
            <strong className="text-center lg:text-left">
              Eficiencia Energética.
            </strong>
          </div>
          <p className={cn("text-center lg:text-left text-sm lg:text-base", zodiak.className)}>
            Incluye la optimización de sistemas energéticos, la mejora de la
            eficiencia de aparatos eléctricos y la implementación de soluciones
            de ahorro energético.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Sostenible />
            <strong className="text-center lg:text-left">Minería Sostenible.</strong>
          </div>
          <p className={cn("text-center lg:text-left text-sm lg:text-base", zodiak.className)}>
            Incluye prácticas como la reducción de residuos, el reciclaje de
            materiales, la rehabilitación de áreas mineras.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Renovable />
            <strong className="text-center lg:text-left">Energías Renovables.</strong>
          </div>
          <p className={cn("text-center lg:text-left text-sm lg:text-base", zodiak.className)}>
            Incluye la promoción del uso de energías limpias y sostenibles para
            reducir la dependencia de combustibles fósiles y minimizar el
            impacto ambiental.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Section3;