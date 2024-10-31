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
import Button from "../ui/Button";

interface OrderByProps {
  columns: { [key: string]: string }; // Objeto que representa los campos de la tabla
}

const OrderBy: React.FC<OrderByProps> = ({ columns }) => {
  const [selectedField, setSelectedField] = useState<string>(Object.keys(columns)[0]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateUrlParams = (field: string, order: "asc" | "desc") => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (field) {
      params.set('orderBy', field);
    } else {
      params.delete('orderBy');
    }
    params.set('order', order);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFieldChange = (value: string) => {
    setSelectedField(value);
    updateUrlParams(value, sortOrder);
  };

  const handleOrderChange = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    updateUrlParams(selectedField, newOrder);
  };

  return (
    <div className="flex items-center gap-4">
      <Select onValueChange={handleFieldChange}>
        <SelectTrigger className="h-11 px-6">
          <SelectValue placeholder={"Ordenar por"} />
        </SelectTrigger>
        <SelectContent className="min-w-10 max-h-48">
          {Object.entries(columns).map(([key, label]) => (
            <SelectItem className="hover:bg-dusty-gray-200 transition-all duration-300 ease-in-out" key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        onClick={handleOrderChange}
        className="bg-burgundy-900 text-white px-3 py-2 rounded"
      >
        {sortOrder === "asc" ? "Ascendente" : "Descendente"}
      </Button>
    </div>
  );
};

export default OrderBy;
