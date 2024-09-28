import FuenteTable from "@/components/Admin/Fuente/FuenteTable";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";

import Link from "next/link";

const Page = async () => {




  return (
    <main className="w-full h-full overflow-y-auto flex flex-col gap-4 px-4 me-4">

<div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64"><Link href={routes.crearFuente}>+ Registrar Fuente</Link></Button>
        <Button className="w-36 border-burgundy-900 border-2 text-burgundy-900">Exportar</Button>
      </div>
      <FuenteTable></FuenteTable>
    </main>
  );
};

export default Page;
