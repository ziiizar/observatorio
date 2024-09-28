import { cn } from "@/lib/utils";

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const TableHeadRow: React.FC<TableHeadProps> = ({ children, className, ...props }) => {
  return (
    <th
      className={cn("font-medium text-muted-foreground  px-4 py-2", className)}
      {...props}
    >
      {children}
    </th>
  );
};

export default TableHeadRow;
