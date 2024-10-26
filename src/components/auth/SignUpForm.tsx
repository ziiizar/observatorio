"use client";

import { Key, UserIcon, Eye } from "@/Icons/Auth";
import { SignUpSchema, TSSignUpSchema } from "@/schemas/user";
import { signup } from "@/services/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";
import { roles } from "@/constants/roles";
import { toast } from "sonner";
import { Input } from "../ui/input";

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
    const resp = await signup(data)
    if(resp.success){
      
      toast.success(resp.success)
      router.push(routes.adminUsers)
     }
     if(resp.error){
      toast.error(resp.error)
     }
    
  };

  const firstError = (() => {
    const errorMessages = [
      errors.email?.message,
      errors.organization?.message,
      errors.first_name?.message,
      errors.last_name?.message,
      errors.password?.message,
      errors.role?.message,
      errors.username?.message,
      errors.confirmPassword?.message,
    ];
    return errorMessages.find(Boolean) || null;
  })();

  

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6">
      <p className="text-2xl font-bold">
      Registra un nuevo usuario.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="email">
          <UserIcon></UserIcon>
          <Input className="outline-none w-full"
            placeholder="Correo"
            {...register("email")}
            type="text"
            name="email"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="username">
          <UserIcon></UserIcon>
          <Input className="outline-none w-full"
            placeholder="Username"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <div className="flex gap-4">
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="first_name">
          <UserIcon></UserIcon>
          <Input className="outline-none w-full"
            placeholder="Nombre"
            {...register("first_name")}
            type="text"
            name="first_name"
          />
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="last_name">
          <UserIcon></UserIcon>
          <Input className="outline-none w-full"
            placeholder="Apellidos"
            {...register("last_name")}
            type="text"
            name="last_name"
          />
        </label>
        </div>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="organization">
          <UserIcon></UserIcon>
          <Input className="outline-none w-full"
            placeholder="Organismo"
            {...register("organization")}
            type="text"
            name="organization"
          />
        </label>
        <div className="flex gap-4">
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="password">
          <Key></Key>
          <Input  className="outline-none w-full"
            placeholder="Contraseña"
            {...register("password")}
            type="text"
            name="password"
          />
          <Eye></Eye>
        </label>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="confirmPassword">
          <Key></Key>
          <Input  className="outline-none w-full"
            placeholder="Repetir Contraseña"
            {...register("confirmPassword")}
            type="text"
            name="confirmPassword"
          />
          <Eye></Eye>
        </label>
        </div>

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

        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}


        <Button className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Registrar</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
