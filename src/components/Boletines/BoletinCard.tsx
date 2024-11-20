import { routes } from "@/constants/routes";
import { Boletin } from "@/types/boletin";
import Link from "next/link";

export function BoletinCard({ boletin }: { boletin: Boletin }) {
    return (
      <Link href={`${routes.boletines}/${boletin.id}`}><article className="group relative overflow-hidden rounded-lg bg-white shadow-shadowBlackSmall transition-all hover:shadow-shadowRed">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={`http://127.0.0.1:8000${boletin.image}` || '/placeholder.svg?height=192&width=384'}
            alt={boletin.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex gap-2">
            {boletin.theme && (
              <span className="rounded-full bg-burgundy-100 px-3 py-1 text-xs text-burgundy-900">
                {boletin.theme.nombre_eje}
              </span>
            )}
          </div>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-shark-900">
            {boletin.title}
          </h3>
          <p className="text-sm text-shark-500">
            {new Date(boletin.publication_date).toLocaleDateString()}
          </p>
        </div>
      </article></Link>
      
    )
  }