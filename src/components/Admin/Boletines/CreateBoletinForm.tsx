"use client";

import {
  CreateBoletinSchema,
  TSCreateBoletinSchema,
} from "@/schemas/boletines"; // Asegúrate de tener el esquema en esta ubicación
import { createBoletin } from "@/services/boletines"; // La función para manejar la creación del boletín
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { toast } from "sonner";
import { Input } from "@/components/ui/Input"; // Si usas un input reutilizable
import { EjeTematico } from "@/types/ejeTEmatico";
import { useState } from "react";
import { axiosInstance } from "@/lib/utils";

const CreateBoletinForm = ({
  ejes,
  userId,
}: {
  ejes: EjeTematico[];
  userId: number;
}) => {
  const router = useRouter();
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSCreateBoletinSchema>({
    resolver: zodResolver(CreateBoletinSchema),
    defaultValues: {
      title: "",
      published_by: userId,
      content: "",
    },
  });

  const onSubmit = async (data: TSCreateBoletinSchema) => {
    const newData = {
      ...data,
      image: file,
    };

    const formData = new FormData();

    formData.append("title", newData.title);
    if (newData.image) formData.append("image", newData.image); // Agregar el archivo
    formData.append("theme", newData.theme.toString());
    formData.append("published_by", newData.published_by.toString());
    if (newData.labels)
      formData.append("labels", JSON.stringify(newData.labels));
    formData.append("content", newData.content);
    if (data.attached_document) {
      formData.append("attached_document", data.attached_document); // Añadir documento adjunto si existe
    }
 
    const resp = await axiosInstance.post("boletines/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Asegurarse de enviar datos como multipart/form-data
      },
    });
    console.log(resp);

    // if (resp.success) {
    //   toast.success(resp.success);
    //   router.push("/boletines"); // Redirigir al listado de boletines después de crear uno
    // }
    // if (resp.error) {
    //   toast.error(resp.error);
    // }
  };

  const firstError = (() => {
    const errorMessages = [
      errors.title?.message,
      errors.theme?.message,
      errors.published_by?.message,
      errors.content?.message,
      // errors.attached_document?.message,
      errors.labels?.message,
      errors.image?.message,
    ];
    return errorMessages.find(Boolean) || null;
  })();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitImage = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[500px] rounded-xl shadow-shadowBlack p-6">
      <p className="text-2xl font-bold">Crear un nuevo boletín</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="title"
        >
          <Input
            className="outline-none w-full"
            placeholder="Título"
            {...register("title")}
            type="text"
            name="title"
          />
        </label>

        <select
          {...register("theme")}
          className="h-11 px-4 rounded-lg border border-shark-950 bg-white text-black focus:outline-none "
        >
          <option value="" className="text-gray-500">
            Seleccione un eje temático
          </option>
          {ejes.map((eje) => (
            <option
              value={eje.id_eje}
              key={eje.id_eje}
              className="text-black hover:bg-dusty-gray-200 hover:text-black transition-all duration-300 ease-in-out"
            >
              {eje.nombre_eje}
            </option>
          ))}
        </select>

        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="content"
        >
          <Input
            className="outline-none w-full"
            placeholder="Contenido"
            {...register("content")}
            type="text"
            name="content"
          />
        </label>

        <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="image"
        >
          <Input
            className="outline-none w-full"
            // {...register("image")}
            onChange={handleFileChange}
            type="file"
            name="image"
          />
        </label>

        {/* <label
          className="flex gap-4 border border-shark-950 rounded-lg items-center p-2"
          htmlFor="attached_document"
        >
          <Input
            className="outline-none w-full"
            {...register("attached_document")}
            type="file"
            name="attached_document"
          />
        </label> */}

        {firstError && <h4 className="text-burgundy-900">{firstError}</h4>}

        <Button
          disabled={isSubmitting}
          className="bg-burgundy-900 text-white shadow-shadowRed"
          type="submit"
        >
          Crear Boletín
        </Button>
      </form>
      {/* <form onSubmit={handleSubmitImage}>
      <Input
            className="outline-none w-full"
            // {...register("image")}
            onChange={handleFileChange}
            type="file"
            name="image"
          />
          <button>Subir</button>
      </form> */}
    </div>
  );
};

export default CreateBoletinForm;
