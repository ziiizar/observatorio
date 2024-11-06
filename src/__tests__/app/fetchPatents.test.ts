// __tests__/fetchPatents.test.ts
import { fetchPatents } from "@/data/patents";
import { axiosInstance } from "@/lib/utils";

jest.mock('@/lib/utils', () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

describe('fetchPatents', () => {
  it('debe retornar los datos de patentes correctamente', async () => {
    // Simula la respuesta de Axios
    const mockResponse = { data: { patents: [{ id: 1, title: "Patent 1" }] } };
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await fetchPatents({ currentPage: 1, limit: 10, orderBy: "patent_office", sortOrder: "asc" });
    expect(result).toEqual(mockResponse.data);
    expect(axiosInstance.get).toHaveBeenCalledWith("patentes", {
      params: { limit: 10, offset: 0, orderBy: "title", sortOrder: "asc" },
    });
  });

  it('debe manejar errores correctamente', async () => {
    (axiosInstance.get as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchPatents({ currentPage: 1, limit: 10 })).rejects.toThrow("Network Error");
  });
});
