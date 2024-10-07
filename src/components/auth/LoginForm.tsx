"use client";

import { Key, UserIcon, Eye } from "@/Icons/Auth";
import { LoginSchema, TSLoginSchema } from "@/schemas/user";
import { login } from "@/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";
import { Email, Facebook, Instagram, Phone, Twitter } from "@/Icons/Social";

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
    await login(data).then((resp) => {
      console.log(resp), resp.success && router.push(routes.home);
    });
  };

  return (
    <div className="flex flex-col gap-8 w-[500px] shadow-shadowBlack p-8  rounded-xl">
      <p className="text-4xl font-bold">
        Intercambia información tecnológica con nosotros.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="flex gap-4 border-2 border-shark-950 rounded-lg \ items-center p-2"
          htmlFor="username"
        >
          <UserIcon></UserIcon>
          <input
            className="outline-none w-full"
            placeholder="Nombre de usuario"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <label
          className="flex gap-4 border-2 border-shark-950 rounded-lg \ items-center p-2"
          htmlFor="password"
        >
          <Key></Key>
          <input
            className="outline-none w-full"
            placeholder="Contraseña"
            {...register("password")}
            type="text"
            name="password"
          />
          <Eye></Eye>
        </label>
        <Button
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </form>

      <div>
        <div className="flex gap-4 place-content-center items-center w-full mb-6">
          <Instagram></Instagram>
          <Facebook></Facebook>
          <Twitter></Twitter>
        </div>
        <div className="flex gap-6 place-content-center items-center w-full">
          <div className="flex gap-2 place-content-center items-center" >
            <Phone></Phone>
            <strong> +53 3291948</strong>
          </div>
          <div className="flex gap-2 place-content-center items-center">
            <Email></Email>
            <strong> support@minem.gob.cu</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
