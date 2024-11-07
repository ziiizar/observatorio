'use client'

import { cn } from "@/lib/utils";
import React from "react";

// Interfaz para los elementos hijos que aceptan `columnIndex`
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  columnIndex?: number;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, className, ...props }) => {
  return (
    <tr className={cn("truncate max-w-20 text-sm border-b-2  border-dusty-gray-300", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Aseguramos que el hijo sea un elemento de tipo `TableCellProps` para permitir `columnIndex`
          return React.cloneElement(child as React.ReactElement<TableCellProps>, { columnIndex: index });
        }
        return child;
      })}
    </tr>
  );
};

export default TableRow;
