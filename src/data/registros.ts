import { axiosInstance } from "@/lib/utils";

export const fetchRegistros = async ({
  currentPage = 1,
  limit,
  orderBy = "title",
  sortOrder = 'asc',
}: {
  currentPage?: number;
  limit?: number;
  orderBy?: string;
  sortOrder?: string;
}) => {
  const offset = (currentPage - 1) * (limit ? limit : 0);
  const params: Record<string, any> = {
    ...(limit !== undefined && { limit }),
    offset,
    ...(orderBy && { orderBy }),
    sortOrder,
  };
  const registros = await axiosInstance.get(
    `registros`, {params}
  );
  return registros.data;
};

export const fetchRegistrosTotalPages = async ({ limit }:{limit:number}) => {
  const totalRegistros = await axiosInstance.get(
    `registros/total-pages?limit=${limit}`
  );
  return totalRegistros.data;
};
