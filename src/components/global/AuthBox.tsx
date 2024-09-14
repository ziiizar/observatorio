"use client";

import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import Link from "next/link";

const AuthBox = ({ user }) => {
  return (
    <div className="flex place-content-end items-center mr-3">
      {user ? (
        <Button  >
          Cerrar sesion
        </Button>
      ) : (
        <Button className="w-28">
          <Link className="w-full" href={routes.login}>Iniciar sesion</Link>
        </Button>
      )}{" "}
    </div>
  );
};

export default AuthBox;
