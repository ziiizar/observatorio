"use client";

import {EditUserSchema,TSEditUserSchema  } from "@/schemas/user";
import { updateUser } from "@/services/user"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { User } from "@/types/user";
import { Eye, Key, UserIcon } from "@/Icons/Auth";
import { roles } from "@/constants/roles";
import { toast } from "sonner";


const EditUserForm = ({
 
  user,
  onClose,
}: {
  
  user: User;
  onClose: () => void;
}) => {

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
    const resp = await updateUser(data) 
    if(resp.success){
      toast.success(resp.success)
     }
     if(resp.error){
      toast.error(resp.error)
     }
     onClose()
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
    ];
    return errorMessages.find(Boolean) || null;
  })();

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6 bg-white">
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

        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}


        <Button className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Aceptar</Button>
      </form>
     
        <Button onClick={onClose}>Cerrar</Button>
    </div>

  );
};

export default EditUserForm;
