import { cn } from "@/lib/utils";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children, className, ...props }) => {
  return (
    <td
      className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 px-4 py-2", className)}
      {...props}
    >
      {children}
    </td>
  );
};

export default TableCell;
