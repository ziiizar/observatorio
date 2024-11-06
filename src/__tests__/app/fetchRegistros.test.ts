// __tests__/fetchRegistros.test.ts
import { fetchRegistros } from "@/data/registros";
import { axiosInstance } from "@/lib/utils";

jest.mock('@/lib/utils', () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

describe('fetchRegistros', () => {
  it('debe retornar los datos de registros correctamente', async () => {
    const mockResponse = { data: { registros: [{ id: 1, name: "Registro 1" }] } };
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await fetchRegistros({ currentPage: 1, limit: 10, orderBy: "name", sortOrder: "asc" });
    expect(result).toEqual(mockResponse.data);
    expect(axiosInstance.get).toHaveBeenCalledWith("registros?limit=10&offset=0&orderBy=name&sortOrder=asc");
  });

  it('debe manejar errores correctamente', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchRegistros({ currentPage: 1, limit: 10 })).rejects.toThrow("Network Error");
  });
});
