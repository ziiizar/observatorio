"use client";

import { useState } from "react";
import PatentesPieChart from "../PatentesPieChart";
import { Patente } from "@/types/patente";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

const PatentesVisualizationPage = ({
  patentData,
}: {
  patentData: Patente[];
}) => {
  // Definimos fieldOptions como un arreglo de las claves de Patente
  const fieldOptions: (keyof Patente)[] = ["patent_office", "url", "sourceData"];

  // Estado para el campo seleccionado
  const [selectedField, setSelectedField] = useState<keyof Patente>(fieldOptions[0]);

  const handleFieldChange = (value: keyof Patente) => {
    setSelectedField(value);
  };

  return (
    <div className="w-full h-full rounded-xl flex flex-col gap-4 p-4">
      <div className="flex">
        <div className="relative flex h-[450px] w-full">
          <div className="absolute blur-2xl flex w-full h-full">
            <PatentesPieChart data={patentData} selectedField={selectedField} />
          </div>
          <div className="flex w-full h-full">
            <PatentesPieChart data={patentData} selectedField={selectedField} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 mb-4">
            <div>
              <label>Seleccionar Campo:</label>
              <Select onValueChange={(value) => handleFieldChange(value as keyof Patente)} value={selectedField}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un campo" />
                </SelectTrigger>
                <SelectContent>
                  {fieldOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentesVisualizationPage;
