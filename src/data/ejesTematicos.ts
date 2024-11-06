import { axiosInstance } from "@/lib/utils";
import { EjeTematico } from "@/types/ejeTEmatico";

export interface FetchEjesParams {
  orderBy?: "nombre_eje" | "id_eje" | "esta_activo";
  currentPage?: number;
  limit?: number;
  sortOrder?: "asc" | "desc";
}


interface FetchEjesResponse {
  ejes: EjeTematico[];
  total_pages: number;
  total_ejes: number;
}

export const fetchEjesTematicos = async ({
  orderBy = 'nombre_eje',
  currentPage = 1,
  limit,
  sortOrder = "asc",
}: FetchEjesParams): Promise<FetchEjesResponse> => {
  const offset = limit ? (currentPage - 1) * limit : 0;

  const params: Partial<FetchEjesParams> & { offset: number } = {
    ...(limit !== undefined && { limit }),
    offset,
    ...(orderBy && { orderBy }),
    ...(sortOrder && { sortOrder }),
  };

  const response = await axiosInstance.get<FetchEjesResponse>('ejes', { params });
  console.log(response.data);
  return response.data;
};
