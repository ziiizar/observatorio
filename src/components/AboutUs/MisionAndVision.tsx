'use client'

import { useState } from "react";
import MisionAndVisionHero from "@/components/AboutUs/MisionAndVisionHero";
import MisionAndVisionAside from "@/components/AboutUs/MisionAndVisionAside";
import { Mision, Vision } from '@/Icons/AboutUs';

export type sectionsType = {
  title: string;
  description: string;
  image: JSX.Element;
  // Opcional: descomenta si deseas usar estos atributos
  // bgImage?: JSX.Element;
  // color?: string;
};

const MisionAndVision = () => {
  const [selectedSection, setSelectedSection] = useState<'mision' | 'vision'>('mision');

  const sections: Record<'mision' | 'vision', sectionsType> = {
    mision: {
      title: "Sobre Nuestra Misión.",
      description: "Facilitar el acceso a información tecnológica actualizada en los sectores de minería y energía, apoyando la toma de decisiones estratégicas y fomentando el desarrollo sostenible de Cuba. A través de la innovación y la investigación, aspiramos a ser una fuente confiable de conocimiento técnico y científico.",
      image: <Mision />,
    },
    vision: {
      title: "Sobre Nuestra Visión.",
      description: "Ser un referente nacional en la divulgación de avances tecnológicos en los sectores de energía y minería, promoviendo el desarrollo de políticas públicas, proyectos de investigación y la formación de una comunidad profesional altamente capacitada en Cuba.",
      image: <Vision />,
    }
  };

  const currentSection = sections[selectedSection];

  return (
    <main className="flex h-screen pe-8 gap-16">
      <MisionAndVisionHero currentSection={currentSection} />
      <MisionAndVisionAside selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
    </main>
  );
};

export default MisionAndVision;
