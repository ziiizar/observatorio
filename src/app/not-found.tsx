import Footer from '@/components/global/Footer'
import Header from '@/components/global/Header'
import { routes } from '@/constants/routes'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { outfit, zodiak } from '@/styles/fonts'
export default function NotFound() {
  return (
    <>
    <Header ></Header>
    <main className={cn("min-h-screen flex  items-center justify-between px-40", outfit.className)}>
      
        <Image
          src="/not-found.png"
          alt="404 Not Found"
          width={400}
          height={300}
          priority
        />
        <div className='w-52 text-left'><h4 className='text-3xl'>Ups!</h4>
          <h4 className="mt-8 text-8xl font-semibold text-gray-800"> 404</h4>
          <p className={cn("mt-4 text-xl text-gray-600", zodiak.className)}>La página que buscas no existe o está en mantenimiento</p>
          <Link href={routes.home} >
            <button className="mt-8 px-6 py-3 bg-burgundy-900 text-white font-semibold rounded-full hover:bg-burgundy-800 transition duration-300">
              Ir a Página Principal
            </button>
          </Link>
        </div>
      
    </main>
      <Footer></Footer>
      
    </>
  )
}