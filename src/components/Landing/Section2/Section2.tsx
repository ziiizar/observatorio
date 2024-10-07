"use client";

import Button from "@/components/ui/Button";
import Paneles from "@/public/Paneles.png";
import Petroleo from "@/public/Petroleo.png";
import Panel from "@/public/Panel.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="h-screen grid grid-cols-12 grid-rows-2 w-full p-6 gap-6 bg-black text-white">
      <div className="row-span-1 col-span-8  rounded-xl flex justify-between bg-[url('/Servicios.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative ">
      <div className="absolute size-full z-10 bg-black/50"></div>
      <div className="flex flex-col gap-4 z-20 px-16 py-10 place-content-center items-center">
        <strong className="">Servicios</strong>
            <p className="text-balance text-center">Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
            <Button className="bg-white text-black w-28">Explorar</Button>
      </div>
      </div>

      <div className="row-span-1 col-span-4  rounded-xl flex justify-between bg-[url('/DSpace.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
      <div className="absolute size-full z-10 bg-black/50"></div>
      <div className="flex flex-col gap-2 z-20 p-6 ">
        <strong className="">Servicios</strong>
            <p>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
            <Button className="bg-white w-28 text-black">Explorar</Button>
      </div>
      </div>
      <div className="row-span-1 col-span-4  rounded-xl flex justify-between bg-[url('/Boletines.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
      <div className="absolute size-full z-10 bg-black/50"></div>
      <div className="flex flex-col gap-2 z-20 p-6">
        <strong className="">Servicios</strong>
            <p>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
            <Button className="bg-white w-28 text-black">Explorar</Button>
      </div>
      </div>
      <div className="row-span-1 col-span-4  rounded-xl flex justify-between bg-[url('/Vivo.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
      <div className="absolute size-full z-10 bg-black/50"></div>
      <div className="flex flex-col gap-2 z-20 p-6">
        <strong className="">Servicios</strong>
            <p>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
            <Button className="bg-white w-28 text-black">Explorar</Button>
      </div>
      </div>
      <div className="row-span-1 col-span-4  rounded-xl flex place-content-center items-center bg-[url('/sobre-nosotros.png')] bg-shark-300 bg-center bg-cover bg-no-repeat relative">
      <div className="absolute size-full z-10 bg-black/50"></div>
      <div className="flex flex-col gap-2 z-20 p-6 ">
        <strong className="">Servicios</strong>
            <p>Explora nuestras herramientas de análisis con acceso a tablas, registros y gráficos detallados sobre avances tecnológicos en energía y minería.</p>
            <Button className="bg-white w-28 text-black">Explorar</Button>
      </div>
      </div>
    </section>
  );
};

export default Section2;
