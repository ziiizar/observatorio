'use server'

import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import {
  TSDeleteEjeSchema,
  TSInsertEjeSchema,
  TSUpdateEjeSchema,
} from "@/schemas/ejes";
import { revalidatePath } from "next/cache";

export const insertEje = async (data: TSInsertEjeSchema) => {
  const {
   nombre_eje,esta_activo
  } = data;

  console.log(data);

  try {
    const resp = await axiosInstance.post("insert-eje", {
      nombre_eje,esta_activo
    });

    revalidatePath(routes.adminEstadisticas)
    return { success: "Eje insertado" };
  } catch (error) {
    return { error: "Error" };
  }
};

export const updateEje = async (data: TSUpdateEjeSchema) => {
  const {
    id_eje,
   nombre_eje,esta_activo
  } = data;

  console.log(data);

  try {
    const resp = await axiosInstance.put("edit-eje", {
      id_eje,
     esta_activo,nombre_eje
    });

    revalidatePath(routes.adminEstadisticas)

    return { success: "Eje Editado" };
  } catch (error) {
    return { error: "Error" };
  }
};
export const deleteEje = async (data: TSDeleteEjeSchema) => {
  const { id_eje } = data;

  console.log(data)
  console.log(id_eje)

  try {
    const resp = await axiosInstance.delete(`delete-eje/${id_eje}`
      
    );

    revalidatePath(routes.adminEstadisticas)

    return { success: "Eje Eliminado" };
  } catch (error) {
    return { error: "Error" };
  }
};