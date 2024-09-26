import { getFakeAuth } from "@/services/getFakeAuth";
import { getAuth } from "@/services/getAuth";
import AuthBox from "./AuthBox";
import Logo from "@/public/Logo.png";
// import Logo from "@/Icons/Logo";
import { FAKEUSERINDEX } from "@/constants/fakeUser";
// import Cookies from "js-cookie";

const Header = async ({ landing }) => {
  // const token = Cookies.get("access_token");
  // console.log('token header');
  // console.log(token);
  // const user = await getFakeAuth(FAKEUSERINDEX);
  const user = await getAuth();
  return (
    <header className="flex justify-between pt-10 pb-6 px-16 h-[15dvh] absolute top-0 left-0 w-full items-center">
      <div className="flex gap-6 place-content-center items-center">
        <div className=" flex place-content-center items-center">
          <img src={Logo.src} alt="Logo" className="h-12 w-auto mr-3" />
        </div>
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
