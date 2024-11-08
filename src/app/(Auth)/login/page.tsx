"use client";

import LoginForm from "@/components/auth/LoginForm";
import { routes } from "@/constants/routes";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import Image from "next/image";

const page = () => {
  return (
    <main className="h-screen w-screen flex p-6 gap-16">
      <div className="relative h-full w-1/2 rounded-xl overflow-hidden backgroundLogin">
        <div className="flex gap-2 items-center z-10 absolute left-4 top-4 ">
          <Link
            href={routes.home}
            className=" flex place-content-center items-center "
          >
              <Image src={Logo} alt="Logo" className="h-12 w-auto mr-3" />
          </Link>
          <h3 className=" font-bold text-2xl text-burgundy-800">MINEM.</h3>
        </div>
      </div>
      <div className="h-full w-1/2 flex place-content-center items-center">
        <LoginForm></LoginForm>
      </div>
    </main>
  );
};

export default page;
