"use client";

import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { logout } from "@/services/logout";
import Link from "next/link";
import { AuthUser } from '../../types/user';
import ProfileHeaderButton from "./ProfileHeaderButton";

const AuthBox = ({ user }: { user: AuthUser }) => {
  return (
    <div className="flex place-content-end items-center mr-1 sm:mr-3">
      {user ? (
        <>
          {user?.role === 'admin' ? (
            <Button className="mr-2 w-[220px] bg-black text-white hover:shadow-shadowBlack transition-all ease-in-out duration-200 text-[clamp(0.75rem,2vw,1rem)]">
              <Link className="w-full" href={routes.admin}>Panel de Administracion</Link>
            </Button>
          ) : user?.role === 'directivo' ? (
            <Button className="mr-2 w-full max-w-[220px] bg-black text-white hover:shadow-shadowBlack transition-all ease-in-out duration-200 text-[clamp(0.75rem,2vw,1rem)]">
              <Link className="w-full" href={routes.geoportal}>Geoportal</Link>
            </Button>
          ) : null}
          <ProfileHeaderButton user={user} />
        </>
      ) : (
        <Button className="w-full max-w-[144px] bg-black text-white hover:shadow-shadowBlack transition-all duration-200 ease-in-out text-[clamp(0.75rem,2vw,1rem)]">
          <Link className="w-full" href={routes.login}>Iniciar sesión</Link>
        </Button>
      )}
    </div>
  );
};

export default AuthBox;