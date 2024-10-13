import { axiosInstance } from "@/lib/utils";

export const fetchRegistros = async ({
  currentPage,
  limit,
  orderBy,
  sortOrder = 'asc',
}: {
  currentPage: number;
  limit: number;
  orderBy?: string;
  sortOrder?: string;
}) => {
  const offset = (currentPage - 1) * limit;
  const registros = await axiosInstance.get(
    `registros?limit=${limit}&offset=${offset}&orderBy=${orderBy}&sortOrder=${sortOrder}`
  );
  return registros.data;
};

export const fetchRegistrosTotalPages = async ({ limit }) => {
  const totalRegistros = await axiosInstance.get(
    `registros/total-pages?limit=${limit}`
  );
  return totalRegistros.data;
};
