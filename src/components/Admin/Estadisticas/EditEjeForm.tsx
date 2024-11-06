"use client";

import {TSUpdateEjeSchema,UpdateEjeSchema  } from "@/schemas/ejes";
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { toast } from "sonner";
import { updateEje } from "@/services/eje";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";


const EditEjeForm = ({
 
  eje,
  onClose,
}: {
  
  eje: EjeTematico;
  onClose: () => void;
}) => {

  const router = useRouter()  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSUpdateEjeSchema>({
    resolver: zodResolver(UpdateEjeSchema),
    defaultValues: {
      id_eje:eje.id_eje,
      nombre_eje: eje.nombre_eje || "",
      esta_activo: eje.esta_activo || true,
     
    },
  });

  const onSubmit = async (data: TSUpdateEjeSchema) => {
    const resp = await updateEje(data) 
    if(resp.success){
      toast.success(resp.success)
      router.push(routes.adminEstadisticas)
      
     }
     if(resp.error){
      toast.error(resp.error)
     }
     onClose()
  };


  const firstError = (() => {
    const errorMessages = [
      errors.nombre_eje?.message,
      errors.esta_activo?.message,
    ];
    return errorMessages.find(Boolean) || null;
  })();

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6 bg-white">
      <p className="text-4xl font-bold">
      Editar eje.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="nombre_eje">
          <Input 
            placeholder="Nombre"
            {...register("nombre_eje")}
            type="text"
            name="nombre_eje"
          />
        </label>
        

        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}


        <Button disabled={isSubmitting} className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Aceptar</Button>
      </form>
     
        <Button onClick={onClose}>Cerrar</Button>
    </div>

  );
};

export default EditEjeForm;
