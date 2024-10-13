import { axiosInstance } from "@/lib/utils";

export const fetchEjesTematicos = async ({
  orderBy='nombre_eje',
  currentPage = 1,
  limit = undefined,
  sortOrder = "asc",
}: {
  orderBy?: string;
  currentPage?: number;
  limit?: number;
  sortOrder?: string;
}) => {
  const offset = limit ? (currentPage - 1) * limit : 0;

  const params: Record<string, any> = {
    ...(limit !== undefined && { limit }), // Incluir solo si está definido
    ...({ offset }), // Incluir solo si está definido
    ...(orderBy !== undefined && { orderBy }), // Incluir solo si está definido
    ...(sortOrder !== undefined && { sortOrder }), // Incluir solo si está definido
  };

  const ejes = await axiosInstance.get(
    `ejes`, {params}
  );
  console.log(ejes.data);
  return ejes.data;
};
