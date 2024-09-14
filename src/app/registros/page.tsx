


import { fetchRegistro } from "@/data/registros";
import { Registros } from "@/types/registro";

const Page = async () => {
  const registros: Registros[] = await fetchRegistro();

  return (
    <div className="w-screen h-screen">
      <div className="flex gap-4 border border-black">
        {registros.map((registro) => (
          <>
            <h3 key={registro.id}>{registro.header.title}</h3>
            <h4>{registro.source?.id}</h4>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
