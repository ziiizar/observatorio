"use client";

import { InsertEjeSchema, TSInsertEjeSchema } from "@/schemas/ejes";
import { insertEje } from "@/services/eje";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { toast } from "sonner";
// import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

const InsertEje = () => {

  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSInsertEjeSchema>({
    resolver: zodResolver(InsertEjeSchema),
    defaultValues: {
      
      nombre_eje: "",
      esta_activo: true,
    },
  });

  const onSubmit = async (data: TSInsertEjeSchema) => {
    const resp = await insertEje(data)
    if(resp.success){
      
      toast.success(resp.success)
      router.push(routes.adminEstadisticas)
     }
     if(resp.error){
      toast.error(resp.error)
     }
    
  };

  const firstError = (() => {
    const errorMessages = [
      errors.nombre_eje?.message,
      errors.esta_activo?.message,
    ];
    return errorMessages.find(Boolean) || null;
  })();

  

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6">
      <p className="text-2xl font-bold">
      Registra un nuevo eje.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2" htmlFor="nombre_eje">
          <Input className="outline-none w-full"
            placeholder="Nombre"
            {...register("nombre_eje")}
            type="text"
            name="nombre_eje"
          />
        </label>
        
        

        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}


        <Button disabled={isSubmitting} className="bg-burgundy-900 text-white shadow-shadowRed" type="submit">Registrar</Button>
      </form>
    </div>
  );
};

export default InsertEje;
