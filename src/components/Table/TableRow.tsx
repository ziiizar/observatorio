import { cn } from "@/lib/utils";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, className, isHeader = false, ...props }) => {
  return (
    <tr
      className={cn('truncate max-w-20  text-sm ', className)}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;
