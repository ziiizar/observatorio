import { Download } from 'lucide-react'
import  Button  from '@/components/ui/Button'
import type { Boletin } from '@/types/boletin'

export default function DetailedBoletin({ boletin }: { boletin: Boletin }) {
  return (
    <main className="container mx-auto px-4 py-8 mb-10">
      <article className="flex flex-col gap-8 rounded-2xl  lg:flex-row">
        {/* Left Column - Image and Title */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-auto lg:w-2/5">
          <img
            src={`http://127.0.0.1:8000${boletin.image}` || '/placeholder.svg?height=600&width=800'}
            alt={boletin.title}
            className="h-full w-full object-cover rounded-2xl "
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {boletin.title}
            </h1>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex w-full flex-col px-6 lg:w-1/2">
          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-burgundy-100 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-burgundy-900" />
              <span className="text-sm text-burgundy-900">Etiqueta 1</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-burgundy-100 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-burgundy-900" />
              <span className="text-sm text-burgundy-900">Etiqueta 2</span>
            </span>
          </div>

          {/* Content */}
          <div className="mb-8 prose prose-lg">
            <div
              className="text-shark-700"
              dangerouslySetInnerHTML={{ __html: boletin.content }}
            />
          </div>

          {/* Attached Document */}
          {boletin.attached_document && (
            <div className="mt-auto rounded-2xl bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-shark-900">
                    Documento Adjunto
                  </h2>
                  <p className="text-sm text-shark-500">6.8 MB</p>
                </div>
                <Button
                  className="bg-burgundy-900 px-6 text-white hover:bg-burgundy-800"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}