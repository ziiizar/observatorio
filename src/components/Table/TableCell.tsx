// "use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import { useTableContext } from "./Table"; // Usamos el contexto de la tabla

// export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
//   children: React.ReactNode;
//   truncationLimit?: number;
//   columnIndex: number; // Índice de la columna
// }

// const TableCell: React.FC<TableCellProps> = ({ children, className, truncationLimit = 30, columnIndex, ...props }) => {
//   const { expandedColumns, toggleColumnExpansion } = useTableContext();
//   const isExpanded = expandedColumns.has(columnIndex);

//   const toggleExpansion = () => {
//     toggleColumnExpansion(columnIndex);
//   };

//   const renderContent = () => {
//     if (typeof children === "string") {
//       return isExpanded || children.length <= truncationLimit
//         ? children
//         : `${children.slice(0, truncationLimit)}...`;
//     }
//     return children;
//   };

//   return (
//     <td
//       className={cn("p-2 align-middle px-4 py-2 cursor-pointer", className)}
//       onClick={toggleExpansion}
//       {...props}
//     >
//       {renderContent()}
//       {typeof children === "string" && children.length > truncationLimit && (
//         <span className="ml-2 text-blue-600">{isExpanded ? "Ver menos" : ""}</span>
//       )}
//     </td>
//   );
// };

// export default TableCell;


'use client'

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTableContext } from "./Table";
import { zodiak } from "@/styles/fonts";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  truncationLimit?: number;
  columnIndex: number; // Índice de la columna
}

const TableCell: React.FC<TableCellProps> = ({ children, className, truncationLimit = 30, columnIndex, ...props }) => {
  const { expandedColumns } = useTableContext();

  // Verificar si la columna está expandida
  const isExpanded = expandedColumns.has(columnIndex);

  // Función para renderizar contenido truncado o completo
  const renderContent = () => {
    if (typeof children === "string") {
      return isExpanded || children.length <= truncationLimit
        ? children
        : `${children.slice(0, truncationLimit)}...`;
    }
    return children; // Si no es string, renderizamos el contenido tal cual
  };

  return (
    <td className={cn("p-2 align-middle px-4 py-2", zodiak.className, className)} {...props}>
      {renderContent()}
    </td>
  );
};

export default TableCell;
