"use client";

import { Key, User, Eye } from "@/Icons/Auth";
import { SignUpSchema, TSSignUpSchema } from "@/schemas/auth";
import { signup } from "@/services/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";

const SignUpForm = () => {

  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      
      password: "",
    },
  });

  const onSubmit = async (data: TSSignUpSchema) => {
    await signup(data).then((resp) => {console.log(resp),resp.success && router.push(routes.home)});
    
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6">
      <p className="text-4xl font-bold">
      Registra un nuevo usuario.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="email">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Correo"
            {...register("email")}
            type="text"
            name="email"
          />
        </label>
        <div className="flex gap-4">
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="firstName">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Nombre"
            {...register("firstName")}
            type="text"
            name="firstName"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="lastName">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Apellidos"
            {...register("lastName")}
            type="text"
            name="lastName"
          />
        </label>
        </div>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="organization">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Organismo"
            {...register("organization")}
            type="text"
            name="organization"
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
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="repeatPassword">
          <Key></Key>
          <input  className="outline-none w-full"
            placeholder="Repetir Contraseña"
            {...register("password")}
            type="text"
            name="repeatPassword"
          />
          <Eye></Eye>
        </label>
        <Button className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Registrar Usuario</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
