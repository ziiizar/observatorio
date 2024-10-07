"use client";

import {EditUserSchema,TSEditUserSchema  } from "@/schemas/user";
import { updateUser } from "@/services/user"; // Asegúrate de tener este servicio para actualizar
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { fetchEjesTematicos } from "@/data/ejesTematicos";
import { User } from "@/types/user";
import { Eye, Key, UserIcon } from "@/Icons/Auth";
import { roles } from "@/constants/roles";


const EditUserForm = ({
 
  user,
  onClose,
}: {
  
  user: User;
  onClose: () => void;
}) => {

    console.log(user)
// const [ejes, setEjes] = useState<EjeTematico[] | null>(null)

//     useEffect(() => {
//         const fetchEjes = async () => {
//           const ejes = await fetchEjesTematicos();
//           setEjes(ejes);
//         };
    
//         fetchEjes();
//       }, []);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSEditUserSchema>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      id:user.id,
      email: user.email || "",
      organization: user.userprofile.organization || "",
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      role: user.userprofile.role || "",
      username: user.username || "",
    },
  });

  const onSubmit = async (data: TSEditUserSchema) => {
    await updateUser(data) // Actualiza la fuente usando su ID
      .then((resp) => {
        console.log(resp);
        // onClose(); // Cierra el modal al completar la edición
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6">
      <p className="text-4xl font-bold">
      Registra un nuevo usuario.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="email">
          <UserIcon></UserIcon>
          <input className="outline-none w-full"
            placeholder="Correo"
            {...register("email")}
            type="text"
            name="email"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="username">
          <UserIcon></UserIcon>
          <input className="outline-none w-full"
            placeholder="Username"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <div className="flex gap-4">
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="first_name">
          <UserIcon></UserIcon>
          <input className="outline-none w-full"
            placeholder="Nombre"
            {...register("first_name")}
            type="text"
            name="first_name"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="last_name">
          <UserIcon></UserIcon>
          <input className="outline-none w-full"
            placeholder="Apellidos"
            {...register("last_name")}
            type="text"
            name="last_name"
          />
        </label>
        </div>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="organization">
          <UserIcon></UserIcon>
          <input className="outline-none w-full"
            placeholder="Organismo"
            {...register("organization")}
            type="text"
            name="organization"
          />
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
      <div className="text-red-500">
          {errors.email?.message
            ? errors.email?.message
            : errors.first_name?.message
            ? errors.first_name?.message
            : errors.id?.message
            ? errors.id?.message
            :errors.last_name?.message
            ? errors.last_name?.message
            :errors.role?.message
            ? errors.role?.message
            :errors.organization?.message
            ? errors.organization?.message
            :errors.username?.message
            ? errors.username?.message
            :null}
        </div>
        <Button onClick={onClose}>Cerrar</Button>
    </div>

  );
};

export default EditUserForm;
