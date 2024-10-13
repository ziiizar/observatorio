import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { outfit, zodiak } from "@/styles/fonts";
import Link from "next/link";

const DirectivoSection = () => {
  return (
    <>
      <div className="col-span-1 sm:col-span-2 lg:col-span-8 lg:row-span-1 rounded-xl flex justify-between bg-[url('/Geoportal.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 sm:gap-4 z-20 px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 place-content-center items-center backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>Geoportal</strong>
          <p className={cn("text-sm sm:text-base text-balance text-center", zodiak.className)}>Examina y conoce nuestras ubicaciones más importantes a lo largo de la isla.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.home}>Explorar</Link></Button>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-1 rounded-xl flex justify-between bg-[url('/DSpace.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 z-20 p-4 sm:p-6 place-content-end backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>DSpace</strong>
          <p className={cn(zodiak.className, "text-xs sm:text-sm")}>Visita el Repositorio Institucional de la UCLV.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.home}>Explorar</Link></Button>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:row-span-1 rounded-xl flex justify-between bg-[url('/Boletines.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 z-20 p-4 sm:p-6 place-content-end backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>Boletines</strong>
          <p className={cn(zodiak.className, "text-xs sm:text-sm")}>Mantente informado con nuestros boletines de innovación. Descarga los últimos informes y sigue las tendencias tecnológicas más relevantes.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.boletines}>Explorar</Link></Button>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:row-span-1 rounded-xl flex justify-between bg-[url('/VIVO-azul.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 z-20 p-4 sm:p-6 place-content-end backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>VIVO</strong>
          <p className={cn(zodiak.className, "text-xs sm:text-sm")}>Visita el Sistema de Información y Difusión de la Investigación de la UCLV.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.home}>Explorar</Link></Button>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:row-span-1 rounded-xl flex place-content-center items-center bg-[url('/sobre-nosotros.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 z-20 p-4 sm:p-6 place-content-end backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>Sobre Nosotros</strong>
          <p className={cn(zodiak.className, "text-xs sm:text-sm")}>Conoce más sobre nuestra misión, visión y el equipo que impulsa el desarrollo tecnológico en los sectores de energía y minería de Cuba.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.aboutUs}>Explorar</Link></Button>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:row-span-1 rounded-xl flex place-content-center items-center bg-[url('/Servicios.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="flex flex-col gap-2 z-20 p-4 sm:p-6 place-content-end backdrop-blur-sm w-full h-full rounded-xl">
          <strong className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", outfit.className)}>Servicios</strong>
          <p className={cn(zodiak.className, "text-xs sm:text-sm")}>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
          <Button className="bg-white text-black w-28 shadow-shadowWhite"><Link href={routes.services}>Explorar</Link></Button>
        </div>
      </div>
    </>
  );
};

export default DirectivoSection;