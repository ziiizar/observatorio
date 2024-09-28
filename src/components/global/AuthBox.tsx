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
          {user.is_superuser === true && (
            <Button className="mr-2 w-[220px] bg-black text-white ">
              <Link className="w-full" href={routes.admin}>Panel de Administracion</Link>
            </Button>
          )}
          <Button className="w-32" onClick={logout}>
            Cerrar sesión
          </Button>
        </>
      ) : (
        <Button className="w-28">
          <Link className="w-full" href={routes.login}>Iniciar sesión</Link>
        </Button>
      )}
    </div>
  );
};

export default AuthBox;
