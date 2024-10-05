"use client";

import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { logout } from "@/services/logout";
import Link from "next/link";
import { User } from '../../types/user';

const AuthBox = ({ user }: {user : User}) => {
  return (
    <div className="flex place-content-end items-center mr-3">
      {user ? (
        <>
          {user.is_superuser === true ? (
            <Button className="mr-2 w-[220px] bg-black text-white hover:shadow-shadowBlack transition-colors ease-out duration-300">
              <Link className="w-full" href={routes.admin}>Panel de Administracion</Link>
            </Button>
          ) : user.userprofile.role === 'observador' ? (<Button className="mr-2 w-[220px] bg-black text-white ">
            {/* Cambiar la ruta por observador si lo hago separado  */}
            <Link className="w-full" href={routes.admin}>Panel de Observador</Link>
          </Button>): null}
          <Button className="w-32" onClick={logout}>
            Cerrar sesión
          </Button>
        </>
      ) : (
        <Button className="w-36 bg-black text-white hover:shadow-shadowBlack">
          <Link className="w-full" href={routes.login}>Iniciar sesión</Link>
        </Button>
      )}
    </div>
  );
};

export default AuthBox;
