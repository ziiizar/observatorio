import { Boletin } from "@/types/boletin";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export function FeaturedBoletin({ boletin }: { boletin: Boletin }) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-white py-6 px-16 shadow-shadowBlack">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex gap-2">
              {boletin.theme && (
                <span className="rounded-full bg-burgundy-100 px-3 py-1 text-sm text-burgundy-900">
                  {boletin.theme.nombre_eje}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-shark-900 md:text-3xl">
              {boletin.title}
            </h2>
            <p className="line-clamp-3 text-shark-500">{boletin.content}</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-shark-500">
                {new Date(boletin.publication_date).toLocaleDateString()}
              </span>
              {boletin.attached_document && (
                <Button
                 
                >
                  <Download size={16} />
                  Descargar
                </Button>
              )}
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
            <img
             src={`http://127.0.0.1:8000${boletin.image}` || '/placeholder.svg?height=192&width=384'}
              alt={boletin.title}
              className="object-cover"
             
            />
          </div>
        </div>
      </div>
    )
  }