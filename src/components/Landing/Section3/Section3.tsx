import Image from "next/image";
import Hombre from "@/public/Hombre.png";
import { Eficiencia, Renovable, Sostenible } from "@/Icons/Landing";
import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";

const Section3 = () => {
  return (
    <section className="flex gap-8 pe-16 h-screen w-full py-6">
      <div className="bg-burgundy-900 h-full w-1/2 rounded-e-[200px] flex place-content-center items-center shadow-shadowBlack">
        <Image alt="Hombre" src={Hombre}></Image>
      </div>

      <div className="flex flex-col gap-10 py-8 ps-4 h-full w-1/2">
        <h4 className="self-end font-black text-4xl text-right">
          Principales áreas de Investigación y Desarrollo.
        </h4>

        <article className="flex gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Eficiencia></Eficiencia>
            <strong className="place-content-center items-center flex">
              Eficiencia Energética.
            </strong>
          </div>
          <p className={cn("place-content-center items-center flex", zodiak.className)}>
            Incluye la optimización de sistemas energéticos, la mejora de la
            eficiencia de aparatos eléctricos y la implementación de soluciones
            de ahorro energético.
          </p>
        </article>
        <article className="flex gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Sostenible></Sostenible>
            <strong>Minería Sostenible.</strong>
          </div>

          <p className={cn("place-content-center items-center flex", zodiak.className)}>
            Incluye prácticas como la reducción de residuos, el reciclaje de
            materiales, la rehabilitación de áreas mineras.
          </p>
        </article>
        <article className="flex gap-10 place-content-center items-center">
          <div className="flex place-content-center items-center gap-4">
            <Renovable></Renovable>
            <strong>Energías Renovables.</strong>
          </div>

          <p className={cn("place-content-center items-center flex", zodiak.className)}>
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
