import { axiosInstance } from "@/lib/utils";

export const fetchPatents = async ({
  currentPage = 1,
  limit,
  orderBy,
  sortOrder = 'asc',
}: {
  currentPage?: number;
  limit?: number;
  orderBy?: string;
  sortOrder?: string;
}) => {
  const offset = limit ? (currentPage - 1) * limit : 0;

  // Construir los parámetros dinámicamente
  const params: Record<string, any> = {
    ...(limit !== undefined && { limit }),
    offset,
    ...(orderBy && { orderBy }),
    sortOrder,
  };

  const patents = await axiosInstance.get(`patentes`, { params });
  return patents.data;
};

// Modificar también fetchPatentsTotalPages para ser opcional en el limit
export const fetchPatentsTotalPages = async ({ limit }: { limit?: number }) => {
  const params = limit ? { limit } : {};
  const totalPatents = await axiosInstance.get(`patentes/total-pages`, { params });
  return totalPatents.data;
};
