'use server';

import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";  // Asegúrate de que axiosInstance esté configurado correctamente
import { TSCreateBoletinSchema } from "@/schemas/boletines"; // Importa el esquema de Boletín
import { revalidatePath } from "next/cache";

// Función para crear un boletín
export const createBoletin = async (data: TSCreateBoletinSchema) => {
  const { title, image, theme, published_by, labels, content } = data;

  console.log(data)

  try {
    // Asegurarse de que theme y published_by sean números
    const themeNumber = Number(theme);
    const publishedByNumber = Number(published_by);

    if (isNaN(themeNumber) || isNaN(publishedByNumber)) {
      throw new Error("El tema y el publicado por deben ser números válidos.");
    }

    // Crear FormData para manejar los archivos
    const formData = new FormData();
    formData.append("title", title);
    formData.append("theme", themeNumber.toString()); // Asegúrate de que se pase como string
    formData.append("published_by", publishedByNumber.toString()); // Asegúrate de que se pase como string
    formData.append("content", content);
    
    if (image) formData.append("image", image); // Adjuntar imagen si existe
    // if (attached_document) formData.append("attached_document", attached_document); // Adjuntar documento si existe
    if (labels) formData.append("labels", JSON.stringify(labels)); // Convertir labels a JSON si existe

    const response = await axiosInstance.post("boletines/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Asegurarse de enviar datos como multipart/form-data
      },
    });

    if (!response) throw new Error("Error durante la creación del boletín");

    // Revalidar la ruta después de crear el boletín
    revalidatePath(routes.boletines); 
    return { success: "Boletín creado con éxito" };
    
  } catch (error) {
    const err = error as { response?: { data?: { detail?: string } } }; // Casting de error
    return { error: "Error al crear el boletín: " + (err.response?.data?.detail || (error as Error).message) };
  }
};


