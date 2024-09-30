import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/public/Logo.png";
import { routes } from "@/constants/routes";
export default function Footer() {
  return (
    <footer className="bg-black/95 text-white py-12 relative mt-10">
      <div className="absolute left-1/2 -translate-x-1/2 -top-8">
        <Link
          href={routes.login}
          className="bg-burgundy-900 text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center"
        >
          Inicia Sesión en nuestro observatorio
          <svg
            className="w-6 h-6 ml-2"
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src={Logo.src} alt="Logo" className="h-12 w-auto mr-3" />
              <div>
                <h2 className="text-xl font-bold">Ministerio de Energía y</h2>
                <h2 className="text-xl font-bold">Minas de Cuba</h2>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm">
              "El verdadero progreso es el que pone la tecnología al alcance de
              todos."
            </p>
            <p className="mt-2 text-sm">Thomas Edison</p>
          </div>
          <div className="mb-8 md:mb-0">
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <Facebook className="mr-2" size={20} />
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
                  <Instagram className="mr-2" size={20} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:underline">
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
