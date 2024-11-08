import { getAuth } from "@/services/getAuth";
import AuthBox from "./AuthBox";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { outfit } from "@/styles/fonts";
import HeaderLinks from "./HeaderLinks";
import Image from "next/image";

const Header = async ({ landing }:{landing:boolean}) => {
  const user = await getAuth();
  return (
    <header
      className={cn(
        "flex   px-6 h-[15dvh] absolute top-0 left-0 w-full items-center ",
        landing ? "gap-12" : "justify-between",
        outfit.className
      )}
    >
      <div className="flex gap-2 place-content-center items-center">
        <Link
          href={routes.home}
          className=" flex place-content-center items-center"
        >
            <Image src={Logo} alt="Logo" className="h-8 w-auto mr-3" />
        </Link>
        <h3 className=" font-bold text-2xl">
          MIN<span className="text-burgundy-800">EM.</span>
        </h3>
      </div>
      <ul className="flex gap-6 ">
        <HeaderLinks></HeaderLinks>
      </ul>

      {!landing ? <AuthBox user={user}></AuthBox> : null}
    </header>
  );
};

export default Header;
