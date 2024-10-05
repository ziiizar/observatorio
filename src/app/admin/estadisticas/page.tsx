import EjeTematicoTable from "@/components/Admin/Estadisticas/EjeTematicoTable";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { exportTableToExcel } from "@/lib/exports";
import Link from "next/link";

const page = () => {
  return (
    <main className="[grid-area:main] w-full h-full  flex  gap-4  overflow-hidden pt-4 ps-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
            <Link href={routes.crearFuente}>+ Registrar Eje Tematico</Link>
          </Button>
          <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900"
          onClick={exportTableToExcel}
        >
          Exportar
        </Button>
        </div>
        <div className="overflow-auto scrollbar-hide">
          <EjeTematicoTable></EjeTematicoTable>
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
          <Link href={routes.crearFuente}>+ Registrar Eje Tematico</Link>
        </Button>
        <Button className="w-36 border-burgundy-900 border-2 text-burgundy-900">
          Exportar
        </Button>
        </div>
        <div className="overflow-auto scrollbar-hide">
          <EjeTematicoTable></EjeTematicoTable>
        </div>
      </div>
      <div className="flex gap-8  overflow-auto scrollbar-hide">
        
        
      </div>
    </main>
  );
};

export default page;
