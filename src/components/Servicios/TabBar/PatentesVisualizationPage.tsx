import { cn } from "@/lib/utils";
import PatentesPieChart from "../PatentesPieChart";

const PatentesVisualizationPage = ({ patentData }) => {
  return (
    <div className=" w-full  h-full rounded-xl  flex flex-col gap-4 p-4">
      <div className="flex flex-col">
        <h4>Patentes por paises</h4>

        <div className="relative flex h-[450px] w-full">
          <div className="absolute blur-2xl flex w-full h-full">
            <PatentesPieChart data={patentData}></PatentesPieChart>
          </div>
          <div className="flex w-full h-full">
            <PatentesPieChart data={patentData}></PatentesPieChart>
            {/* <div className="w-1/4 flex flex-col justify-center">
        <h5 className="text-lg font-semibold mb-4">Leyenda</h5>
        <ul className="space-y-2">
          {patentData.map((item) => (
            <li key={item.id} className="flex items-center">
              <span 
                className={cn("w-4 h-4 mr-2 inline-block rounded-full")} 
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              ></span>
              <span>{item.country}: {item.cant}</span>
            </li>
          ))}
        </ul>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentesVisualizationPage;
