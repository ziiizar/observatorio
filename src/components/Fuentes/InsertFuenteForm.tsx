"use client";

import { InsertFuenteSchema, TSInsertFuenteSchema } from "@/schemas/fuentes";
import { insertFuente } from "@/services/fuente";
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/Label";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

const InsertFuenteForm = ({ ejes }: { ejes: EjeTematico[] }) => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSInsertFuenteSchema>({
    resolver: zodResolver(InsertFuenteSchema),
    defaultValues: {
      is_monitoring: false,
    },
  });

  const onSubmit = async (data: TSInsertFuenteSchema) => {
    const resp = await insertFuente(data);
    if (resp.success) {
      toast.success(resp.success);
      router.push(routes.adminFuentes)
    }
    if (resp.error) {
      toast.error(resp.error);
    }
  };

  // Obtener el primer mensaje de error
  const firstError = (() => {
    const errorMessages = [
      errors.title?.message,
      errors.organization?.message,
      errors.editores?.message,
      errors.frequency?.message,
      errors.url?.message,
      errors.materia?.message,
      errors.id_eje?.message,
    ];
    return errorMessages.find(Boolean) || null;
  })();

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl shadow-shadowBlack p-6 ">
      <p className="text-2xl font-bold">Registra una fuente.</p>
      <form
        className="flex flex-col gap-4  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="title">
          <Input
            placeholder="Titulo"
            {...register("title")}
            type="text"
            name="title"
          />
        </Label>

        <div className="flex justify-between">
          <label
            className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
            htmlFor="url"
          >
            <Input
              className="outline-none w-full"
              placeholder="URL"
              {...register("url")}
              type="text"
              name="url"
            />
          </label>
          <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="organization"
        >
          <Input
            className="outline-none w-full"
            placeholder="Organizacion"
            {...register("organization")}
            type="text"
            name="organization"
          />
        </label>
        </div>

        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="editores"
        >
          <Input
            className="outline-none w-full"
            placeholder="Editor"
            {...register("editores")}
            type="text"
            name="editores"
          />
        </label>

        

        <div className="flex justify-between">
          <label
            className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
            htmlFor="frequency"
          >
            <Input
              className="outline-none w-full"
              placeholder="Frecuencia"
              {...register("frequency")}
              type="text"
              name="frequency"
            />
          </label>

          <label
            className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
            htmlFor="materia"
          >
            <Input
              className="outline-none w-full"
              placeholder="Materia"
              {...register("materia")}
              type="text"
              name="materia"
            />
          </label>
        </div>

        {/* Selector de ejes temáticos */}
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="id_eje"
        >
          <select {...register("id_eje")} className="text-black">
            <option value="">Seleccione un eje temático</option>
            {ejes.map((eje) => (
              <option
                className="text-black"
                value={eje.id_eje}
                key={eje.id_eje}
              >
                {eje.nombre_eje}
              </option>
            ))}
          </select>
        </label>

        {/* Mostrar el primer error encontrado */}
        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}

        <Button
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
          disabled={isSubmitting}
        >
          Registrar Fuente
        </Button>
      </form>
    </div>
  );
};

export default InsertFuenteForm;
