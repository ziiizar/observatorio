import PatentesTable from "@/components/Servicios/PatentesTable";
import FilterBy from "@/components/Table/FilterBy";
import OrderBy from "@/components/Table/OrderBy";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { fetchPatents, fetchPatentsTotalPages } from "@/data/patents";
import { ExportIcon } from "@/Icons/Table";
import { exportTableToExcel } from "@/lib/exports";
import { filterOptions } from "@/types/filterOptions";
import { orderOptions } from "@/types/orderOptions";
import { Patente } from "@/types/patente";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    orderBy?: "id" | "abstract" | "description" | "claims" | "patent_office" | "url" | "fuente_id";
    filter?: string; // Aquí se define el filtro como un string
  };
}) => {
  const limit = 5;
  const currentPage = Number(searchParams?.page) || 1;
  const currentOrder: "id" | "abstract" | "description" | "claims" | "patent_office" | "url" | "fuente_id" =
    searchParams?.orderBy || "fuente_id";
  const filter = searchParams?.filter
    // ? { field: "fuente", value: searchParams.filter } // Cambiar "fuente_id" por el campo adecuado
    // : undefined;

  const totalPages = await fetchPatentsTotalPages({ limit, filter });
  const patentes: Patente[] = await fetchPatents({
    currentPage,
    limit,
    orderBy: currentOrder,
    filter,
  });

  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 px-4">
      <div className="flex justify-between">
        <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2"
          onClick={exportTableToExcel}
        >
          <ExportIcon className={"group-hover:fill-white fill-burgundy-900"}></ExportIcon>
          Exportar
        </Button>
        <FilterBy filters={filterOptions.PATENTES}></FilterBy>
        <OrderBy columns={orderOptions.PATENTES}></OrderBy>
      </div>

      <div>
        <PatentesTable patentes={patentes}></PatentesTable>
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default Page;
