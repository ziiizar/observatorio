import { getAuth } from "@/services/getAuth";
import AuthBox from "./AuthBox";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { routes } from "@/constants/routes";
// import Logo from "@/Icons/Logo";
// import Cookies from "js-cookie";

const Header = async ({ landing }) => {
  
  const user = await getAuth();
  return (
    <header className="flex justify-between pt-10 pb-6 px-16 h-[15dvh] absolute top-0 left-0 w-full items-center">
      <div className="flex gap-6 place-content-center items-center">
        <Link href={routes.home} className=" flex place-content-center items-center">
          <img src={Logo.src} alt="Logo" className="h-12 w-auto mr-3" />
        </Link>
        <h3 className=" font-bold text-2xl">
          MIN<span className="text-burgundy-800">EM.</span>
        </h3>
        <ul className="flex gap-6">
          <li>Servicios</li>
          <li>Lineas de Trabajo</li>
          <li>Sobre el Observatorio</li>
        </ul>
      </div>
      {!landing ? <AuthBox user={user}></AuthBox> : null}
    </header>
  );
};

export default Header;
