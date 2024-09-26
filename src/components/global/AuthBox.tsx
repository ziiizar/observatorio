"use client";

import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { logout } from "@/services/logout";
import Link from "next/link";

const AuthBox = ({ user }) => {
  return (
    <div className="flex place-content-end items-center mr-3">
      {user ? (
        <Button  onClick={logout}>
          Cerrar sesión
        </Button>
      ) : (
        <Button className="w-28">
          <Link className="w-full" href={routes.login}>Iniciar sesión</Link>
        </Button>
      )}{" "}
    </div>
  );
};

export default AuthBox;
