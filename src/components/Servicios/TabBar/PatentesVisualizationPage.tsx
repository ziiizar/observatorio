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
  // Agregar "total" a las opciones de campo
  const fieldOptions = ["total", "patent_office", "url", "fuente"];

  const [selectedField1, setSelectedField1] = useState(fieldOptions[1]);
  const [selectedField2, setSelectedField2] = useState(fieldOptions[0]);

  const handleField1Change = (value: string) => {
    setSelectedField1(value);
    if (value === selectedField2) {
      setSelectedField2(
        fieldOptions.find((option) => option !== value) || fieldOptions[0]
      );
    }
  };

  const handleField2Change = (value: string) => {
    setSelectedField2(value);
    if (value === selectedField1) {
      setSelectedField1(
        fieldOptions.find((option) => option !== value) || fieldOptions[1]
      );
    }
  };

  return (
    <div className="w-full h-full rounded-xl flex flex-col gap-4 p-4">
      
      <div className="flex ">
        <div className="relative flex h-[450px] w-full">
          <div className="absolute blur-2xl flex w-full h-full">
            <PatentesPieChart
              data={patentData}
              selectedField1={selectedField1}
              selectedField2={selectedField2}
            />
          </div>
          <div className="flex w-full h-full">
            <PatentesPieChart
              data={patentData}
              selectedField1={selectedField1}
              selectedField2={selectedField2}
            />
          </div>
        </div>
        <div className="flex flex-col">
          
          <div className="flex gap-4 mb-4">
            <div>
              <label>Seleccionar Campo 1:</label>
              <Select onValueChange={handleField1Change} value={selectedField1}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un campo" />
                </SelectTrigger>
                <SelectContent>
                  {fieldOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      disabled={option === selectedField2}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label>Seleccionar Campo 2:</label>
              <Select onValueChange={handleField2Change} value={selectedField2}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un campo" />
                </SelectTrigger>
                <SelectContent>
                  {fieldOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      disabled={option === selectedField1}
                    >
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
