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
import { outfit } from "@/styles/fonts";

export interface TableHeadRowProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  columnIndex: number;
}

const TableHeadRow: React.FC<TableHeadRowProps> = ({ children, className, columnIndex, ...props }) => {
  const { toggleColumnExpansion } = useTableContext();

  const handleHeaderClick = () => {
    toggleColumnExpansion(columnIndex);
  };

  return (
    <th
      className={cn("font-medium text-muted-foreground px-4 py-2 cursor-pointer", outfit.className, className)}
      onDoubleClick={handleHeaderClick}
      {...props}
    >
      {children}
    </th>
  );
};

export default TableHeadRow;
