import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Hero from "@/components/Landing/Hero";
import Section2 from "@/components/Landing/Section2/Section2";
import Section3 from "@/components/Landing/Section3/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Observatorio Tecnológico del MINEM | Inicio',
  description: 'Plataforma dedicada a monitorear, analizar y divulgar las innovaciones tecnológicas en los sectores de minería y energía en Cuba.',
  keywords: 'observatorio tecnológico, MINEM, minería, energía, Cuba, innovación',
  openGraph: {
    title: 'Observatorio Tecnológico del MINEM',
    description: 'Innovaciones tecnológicas en minería y energía en Cuba',
    url: 'https://observatorio.minem.cu',
    siteName: 'Observatorio Tecnológico del MINEM',
    images: [
      {
        url: 'https://observatorio.minem.cu/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CU',
    type: 'website',
  },
}


export default async function Home() {
  const landing = true;
  return (
    <>
      <Header landing={landing}></Header>
      <main className="bg-white flex flex-col min-h-screen gap-6">
        <Hero></Hero>
        <Section2></Section2>
        <Section3></Section3>
      </main>

      <Footer></Footer>
    </>
  );
}
