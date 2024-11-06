import EjeTematicoTable from "@/components/Admin/Estadisticas/EjeTematicoTable";
import OrderBy from "@/components/Table/OrderBy";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { fetchEjesTematicos } from "@/data/ejesTematicos";
import { exportTableToExcel } from "@/lib/exports";
import Link from "next/link";
import { orderOptions } from "../../../types/orderOptions";
import { ExportIcon } from '../../../Icons/Table';

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    orderBy?: "nombre_eje" | "id_eje" | "esta_activo";
  };
}) => {
  const limit = 5;

  const currentPage = Number(searchParams?.page) || 1;
  const currentOrder:"nombre_eje" | "id_eje" | "esta_activo" = searchParams?.orderBy || "nombre_eje";

  const { ejes, total_pages: totalPages } = await fetchEjesTematicos({
    limit,
    currentPage,
    orderBy: currentOrder,
  });

  return (
    <main className="[grid-area:main] w-full h-full  flex  gap-4  overflow-hidden pt-4 px-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
            <Link href={routes.crearEje}>+ Registrar Eje Tematico</Link>
          </Button>
          <Button
            className=" w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2"
            onClick={exportTableToExcel}
          >
            <ExportIcon className={'group-hover:fill-white fill-burgundy-900'}></ExportIcon>
            Exportar
          </Button>
          <OrderBy columns={orderOptions.EJES}></OrderBy>
        </div>
        <div>
          <EjeTematicoTable ejes={ejes}></EjeTematicoTable>
          {/* <EjesPieChart></EjesPieChart> */}
          
            <Pagination totalPages={totalPages} />
          
        </div>
      </div>

      <div className="flex gap-8  overflow-auto scrollbar-hide"></div>
    </main>
  );
};

export default page;
