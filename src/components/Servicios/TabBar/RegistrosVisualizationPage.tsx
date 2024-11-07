"use client";
import React, { useState } from "react";
import RegistrosBarChart from "../RegistrosBarChart";
import { formattedRegistros } from "@/types/registro";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

const RegistrosVisualizationPage = ({
  registrationData,
}: {
  registrationData: formattedRegistros[];
}) => {
  const fieldOptions: (keyof formattedRegistros)[] = [
    "title",
    "creators",
    "subject",
    "publisher",
    "date",
    "type",
    "format",
    "identifier",
    "language",
    "source",
  ];

  const [selectedField1, setSelectedField1] = useState<keyof formattedRegistros>(fieldOptions[0]);

  const handleField1Change = (value: keyof formattedRegistros) => {
    setSelectedField1(value);
  };

  return (
    <div className="w-full h-full rounded-xl flex flex-col gap-4 p-4">
      <div className="flex flex-col">
        <h4>Registros por Año.</h4>
        <Select onValueChange={handleField1Change} value={selectedField1}>
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

      <div className="flex w-full h-full">
        <RegistrosBarChart data={registrationData} selectedValue={selectedField1} />
      </div>
    </div>
  );
};

export default RegistrosVisualizationPage;
