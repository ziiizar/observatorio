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

  console.log(patentData)

  const fieldOptions: (keyof Patente | "sourceData.organization" | "sourceData.materia" | "sourceData.frequency")[] = [
    "patent_office",
    "sourceData.organization",
    "sourceData.materia",
    "sourceData.frequency",
  ];
  
  const fieldLabels: Record<typeof fieldOptions[number], string> = {
    patent_office: "Oficina",
    "sourceData.organization": "Organización",
    "sourceData.materia": "Materia",
    "sourceData.frequency": "Frecuencia",
  };

  const [selectedField, setSelectedField] = useState<typeof fieldOptions[number]>("patent_office");

  const handleFieldChange = (value: typeof fieldOptions[number]) => {
    setSelectedField(value);
  };

  return (
    <div className="w-full h-full rounded-xl flex flex-col gap-4 p-4">
      <div className="flex">
        <div className="relative flex h-[450px] w-full">
          <PatentesPieChart data={patentData} selectedField={selectedField} />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 mb-4">
            <div>
              <label>Seleccionar Campo:</label>
              <Select
                onValueChange={(value) => handleFieldChange(value as typeof fieldOptions[number])}
                value={selectedField}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un campo" />
                </SelectTrigger>
                <SelectContent>
                  {fieldOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {fieldLabels[option]}
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
