'use client'

import * as XLSX from "xlsx";

// export const exportTableToPDF = () => {
//     const doc = new jsPDF();
  
//     // Selecciona la tabla del DOM
//     const table = document.querySelector("table");
    
//     if (!table) return; // Asegurarse que la tabla existe
  
//     // Obtener todas las filas de la tabla (head y body)
//     const rows = table.querySelectorAll("tr");
  
//     let startY = 10; // Posición inicial en el PDF
    
//     // Recorre cada fila de la tabla
//     rows.forEach((row, rowIndex) => {
//       const cells = row.querySelectorAll("th, td"); // Selecciona celdas
  
//       cells.forEach((cell, cellIndex) => {
//         doc.text(cell.innerText, 10 + (cellIndex * 40), startY); // Ajusta las posiciones X, Y
//       });
  
//       startY += 10; // Incrementa Y para la siguiente fila
//     });
  
//     // Guardar el PDF
//     doc.save("table_data.pdf");
//   };


 export const exportTableToExcel = () => {
    // Seleccionar la tabla del DOM
    const table = document.querySelector("table");
  
    if (!table) return;
  
    // Convertir la tabla HTML en un libro de Excel
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
  
    // Generar el archivo Excel (.xlsx)
    XLSX.writeFile(workbook, "table_data.xlsx");
  };