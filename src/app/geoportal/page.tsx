import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { ArrowRight, Bell, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-burgundy-950 to-burgundy-900/90 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter">
              Geoportal
            </h1>
            <p className="text-xl text-shark-50 leading-relaxed max-w-[600px]">
              Estamos trabajando en nuevas funcionalidades para mejorar tu
              experiencia. Pronto podrás acceder a nuestro geoportal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-burgundy-950  inline-flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notificarme
              </Button>
              <Button className="border-white text-burgundy-950 ">
                <Link href={routes.home}>Volver al inicio</Link>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <article className="bg-black/20 backdrop-blur border-0 p-6 lg:p-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Clock className="w-12 h-12 text-red-200" />
                <span className="text-5xl font-bold">Próximamente</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-white rounded-full" />
                  <span className="text-lg">Contenido Actualizado</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-white rounded-full" />
                  <span className="text-lg">Información Detallada</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-white rounded-full" />
                  <span className="text-lg">Recursos Descargables</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-white rounded-full" />
                  <span className="text-lg">Acceso Universal</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default page;
