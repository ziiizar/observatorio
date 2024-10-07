"use client";


import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext } from "react";

interface TableContextType {
  expandedColumns: Set<number>;
  toggleColumnExpansion: (columnIndex: number) => void;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children, className, ...props }) => {
  const [expandedColumns, setExpandedColumns] = useState<Set<number>>(new Set());

  const toggleColumnExpansion = (columnIndex: number) => {
    setExpandedColumns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(columnIndex)) {
        newSet.delete(columnIndex);
      } else {
        newSet.add(columnIndex);
      }
      return newSet;
    });
  };

  return (
    <TableContext.Provider value={{ expandedColumns, toggleColumnExpansion }}>
      <table className={cn("rounded-xl text-left w-full overflow-auto table-auto", className)} {...props}>
        {children}
      </table>
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a Table component");
  }
  return context;
};

export default Table;
