"use client";

import {TSUpdateFuenteSchema, UpdateFuenteSchema } from "@/schemas/fuentes";
import { updateFuente } from "@/services/fuente"; // Asegúrate de tener este servicio para actualizar
import { EjeTematico } from "@/types/ejeTEmatico";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { Fuente } from "@/types/fuente";
import { useEffect, useState } from "react";
import { fetchEjesTematicos } from "@/data/ejesTematicos";

const EditFuenteForm = ({
 
  fuente,
  onClose,
}: {
  
  fuente: Fuente;
  onClose: () => void;
}) => {

    console.log(fuente)
const [ejes, setEjes] = useState<EjeTematico[] | null>(null)

    useEffect(() => {
        const fetchEjes = async () => {
          const ejes = await fetchEjesTematicos();
          setEjes(ejes);
        };
    
        fetchEjes();
      }, []);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSUpdateFuenteSchema>({
    resolver: zodResolver(UpdateFuenteSchema),
    defaultValues: {
      id:fuente.id,
      title: fuente.title || "",
      organization: fuente.organization || "",
      editores: fuente.editores || "",
      frequency: fuente.frequency || 2,
      url: fuente.url || "",
      materia: fuente.materia || "",
      id_eje: fuente.id_eje, 
      is_monitoring: fuente.is_monitoring || false,
    },
  });

  const onSubmit = async (data: TSUpdateFuenteSchema) => {
    await updateFuente(data) // Actualiza la fuente usando su ID
      .then((resp) => {
        console.log(resp);
        // onClose(); // Cierra el modal al completar la edición
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl shadow-shadowBlack p-6">
        
      <p className="text-4xl font-bold">Editar fuente</p>
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
            name="editores"
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
              type="number"
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
            {/* <option value="">Seleccione un eje temático</option>  */}
            {ejes?.map((eje) => (
              <option className="text-black" value={eje.id_eje} key={eje.id_eje}>
                {eje.nombre_eje}
              </option>
            ))}
          </select>
        </label>

        <div className="flex justify-end gap-4">
          <Button className="bg-gray-400 text-white" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            className="bg-burgundy-900 text-white shadow-shadowRed"
            type="submit"
            disabled={isSubmitting}
          >
            Guardar Cambios
          </Button>
        </div>
      </form>

      <div className="text-red-500">
          {errors.editores?.message
            ? errors.editores?.message
            : errors.frequency?.message
            ? errors.frequency?.message
            : errors.id_eje?.message
            ? errors.id_eje?.message
            :errors.is_monitoring?.message
            ? errors.is_monitoring?.message
            :errors.materia?.message
            ? errors.materia?.message
            :errors.organization?.message
            ? errors.organization?.message
            :errors.title?.message
            ? errors.title?.message
            :errors.url?.message
            ? errors.url?.message
            :null}
        </div>
        <Button onClick={onClose}>Cerrar</Button>
    </div>
  );
};

export default EditFuenteForm;
