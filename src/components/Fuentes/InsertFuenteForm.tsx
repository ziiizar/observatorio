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
      editors: "",
      frequency: 2,
      url: "",
      matter: "",
      id_eje: 1,
      is_monitoring: false,
    },
  });

  const onSubmit = async (data: TSInsertFuenteSchema) => {
    await insertFuente(data).then((resp) => console.log(resp));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl  shadow-shadowBlack p-6">
      <p className="text-4xl font-bold">Registra una fuente.</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
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
          className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
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
          className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
          htmlFor="editors"
        >
          <input
            className="outline-none w-full"
            placeholder="Editor"
            {...register("editors")}
            type="text"
            name="editors"
          />
        </label>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
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
            className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
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
            className="flex gap-4 border border-shark-950 rounded-lg \ items-center p-2"
            htmlFor="matter"
          >
            <input
              className="outline-none w-full"
              placeholder="Materia"
              {...register("matter")}
              type="text"
              name="matter"
            />
          </label>
        </div>

        {/*  */}

        <select className="text-black" name="" id="">
          {ejes.map((eje) => (
            <option className="text-black" value={eje.id_eje} key={eje.id_eje}>
              {eje.nombre_eje}
            </option>
          ))}
        </select>

        <Button
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
        >
          Registrar Usuario
        </Button>
      </form>
    </div>
  );
};

export default InsertFuenteForm;
