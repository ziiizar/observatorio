import NavLinks from "@/components/Admin/NavLinks";
import { cn } from "@/lib/utils";

const Aside = () => {
  return (
    <aside className={cn("min-w-[220px] max-w-[250px] flex-1  flex flex-col justify-between text-white text-start pt-8 pl-8  m-4  bg-burgundy-900 rounded-2xl", )}>
      <div className="flex flex-col gap-8 text-start">
        <NavLinks></NavLinks>
      </div>
      
    </aside>
  );
};

export default Aside;
