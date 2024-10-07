import { axiosInstance } from "@/lib/utils";
import {
  TSDeleteFuenteSchema,
  TSInsertFuenteSchema,
  TSUpdateFuenteSchema,
} from "@/schemas/fuentes";

export const insertFuente = async (data: TSInsertFuenteSchema) => {
  const {
    editores,
    frequency,
    id_eje,
    is_monitoring,
    materia,
    organization,
    title,
    url,
  } = data;

  console.log(data);

  try {
    const resp = await axiosInstance.post("insert-fuente", {
      editores,
      frequency,
      id_eje,
      is_monitoring,
      materia,
      organization,
      title,
      url,
    });

    return { success: "Fuente insertada" };
  } catch (error) {
    return { error: "Error" };
  }
};

export const updateFuente = async (data: TSUpdateFuenteSchema) => {
  const {
    id,
    editores,
    frequency,
    id_eje,
    is_monitoring,
    materia,
    organization,
    title,
    url,
  } = data;

  console.log(data);

  try {
    const resp = await axiosInstance.put("edit-fuente", {
      id,
      editores,
      frequency,
      id_eje,
      is_monitoring,
      materia,
      organization,
      title,
      url,
    });

    return { success: "Fuente Editada" };
  } catch (error) {
    return { error: "Error" };
  }
};
export const deleteFuente = async (data: TSDeleteFuenteSchema) => {
  const { id } = data;

  console.log(data)
  console.log(id)

  try {
    const resp = await axiosInstance.delete(`delete-fuente/${id}`
      
    );

    return { success: "Fuente Eliminada" };
  } catch (error) {
    return { error: "Error" };
  }
};

