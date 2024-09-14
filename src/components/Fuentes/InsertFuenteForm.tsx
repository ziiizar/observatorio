"use client";

import { InsertFuenteSchema, TSInsertFuenteSchema } from "@/schemas/fuentes";
import { insertFuente } from "@/services/fuente";
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const InsertFuenteForm = ({ ejes }: { ejes: EjeTematico[] }) => {
//   console.log(ejes);

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
      frequency: 1,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="outline-none w-full"
        placeholder="Titulo"
        {...register("title")}
        type="text"
        name="title"
      />
      <input
        className="outline-none w-full"
        placeholder="Organizacion"
        {...register("organization")}
        type="text"
        name="organization"
      />
      <input
        className="outline-none w-full"
        placeholder="URL"
        {...register("url")}
        type="text"
        name="url"
      />
      <input
        className="outline-none w-full"
        placeholder="Materia"
        {...register("matter")}
        type="text"
        name="matter"
      />
      <input
        className="outline-none w-full"
        placeholder="Frecuencia"
        {...register("frequency")}
        type="text"
        name="frequency"
      />
      <input
        className="outline-none w-full"
        placeholder="Editor"
        {...register("editors")}
        type="text"
        name="editors"
      />

      <select name="" id="">
        {ejes.map((eje) => (
          <option  className="text-black" value={eje.id_eje} key={eje.id_eje}>{eje.name}</option>
        ))}
      </select>

      <button>Crear</button>
    </form>
  );
};

export default InsertFuenteForm;
