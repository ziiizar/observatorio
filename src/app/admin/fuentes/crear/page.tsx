import InsertFuenteForm from "@/components/Fuentes/InsertFuenteForm";
import { fetchEjesTematicos } from "@/data/ejesTematicos";

const page = async () => {
  const ejes = await fetchEjesTematicos();

  return (
    <main className="my-4 flex place-content-center items-center">
      <InsertFuenteForm ejes={ejes}></InsertFuenteForm>
    </main>
  );
};

export default page;
