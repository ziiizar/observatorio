import { cn } from "@/lib/utils";

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ children, className, ...props }) => {
  return (
    <tbody className={cn(className)} {...props}>
      {children}
    </tbody>
  );
};

export default TableBody;
