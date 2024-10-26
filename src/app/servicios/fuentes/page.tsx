import FuenteTable from "@/components/Admin/Fuente/FuenteTable";
import Button from "@/components/ui/Button";
import { fetchFuentes } from "@/data/fuentes";
import { ExportIcon } from "@/Icons/Table";
import { exportTableToExcel } from "@/lib/exports";
import { getAuth } from "@/services/getAuth";


const Page = async () => {

  const fuentes = await fetchFuentes()
  const user = await getAuth()
  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 px-4">
      <div className="flex gap-4">
        
        <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2"
          onClick={exportTableToExcel}
        > <ExportIcon className={'group-hover:fill-white fill-burgundy-900'}></ExportIcon>
          Exportar
        </Button>
      </div>
        <FuenteTable user={user} fuentes={fuentes}></FuenteTable>
    </main>
  );
};

export default Page;
