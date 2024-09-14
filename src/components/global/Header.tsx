import { getAuth } from "@/services/getAuth";
import AuthBox from "./AuthBox";
// import Logo from "@/public/Logo.png";
import Logo from "@/Icons/Logo";
import { FAKEUSERINDEX } from "@/constants/fakeUser";

const Header = async ({ landing }) => {
  const user = await getAuth(FAKEUSERINDEX);
  return (
    <header className="flex justify-between pt-10 pb-6 px-16 h-[15dvh] absolute top-0 left-0 w-full items-center">
      <div className="flex gap-6 place-content-center items-center">
        <div className=" flex place-content-center items-center">
          <Logo></Logo>
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
