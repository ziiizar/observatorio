import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import jsPDF from "jspdf";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export const axiosInstance = axios.create(
    {
        baseURL:"http://127.0.0.1:8000/",
        withCredentials: true
    }
)


export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


// axiosInstance.interceptors.request.use(config =>{
//     const token = useLoged.getState().token
//     config.headers = {
//         Authorization: `Bearer ${token}`
//     }
//     return config
// })



export const exportTableToPDF = () => {
  const doc = new jsPDF();

  // Selecciona la tabla del DOM
  const table = document.querySelector("table");
  
  if (!table) return; // Asegurarse que la tabla existe

  // Obtener todas las filas de la tabla (head y body)
  const rows = table.querySelectorAll("tr");

  let startY = 10; // Posición inicial en el PDF
  
  // Recorre cada fila de la tabla
  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("th, td"); // Selecciona celdas

    cells.forEach((cell, cellIndex) => {
      doc.text(cell.innerText, 10 + (cellIndex * 40), startY); // Ajusta las posiciones X, Y
    });

    startY += 10; // Incrementa Y para la siguiente fila
  });

  // Guardar el PDF
  doc.save("table_data.pdf");
};