import { axiosInstance } from "@/lib/utils";

export const fetchPatents = async ({
  currentPage = 1,
  limit,
  orderBy,
  sortOrder = 'asc',
  filter,
}: {
  currentPage?: number;
  limit?: number;
  orderBy?: string;
  sortOrder?: string;
  filter?: Record<string, string | number>; // Define el filtro como un objeto clave-valor
}) => {
  const offset = limit ? (currentPage - 1) * limit : 0;

  // Construir los parámetros dinámicamente
  const params: Record<string, any> = {
    ...(limit !== undefined && { limit }),
    offset,
    ...(orderBy && { orderBy }),
    sortOrder,
    ...(filter && filter), // Agregar filtro dinámicamente
  };


  const patents = await axiosInstance.get(`patentes`, { params });
  return patents.data;
};

export const fetchPatentsTotalPages = async ({
  limit,
  filter,
}: {
  limit?: number;
  filter?: Record<string, string | number>;
}) => {
  const params = {
    ...(limit !== undefined && { limit }),
    ...(filter && filter), // Incluir filtro si está presente
  };

  const totalPatents = await axiosInstance.get(`patentes/total-pages`, { params });
  return totalPatents.data;
};
