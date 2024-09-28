"use client";

import { Key, User, Eye } from "@/Icons/Auth";
import { LoginSchema, TSLoginSchema } from "@/schemas/auth";
import { login } from "@/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";

const LoginForm = () => {

  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: TSLoginSchema) => {
    await login(data).then((resp) => {console.log(resp),resp.success && router.push(routes.home)});
    
  };

  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <p className="text-4xl font-bold">
        Intercambia información tecnológica con nosotros.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="username">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Nombre de usuario"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="password">
          <Key></Key>
          <input  className="outline-none w-full"
            placeholder="Contraseña"
            {...register("password")}
            type="text"
            name="password"
          />
          <Eye></Eye>
        </label>
        <Button className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Aceptar</Button>
      </form>
    </div>
  );
};

export default LoginForm;
