"use client";

import { InsertFuenteSchema, TSInsertFuenteSchema } from "@/schemas/fuentes";
import { insertFuente } from "@/services/fuente";
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

const InsertFuenteForm = ({ ejes }: { ejes: EjeTematico[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSInsertFuenteSchema>({
    resolver: zodResolver(InsertFuenteSchema),
    defaultValues: {
      title: "",
      organization: "",
      editores: "",
      frequency: 2,
      url: "",
      materia: "",
      id_eje: "", // Aquí lo dejamos vacío inicialmente
      is_monitoring: false,
    },
  });

  const onSubmit = async (data: TSInsertFuenteSchema) => {
    await insertFuente(data).then((resp) => console.log(resp));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl shadow-shadowBlack p-6">
      <p className="text-4xl font-bold">Registra una fuente.</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="title"
        >
          <input
            className="outline-none w-full"
            placeholder="Titulo"
            {...register("title")}
            type="text"
            name="title"
          />
        </label>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="url"
        >
          <input
            className="outline-none w-full"
            placeholder="URL"
            {...register("url")}
            type="text"
            name="url"
          />
        </label>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="editors"
        >
          <input
            className="outline-none w-full"
            placeholder="Editor"
            {...register("editores")}
            type="text"
            name="editors"
          />
        </label>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="organization"
        >
          <input
            className="outline-none w-full"
            placeholder="Organizacion"
            {...register("organization")}
            type="text"
            name="organization"
          />
        </label>

        <div className="flex gap-4">
          <label
            className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
            htmlFor="frequency"
          >
            <input
              className="outline-none w-full"
              placeholder="Frecuencia"
              {...register("frequency")}
              type="text"
              name="frequency"
            />
          </label>
          <label
            className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
            htmlFor="matter"
          >
            <input
              className="outline-none w-full"
              placeholder="Materia"
              {...register("materia")}
              type="text"
              name="matter"
            />
          </label>
        </div>

        {/* Selector de ejes temáticos */}
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="id_eje"
        >
          <select {...register("id_eje")} className="text-black">
            <option value="">Seleccione un eje temático</option> {/* Opción por defecto */}
            {ejes.map((eje) => (
              <option className="text-black" value={eje.id_eje} key={eje.id_eje}>
                {eje.nombre_eje}
              </option>
            ))}
          </select>
        </label>

        <Button
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
        >
          Registrar Fuente
        </Button>
      </form>
    </div>
  );
};

export default InsertFuenteForm;
