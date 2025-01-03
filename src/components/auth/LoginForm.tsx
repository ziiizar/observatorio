"use client";

import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Key, UserIcon, Eye } from "@/Icons/Auth";
import { LoginSchema, TSLoginSchema } from "@/schemas/user";
import { login } from "@/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { routes } from "@/constants/routes";
import { Email, Facebook, Instagram, Phone, Twitter } from "@/Icons/Social";
import { Input } from "../ui/Input";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: TSLoginSchema) => {
    const resp = await login(data);
    if(resp.success){
      toast.success(resp.success)
      router.push(routes.home)
    }
    if(resp.error){
      toast.error(resp.error)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-8 w-[500px] shadow-shadowBlack p-8 rounded-xl">
      <p className="text-4xl font-bold">
        Intercambia información tecnológica con nosotros.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="flex gap-4 border-2 border-shark-950 rounded-lg items-center p-2"
          htmlFor="username"
        >
          <UserIcon />
          <Input
            className="outline-none w-full"
            placeholder="Nombre de usuario"
            {...register("username")}
            type="text"
            name="username"
          />
        </label>
        <label
          className="flex gap-4 border-2 border-shark-950 rounded-lg items-center p-2"
          htmlFor="password"
        >
          <Key />
          <Input
            className="outline-none w-full"
            placeholder="Contraseña"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            name="password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </label>
        <Button
          disabled={isSubmitting}
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </form>

      <div>
        <div className="flex gap-4 place-content-center items-center w-full mb-6">
          <span data-testid="instagram-icon">
            <Instagram />
          </span>
          <span data-testid="facebook-icon">
            <Facebook />
          </span>
          <span data-testid="twitter-icon">
            <Twitter />
          </span>
        </div>
        <div className="flex gap-6 place-content-center items-center w-full">
          <div className="flex gap-2 place-content-center items-center">
            <Phone />
            <strong> +53 3291948</strong>
          </div>
          <div className="flex gap-2 place-content-center items-center">
            <Email />
            <strong> support@minem.gob.cu</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;