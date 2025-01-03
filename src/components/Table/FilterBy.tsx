'use client';

import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface FiltersProps {
  filters: { [key: string]: string[] }; // Objeto que representa las categorías y sus opciones
}

const FilterBy: React.FC<FiltersProps> = ({ filters }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const updateUrlParams = (category: string | undefined, value: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (category && value) {
      params.set(category, value);
    } else {
      params.delete(category || "");
    }

    // Reiniciar la paginación al aplicar un filtro
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedValue(undefined); // Reiniciar el valor seleccionado al cambiar de categoría
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    updateUrlParams(selectedCategory, value || undefined);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Select para categorías */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Categoría</label>
        <select
          className="border px-3 py-2 rounded-md"
          value={selectedCategory || ""}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar categoría
          </option>
          {Object.keys(filters).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Select para valores de la categoría seleccionada */}
      {selectedCategory && (
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Valor</label>
          <select
            className="border px-3 py-2 rounded-md"
            value={selectedValue || ""}
            onChange={(e) => handleValueChange(e.target.value)}
          >
            <option value="">Todos</option>
            {filters[selectedCategory]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FilterBy;
