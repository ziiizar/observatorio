import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/public/Logo.png";
import { routes } from "@/constants/routes";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white py-12 relative ">
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-full px-4 sm:w-auto">
        <Link
          href={routes.login}
          className="bg-burgundy-900 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-semibold flex items-center justify-center sm:justify-start w-full sm:w-auto"
        >
          <span className="text-center sm:text-left">Inicia Sesión en nuestro observatorio</span>
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 ml-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="flex flex-col md:flex-row items-center">
              <Image src={Logo.src} alt="Logo" width={48} height={48} className="h-12 w-auto mb-2 md:mb-0 md:mr-3" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Ministerio de Energía y</h2>
                <h2 className="text-lg sm:text-xl font-bold">Minas de Cuba</h2>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm mx-auto md:mx-0">
              El verdadero progreso es el que pone la tecnología al alcance de
              todos.
            </p>
            <p className="mt-2 text-sm">Thomas Edison</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Paginas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Pagina1
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Pagina2
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Pagina3
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Pagina4
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Pagina5
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center justify-center md:justify-start hover:underline">
                  <Facebook className="mr-2" size={20} />
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center justify-center md:justify-start hover:underline">
                  <Instagram className="mr-2" size={20} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center justify-center md:justify-start hover:underline">
                  <Twitter className="mr-2" size={20} />
                  X.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/70">
          2024. Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}