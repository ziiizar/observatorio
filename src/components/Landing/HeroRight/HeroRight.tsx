import Button from "@/components/ui/Button";
import { SearchBook } from "@/Icons/Landing";
import AuthBox from "@/components/global/AuthBox";
import PowerPointCard from "./PowerPointCard";
import { getAuth } from "@/services/getAuth";
import { Rectangulo } from "@/Icons/Rectangulo";
import WhiteCircle from "@/Icons/WhiteCircle";
import MovingElipses from "./MovingElipses";

const HeroRight = async () => {
  const user = await getAuth()
  return (
    <div className="rounded-lg bg-burgundy-950 w-full max-w-[550px] relative overflow-hidden">
      <MovingElipses />
      <div className="flex flex-col gap-4 h-full w-full glass px-2 sm:px-4 py-4">
        <div className="w-full self-end">
          <AuthBox user={user} />
        </div>
        <div className="flex px-2 sm:px-6 pb-4 gap-2 flex-1 relative">
          <div className="absolute top-[10%] right-[25%] h-4/5 w-1/2">
            <Rectangulo />
          </div>
          <div className="flex flex-col justify-between pb-8 w-1/2">
            <article className="bg-black rounded-xl w-full h-36 flex flex-col justify-between px-2 sm:px-4 py-2 items-center text-white z-10 shadow-shadowBlack">
              <strong className="text-[clamp(1.5rem,4vw,2rem)]">+200</strong>
              <p className="text-center text-[clamp(0.75rem,2vw,1rem)]">Observatorios Activos</p>
              <div className="w-full flex gap-2 sm:gap-4 place-content-center items-center">
                <div className="flex relative">
                  <WhiteCircle className=""/>
                  <WhiteCircle className="-ml-6 sm:-ml-8" />
                  <WhiteCircle className="-ml-6 sm:-ml-8" />
                </div>
                <Button className="text-black px-2 sm:px-4 hover:bg-burgundy-900">Únete</Button>
              </div>
            </article>
            <article className="bg-black rounded-xl size-16 sm:size-20 self-center flex place-content-center items-center z-10 shadow-shadowBlack">
              <SearchBook />
            </article>
          </div>
          <div className="flex items-end w-1/2">
            <article className="bg-black rounded-xl w-full flex flex-col px-2 py-4 items-center text-white gap-2 sm:gap-3 z-10 shadow-shadowBlack">
              <strong className="text-[clamp(0.875rem,2.5vw,1.125rem)]">Garantizamos</strong>
              <PowerPointCard text="Observaciones Actualizadas" />
              <PowerPointCard text="Innovación y Desarrollo" />
              <PowerPointCard text="Información Confiable" />
              <PowerPointCard text="Accesibilidad Universal" />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;