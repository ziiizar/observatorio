'use server'

import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import {
  TSDeleteFuenteSchema,
  TSInsertFuenteSchema,
  TSUpdateFuenteSchema,
} from "@/schemas/fuentes";
import { revalidatePath } from "next/cache";

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

    revalidatePath(routes.adminFuentes)
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

    revalidatePath(routes.adminFuentes)

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

    revalidatePath(routes.adminFuentes)

    return { success: "Fuente Eliminada" };
  } catch (error) {
    return { error: "Error" };
  }
};

export const startMonitoring = async (fuenteId: number) => {
  try {
    console.log("Iniciado")
    // const resp = await axiosInstance.get(`start-monitoring/${fuenteId}`)
    return {succes: "Fuente monitoreada"}
  } catch (error) {
    return {error: "Error"}
  }
}
export const stopMonitoring = async (fuenteId: number) => {
  try {
    console.log("Detenido")

    // const resp = await axiosInstance.get(`stop-monitoring/${fuenteId}`)
    return {succes: "Monitoreo detenido"}
  } catch (error) {
    return {error: "Error"}
  }
}