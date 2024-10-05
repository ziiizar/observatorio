import NavLinks from "@/components/Admin/NavLinks";
import { cn } from "@/lib/utils";

const Aside = ({children}) => {
  return (
    <aside className={cn("min-w-[200px] max-w-[220px] flex-1  flex flex-col justify-between text-white text-start pt-8 pl-8 mt-4  bg-burgundy-900 rounded-2xl", )}>
      <div className="flex flex-col gap-8 text-start">
        {children}
      </div>
      
    </aside>
  );
};

export default Aside;
