import { cn } from "@/lib/utils";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, className, isHeader = false, ...props }) => {
  return (
    <tr
      className={cn(isHeader && "bg-muted/50 font-medium rounded-xl h-10", className)}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;
