import React from 'react'
import RegistrosBarChart from '../RegistrosBarChart'

const RegistrosVisualizationPage = ({registrationData}) => {
  return (
    <div className=" w-full  h-full rounded-xl  flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <h4>Registros por Año.</h4>

          <div></div>
          {/* <Button className="w-36 border-burgundy-900 border-2 text-burgundy-900">
          Exportar
        </Button> */}
        </div>
    

        <div className="flex w-full h-full">
          <RegistrosBarChart data={registrationData}></RegistrosBarChart>
          {/* <RegistrationLineChart data={registrationData}></RegistrationLineChart> */}
        </div>
      </div>
  )
}

export default RegistrosVisualizationPage
