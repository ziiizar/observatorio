import { axiosInstance } from "@/lib/utils";
import { TSInsertFuenteSchema } from "@/schemas/fuentes";

export const insertFuente = async (data: TSInsertFuenteSchema) => {
  const {
    editors,
    frequency,
    id_eje,
    is_monitoring,
    matter,
    organization,
    title,
    url,
  } = data;

  try {
    const resp = await axiosInstance.post("insert", {
      editors,
      frequency,
      id_eje,
      is_monitoring,
      matter,
      organization,
      title,
      url,
    });

    return { success: "Fuente insertada" };
  } catch (error) {
    return { error: "Error" };
  }
};
