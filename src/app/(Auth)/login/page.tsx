"use client";

import LoginForm from "@/components/auth/LoginForm";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import Login from '@/public/Login.png'

// import  Cookies from 'js-cookie'

const page = () => {
  // const token = Cookies.get('access_token');
  // console.log('token')
  // console.log(token)

  return (
    <main className="h-screen w-screen flex p-6 gap-16">
      <div className="relative h-full w-1/2 rounded-xl overflow-hidden backgroundLogin">
        {/* <div className="absolute inset-0 w-full h-full rounded-xl -top-20 right-10">
          <Image className="rounded-xl "  width={550} height={520} src={Login} alt="LoginImage"></Image>
        </div> */}
        <div className="flex gap-2 items-center z-10 absolute left-4 top-4 ">
          <Link
            href={routes.home}
            className=" flex place-content-center items-center "
          >
            <img src={Logo.src} alt="Logo" className="h-12 w-auto mr-3" />
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
