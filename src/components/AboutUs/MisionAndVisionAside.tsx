'use client'

import { Dispatch, SetStateAction } from "react";
import AsideCard from "./AsideCard";

const MisionAndVisionAside = ({setSelectedSection, selectedSection}:{setSelectedSection:Dispatch<SetStateAction<"mision" | "vision">>, selectedSection:'mision' | 'vision'}) => {



  return (
    <section className="w-[33%] flex flex-col gap-4 h-full place-content-center items-center">
          <AsideCard description="Facilitar el acceso a información actualizada sobre avances tecnológicos en minería y energía en Cuba."

            color={selectedSection === 'mision' ? 'selected': 'unselected' }
            // image={HealthInsurance} 
            name="Mision" 
            onClick={() => setSelectedSection('mision')}
          />
          <AsideCard 
          description="Ser un referente en la divulgación de innovaciones tecnológicas en minería y energía en el país"
          color={selectedSection === 'vision' ? 'selected' : 'unselected'}
            // image={LifeInsurance} 
            name="Vision" 
            onClick={() => {setSelectedSection('vision'), console.log('ejecutao')}}
          />
        </section>
  )
}

export default MisionAndVisionAside