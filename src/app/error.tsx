'use client'

import { routes } from '@/constants/routes'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-burgundy-900 to-burgundy-950 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold">MINEM.</span>
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/servicios" className="hover:underline">Servicios</Link>
            <Link href="/boletines" className="hover:underline">Boletines</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Oops! Ha ocurrido un error</h1>
            <p className="text-xl mb-8">Lo sentimos, algo salió mal. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo.</p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="bg-white text-burgundy-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Intentar de nuevo
              </button>
              <Link
                href={routes.home}
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-burgundy-900 transition duration-300"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
          <div className="bg-black bg-opacity-20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Garantizamos</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Solución Rápida
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Atención Continua
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Mejora Constante
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}