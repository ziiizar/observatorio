// "use client";


// import { cn } from "@/lib/utils";
// import React from "react";

// export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
//   children: React.ReactNode;
//   isHeader?: boolean;
// }

// const TableRow: React.FC<TableRowProps> = ({ children, className, isHeader = false, ...props }) => {
//   return (
//     <tr className={cn("truncate max-w-20 text-sm", className)} {...props}>
//       {React.Children.map(children, (child, index) => {
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, { columnIndex: index }); // Pasamos el índice de la columna
//         }
//         return child;
//       })}
//     </tr>
//   );
// };

// export default TableRow;

'use client'

import { cn } from "@/lib/utils";
import React from "react";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, className, isHeader = false, ...props }) => {
  return (
    <tr className={cn("truncate max-w-20 text-sm", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { columnIndex: index }); // Pasamos el índice de la columna
        }
        return child;
      })}
    </tr>
  );
};

export default TableRow;
