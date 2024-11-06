// exportTableToExcel.test.ts
import * as XLSX from "xlsx";
import { exportTableToExcel } from "@/lib/exports"; // Ajusta la ruta según sea necesario

jest.mock("xlsx", () => ({
  utils: {
    table_to_book: jest.fn(),
  },
  writeFile: jest.fn(),
}));

describe("exportTableToExcel", () => {
  beforeEach(() => {
    // Limpiar los mocks antes de cada prueba
    jest.clearAllMocks();
    // Limpiar el DOM
    document.body.innerHTML = "";
  });

  it("should export the table to Excel if the table exists", () => {
    // Crear un elemento de tabla en el DOM
    const table = document.createElement("table");
    document.body.appendChild(table);
    
    // Simular el retorno de table_to_book
    const workbook: XLSX.WorkBook = { SheetNames: [], Sheets: {} }; // Objeto simulado del libro de trabajo
    (XLSX.utils.table_to_book as jest.Mock).mockReturnValue(workbook);

    exportTableToExcel();

    // Verificar que las funciones de XLSX han sido llamadas
    expect(XLSX.utils.table_to_book).toHaveBeenCalledWith(table, { sheet: "Sheet1" });
    expect(XLSX.writeFile).toHaveBeenCalledWith(workbook, "table_data.xlsx");
  });

  it("should do nothing if no table is found", () => {
    // Llamar a la función sin añadir una tabla al DOM
    exportTableToExcel();

    // Verificar que no se haya llamado a las funciones de XLSX
    expect(XLSX.utils.table_to_book).not.toHaveBeenCalled();
    expect(XLSX.writeFile).not.toHaveBeenCalled();
  });
});
