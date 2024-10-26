import RegistrosTable from "@/components/Servicios/RegistrosTable";
import OrderBy from "@/components/Table/OrderBy";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { fetchRegistros, fetchRegistrosTotalPages } from "@/data/registros";
import { ExportIcon } from "@/Icons/Table";
import { exportTableToExcel } from "@/lib/exports";
import { orderOptions } from "@/types/orderOptions";
import { Registros } from "@/types/registro";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    orderBy?: string;
  };
}) => {
  const limit = 5;

  const currentPage = Number(searchParams?.page) || 1;
  const currentOrder = searchParams?.orderBy || "title";

  const totalPages = await fetchRegistrosTotalPages({ limit });
  const registros: Registros[] = await fetchRegistros({
    currentPage,
    limit,
    orderBy: currentOrder,
  });

  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 px-4 ">
        <div className="flex justify-between">
          <Button
            className="w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2"
            onClick={exportTableToExcel}
          > <ExportIcon className={'group-hover:fill-white fill-burgundy-900'}></ExportIcon>
            Exportar
          </Button>
          <OrderBy columns={orderOptions.REGISTROS}></OrderBy>
        </div>
<div>
        <RegistrosTable registros={registros}></RegistrosTable>
     
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default Page;
