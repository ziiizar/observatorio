import FuenteCard from "@/components/Fuentes/FuenteCard";
import { fetchFuentes } from "@/data/fuentes";
import useAuth from "@/hooks/useAuth";
import { Fuente } from "@/types/fuente";

const Page = async () => {
  const fuentes: Fuente[] = await fetchFuentes();

  // const user = useAuth();

  // if (!user) {
  //   return <p>Loading...</p>;
  // }



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
