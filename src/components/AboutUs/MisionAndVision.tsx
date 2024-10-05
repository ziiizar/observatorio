'use client'

import { useState } from "react";
import MisionAndVisionHero from "@/components/AboutUs/MisionAndVisionHero";
import MisionAndVisionAside from "@/components/AboutUs/MisionAndVisionAside";
import {Mision,Vision} from '@/Icons/AboutUs'

const MisionAndVision = () => {

  const [selectedSection, setSelectedSection] = useState<'mision' | 'vision'>('mision');

  const sections = {
    mision: {
      title: "Sobre Nuestra Misión.",
      description: "Facilitar el acceso a información tecnológica actualizada en los sectores de minería y energía, apoyando la toma de decisiones estratégicas y fomentando el desarrollo sostenible de Cuba. A través de la innovación y la investigación, aspiramos a ser una fuente confiable de conocimiento técnico y científico.",
      image: <Mision></Mision>,
    //   bgImage: Hospital,
    //   color: "blue"
    },
    vision: {
      title: "Sobre Nuestra Visión.",
      description: "Ser un referente nacional en la divulgación de avances tecnológicos en los sectores de energía y minería, promoviendo el desarrollo de políticas públicas, proyectos de investigación y la formación de una comunidad profesional altamente capacitada en Cuba..",
      image: <Vision></Vision>,
    //   bgImage: House,
    //   color: "orange"
    }
  };

  const currentSection = sections[selectedSection];

  return (
    <main className="flex h-screen  pe-8 gap-16 ">
        <MisionAndVisionHero currentSection={currentSection}></MisionAndVisionHero>
        <MisionAndVisionAside selectedSection={selectedSection} setSelectedSection={setSelectedSection}></MisionAndVisionAside>
        
      </main>
  )
}

export default MisionAndVision