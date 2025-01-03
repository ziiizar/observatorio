import MisionAndVision from "@/components/AboutUs/MisionAndVision";
import WorkTeam from "@/components/AboutUs/WorkTeam";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { cn } from "@/lib/utils";
import { outfit, zodiak } from "@/styles/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Observatorio Tecnológico del MINEM',
  description: 'Conozca más sobre el Observatorio Tecnológico del Ministerio de Energía y Minas (MINEM) de Cuba, nuestra misión, visión y equipo de trabajo.',
  keywords: 'MINEM, observatorio tecnológico, misión, visión, equipo, Cuba',
  openGraph: {
    title: 'Sobre Nosotros | Observatorio Tecnológico del MINEM',
    description: 'Misión, visión y equipo del Observatorio Tecnológico del MINEM',
    url: 'https://observatorio.minem.cu/sobre-nosotros',
    siteName: 'Observatorio Tecnológico del MINEM',
    images: [
      {
        url: 'https://observatorio.minem.cu/sobre-nosotros-og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CU',
    type: 'website',
  },
}

const page = () => {
  return (
    <>
      <Header landing={false}></Header>
      <main
        className={cn(
          "bg-white flex flex-col min-h-screen gap-6 mb-10",
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
