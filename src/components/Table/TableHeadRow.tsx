// import { cn } from "@/lib/utils";

// export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
//   children: React.ReactNode;
// }

// const TableHeadRow: React.FC<TableHeadProps> = ({ children, className, ...props }) => {
//   return (
//     <th
//       className={cn("font-medium  text-muted-foreground  px-4 py-2", className)}
//       {...props}
//     >
//       {children}
//     </th>
//   );
// };

// export default TableHeadRow;





'use client'

import { cn } from "@/lib/utils";
import { useTableContext } from "./Table";

export interface TableHeadRowProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  columnIndex: number; // Índice de la columna
}

const TableHeadRow: React.FC<TableHeadRowProps> = ({ children, className, columnIndex, ...props }) => {
  const { expandedColumns, toggleColumnExpansion } = useTableContext();

  // Verificar si la columna está expandida
  const isExpanded = expandedColumns.has(columnIndex);

  const handleHeaderClick = () => {
    toggleColumnExpansion(columnIndex); // Alternar expansión de la columna
  };

  return (
    <th
      className={cn("font-medium text-muted-foreground px-4 py-2 cursor-pointer", className)}
      onClick={handleHeaderClick} // Añadimos el evento de clic
      {...props}
    >
      {children}
      {/* Mostrar un indicador visual si está expandido o no */}
      <span className="ml-2 text-blue-600">
        {isExpanded ? "Ver menos" : "Ver mas"}
      </span>
    </th>
  );
};

export default TableHeadRow;
