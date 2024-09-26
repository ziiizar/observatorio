import FuenteCard from "@/components/Fuentes/FuenteCard";
import { fetchFuentes } from "@/data/fuentes";
import { Fuente } from "@/types/fuente";

const Page = async () => {
  const fuentes: Fuente[] = await fetchFuentes();




  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col gap-4 border border-black">
        {fuentes.map((fuente) => (
          <FuenteCard fuente={fuente} key={fuente.id}></FuenteCard>
        ))}
      </div>
    </div>
  );
};

export default Page;
