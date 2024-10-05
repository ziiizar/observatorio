import { axiosInstance } from "@/lib/utils";
import { TSInsertFuenteSchema } from "@/schemas/fuentes";

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

  console.log(data)

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
