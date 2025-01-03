import { Clock, Bell, ArrowRight } from "lucide-react"
import Button  from "@/components/ui/Button"
import Link from "next/link"
import { routes } from "@/constants/routes"
import { fetchAllBoletines } from "@/data/boletines"
import { GetBoletinesResponse } from "@/types/boletin"
import BoletinesSection from "@/components/Boletines/BoletinesSection"
import { BACKEND_URL } from "@/constants/backendURL";

export default async function Boletines() {

  const {boletines,total_pages, total_boletines}: GetBoletinesResponse = await fetchAllBoletines()

  return (
    <div className="container mx-auto px-6 py-8 min-h-screen">

<BoletinesSection initialData={{boletines,total_pages, total_boletines}}></BoletinesSection>

{/* 
      {boletines?.map((boletin)=>(<article key={boletin.id}>
        <h4>{boletin.title}</h4>
        <h4>{boletin.theme?.nombre_eje}</h4>
        {boletin.image && (
            <img src={`${BACKEND_URL}${boletin.image}`} alt={boletin.title} className="w-64 h-64 object-cover" />
          )}
      </article>))} */}

      </div>
  )
}

      {/* <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter">
              Boletines
            </h1>
            <p className="text-xl text-shark-50 leading-relaxed max-w-[600px]">
              Estamos trabajando en nuevas funcionalidades para mejorar tu experiencia. Pronto podrás acceder a todos nuestros boletines tecnológicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white text-burgundy-950  inline-flex items-center gap-2"
                
              >
                <Bell className="w-4 h-4" />
                Notificarme
              </Button>
              <Button
                
                className="border-white text-burgundy-950 "
               
              >
                <Link href={routes.home}>Volver al inicio</Link>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <article className="bg-black/20 backdrop-blur border-0 p-6 lg:p-8">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
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
      </div> */}

 