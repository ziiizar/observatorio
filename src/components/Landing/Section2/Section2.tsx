"use client";

import Button from "@/components/ui/Button";
import Paneles from "@/public/Paneles.png";
import Petroleo from "@/public/Petroleo.png";
import Panel from "@/public/Panel.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="h-screen grid grid-cols-12 grid-rows-2 w-full p-6 gap-6 bg-black">
      <div className="row-span-1 col-span-8 rounded-xl flex justify-between bg-[url('/Servicios.png')] bg-shark-300 bg-center bg-cover bg-no-repeat">
        <div className="size-full backdrop-blur-sm flex flex-col place-content-center items-center gap-4">
          <strong>Servicios</strong>
          <p>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
          <Button className="bg-white ">Explorar</Button>
        </div>
      </div>

      <div className="row-span-1 col-span-4  rounded-xl flex justify-between bg-[url('/DSpace.png')] bg-shark-300 bg-center bg-cover bg-no-repeat"></div>
      <div className="row-span-1 col-span-4 bg-[url('/Boletines.png')] bg-shark-300 bg-center bg-cover bg-no-repeat rounded-xl flex justify-between"></div>
      <div className="row-span-1 col-span-4 bg-[url('/Vivo.png')] bg-shark-300 bg-center bg-cover bg-no-repeat rounded-xl flex justify-between"></div>
      <div className="row-span-1 col-span-4 bg-[url('/sobre-nosotros.png')] bg-shark-300 bg-center bg-cover bg-no-repeat rounded-xl flex justify-between"></div>
    </section>
  );
};

export default Section2;
