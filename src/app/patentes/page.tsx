


import { fetchPatents } from "@/data/patents";
import { Patente } from "@/types/patente";

const Page = async () => {
  const patents: Patente[] = await fetchPatents();

  return (
    <div className="w-screen h-screen">
      <div className="flex gap-4 border border-black">
        {patents.map((patent) => (
          <>
            <h3 key={patent.id}>{patent.abstract}</h3>
            <h4>{patent.source?.id}</h4>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
