"use client";

import { Patente } from "@/types/patente";
import { formattedRegistros} from "@/types/registro";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const PatentesSection = dynamic(() => import("./PatentesVisualizationPage"), { ssr: false });
const RegistrosSection = dynamic(() => import("./RegistrosVisualizationPage"), { ssr: false });

const GraphicsNavbar = ({patentData, registrationData}:{patentData:Patente[], registrationData: formattedRegistros[]}) => {
  const [selectedSection, setSelectedSection] = useState<
    "Patentes" | "Registros" 
  >("Patentes");

  const memoizedPatentes = useMemo(() => <PatentesSection  patentData={patentData}/>,[patentData]);
  const memoizedRegistros = useMemo(
    () => <RegistrosSection  registrationData={registrationData}/>,
    [registrationData]
  );


  return (
    <section className="flex flex-col gap-3">
      <nav className="grid grid-cols-3">
        <button
          className={`text-start border-b font-semibold ${
            selectedSection === "Patentes"
              ? "border-electric-lime-500 text-electric-lime-500 border-b-2"
              : "border-white/25"
          }`}
          onClick={() => setSelectedSection("Patentes")}
        >
          Patentes
        </button>
        <button
          className={`text-start border-b ${
            selectedSection === "Registros"
              ? "border-electric-lime-500 text-electric-lime-500 border-b-2"
              : "border-white/25"
          }`}
          onClick={() => setSelectedSection("Registros")}
        >
          Registros
        </button>
        
      </nav>

      <div style={{ display: selectedSection === "Patentes" ? "block" : "none" }}>
        {memoizedPatentes}
      </div>
      <div style={{ display: selectedSection === "Registros" ? "block" : "none" }}>
       
        {memoizedRegistros}
      </div>

      
    </section>
  );
};

export default GraphicsNavbar;
