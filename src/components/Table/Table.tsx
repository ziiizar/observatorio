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
      <div className="w-full overflow-x-auto rounded-t-2xl  scrollbar-hide border-t-2 border-x-2 border-dusty-gray-300 h-full">
        <table 
          className={cn(
            "w-full table-auto text-left",
            "text-[clamp(0.75rem,2vw,1rem)]",
            "p-2 md:p-4",
            className
          )} 
          {...props}
        >
          {children}
        </table>
      </div>
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