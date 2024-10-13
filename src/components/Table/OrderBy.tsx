'use client'
import { useState } from "react";
import { usePathname, useSearchParams, useRouter  } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
interface OrderByProps {
  columns: { [key: string]: string }; // Objeto que representa los campos de la tabla
}



const OrderBy: React.FC<OrderByProps> = ({ columns }) => {
    
    const [selectedField, setSelectedField] = useState<string>(Object.keys(columns)[0]);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
  

  const handleFieldChange = (value: string) => {
    const field = value;
    setSelectedField(field);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (field) {
      params.set('orderBy', field);
    } else {
      params.delete('orderBy');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleOrderChange = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  return (
    <div className="flex items-center gap-4">
      {/* <label htmlFor="orderby" className="text-sm font-medium">Ordenar por:</label> */}
      <Select
        
        // value={selectedField}
        onValueChange={handleFieldChange}
        // className="border border-gray-300 p-2 rounded"
      >
        <SelectTrigger className="h-10">
              <SelectValue placeholder={"Ordernar por"} />
            </SelectTrigger>
            <SelectContent className="min-w-10 max-h-48 ">{Object.entries(columns).map(([key, label]) => (
          <SelectItem className="hover:bg-dusty-gray-200 transition-all duration-300 ease-in-out" key={key} value={key}>
            {label}
          </SelectItem>
        ))}</SelectContent>
        
      </Select>
      <button
        onClick={handleOrderChange}
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        {sortOrder === "asc" ? "Ascendente" : "Descendente"}
      </button>
    </div>
  );
};

export default OrderBy;
