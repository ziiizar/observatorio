import FuenteTable from "@/components/Admin/Fuente/FuenteTable";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { fetchFuentes } from "@/data/fuentes";
import { exportTableToExcel } from "@/lib/exports";
import { getAuth } from "@/services/getAuth";

import Link from "next/link";

const Page = async () => {
  // !Crear Paginacion aunq no parece necesario

  const fuentes = await fetchFuentes();
  const user = await getAuth();
  const totalPages = 1;

  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 px-4">
      <div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
          <Link href={routes.crearFuente}>+ Registrar Fuente</Link>
        </Button>
        <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900"
          onClick={exportTableToExcel}
        >
          Exportar
        </Button>
      </div>
      <div>
        <FuenteTable user={user} fuentes={fuentes}></FuenteTable>
        {totalPages > 1 && <Pagination totalPages={totalPages}></Pagination>}
      </div>
    </main>
  );
};

export default Page;
