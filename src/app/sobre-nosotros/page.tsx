import MisionAndVision from "@/components/AboutUs/MisionAndVision";
import WorkTeam from "@/components/AboutUs/WorkTeam";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { cn } from "@/lib/utils";
import { outfit, zodiak } from "@/styles/fonts";

const page = () => {
  return (
    <>
      <Header></Header>
      <main
        className={cn(
          "bg-white flex flex-col min-h-screen gap-6",
          outfit.className
        )}
      >
        <section className="w-full h-screen flex  place-content-center items-center pt-[17vh] pb-6 px-4">
          <div className="backgroundAboutUs  flex  place-content-center items-center rounded-xl w-full h-full">
            <div className="flex flex-col gap-4 w-[450px] text-white">
              <h3 className="self-center font-medium text-4xl">
                Quienes Somos?
              </h3>
              <p className={cn("text-center", zodiak.className)}>
                El Observatorio Tecnológico del Ministerio de Energía y Minas
                (MINEM) es una plataforma dedicada a monitorear, analizar y
                divulgar las innovaciones tecnológicas en los sectores de
                minería y energía en Cuba. Nuestro objetivo es proporcionar a
                investigadores, profesionales del sector y entidades
                gubernamentales acceso a información actualizada sobre los
                avances más relevantes en estas áreas.
              </p>
            </div>
          </div>
        </section>

        <MisionAndVision></MisionAndVision>
        <WorkTeam></WorkTeam>
      </main>

      <Footer></Footer>
    </>
  );
};

export default page;
