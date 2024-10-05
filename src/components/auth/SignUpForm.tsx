"use client";

import { Key, User, Eye } from "@/Icons/Auth";
import { SignUpSchema, TSSignUpSchema } from "@/schemas/auth";
import { signup } from "@/services/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";
import { roles } from "@/constants/roles";

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
      role: 'user'
    },
  });

  const onSubmit = async (data: TSSignUpSchema) => {
    await signup(data).then((resp) => {console.log(resp)});
    
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
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="username">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Username"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <div className="flex gap-4">
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="first_name">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Nombre"
            {...register("first_name")}
            type="text"
            name="first_name"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="last_name">
          <User></User>
          <input className="outline-none w-full"
            placeholder="Apellidos"
            {...register("last_name")}
            type="text"
            name="last_name"
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
            // {...register("password")}
            type="text"
            name="repeatPassword"
          />
          <Eye></Eye>
        </label>


        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="role"
        >
          <select {...register("role")} className="text-black">
            <option value="">Seleccione un rol</option> {/* Opción por defecto */}
            {roles.map((role) => (
              <option className="text-black " key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </label>

        <Button className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Registrar</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
