import { cn } from "@/lib/utils";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children, className, ...props }) => {
  return (
    <table className={cn("rounded-xl table-auto text-left  w-full overflow-auto", className)} {...props}>
      {children}
    </table>
  );
};

export default Table;
