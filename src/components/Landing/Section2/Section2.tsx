'use client'

import Button from "@/components/ui/Button";
import Paneles from "@/public/Paneles.png";
import Petroleo from "@/public/Petroleo.png";
import Panel from "@/public/Panel.png";
import Image from "next/image";

const Section2 = () => {
 

  return (
    <section className="h-screen grid grid-cols-2 grid-rows-12 w-full px-16 py-6 gap-6">
      <div className="row-span-5 col-span-2 bg-burgundy-900 rounded-xl flex justify-between">
        <div className="flex flex-col justify-between p-8">
          <h4 className="text-white">Lorem Ipsum</h4>

          <Button>Explorar</Button>
        </div>
        <div className="relative h-full w-2/5 overflow-hidden pe-8">
          <div className="absolute inset-0 -top-2">
            <Image src={Paneles} alt="Paneles"></Image>
          </div>
        </div>
      </div>

      <div className="row-span-7 col-span-1 bg-burgundy-900 rounded-xl flex justify-between">
        <div className="flex flex-col gap-4 p-8 place-content-end">
          <h4 className="text-white">Lorem Ipsum</h4>

          <Button>Explorar</Button>
        </div>
        <div className="relative h-full w-2/5 overflow-hidden place-content-end">
          <picture className="absolute inset-0">
            <img src={Petroleo.src} alt="Petroleo" className="h-full aspect-video"></img>
          </picture>
        </div>
      </div>
      <div className="row-span-7 col-span-1 bg-burgundy-900 rounded-xl flex justify-between">
      <div className="flex flex-col gap-4 p-8 place-content-end">
          <h4 className="text-white">Lorem Ipsum</h4>

          <Button>Explorar</Button>
        </div>
        <div className="relative h-full w-2/5 overflow-hidden">
          <div className="absolute inset-0 ">
            <Image src={Panel} alt="Panel"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
