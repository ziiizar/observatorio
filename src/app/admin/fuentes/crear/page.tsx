import InsertFuenteForm from "@/components/Fuentes/InsertFuenteForm";
import { fetchEjesTematicos } from "@/data/ejesTematicos";

const page = async () => {
  const { ejes } = await fetchEjesTematicos({});

  return (
    <main className=" flex place-content-center items-center [grid-area:main] w-full h-full overflow-hidden  pt-4">
      <div className=" flex place-content-center items-center gap-2  h-full w-full overflow-auto scrollbar-hide">
        <InsertFuenteForm ejes={ejes}></InsertFuenteForm>
      </div>
    </main>
  );
};

export default page;
