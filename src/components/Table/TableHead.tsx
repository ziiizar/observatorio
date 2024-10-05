import { cn } from "@/lib/utils";

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableHead: React.FC<TableHeaderProps> = ({ children, className, ...props }) => {
  return (
    <thead className={cn('bg-dusty-gray-300 scale-x-[100.25%]',className)} {...props}>
      {children}
    </thead>
  );
};

export default TableHead;