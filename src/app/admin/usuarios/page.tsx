import UsersTable from "@/components/Admin/Users/UsersTable";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { fetchAllUsers, fetchUsersTotalPages } from "@/data/users";
import { User } from "@/types/user";
import Link from "next/link";
import { exportTableToExcel } from "@/lib/exports";
import { ExportIcon } from "@/Icons/Table";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const limit = 5;

  const currentPage = Number(searchParams?.page) || 1;

  // !Considerar convertir estas dos funciones en una sola que rertorne los dos valores
  const totalPages = await fetchUsersTotalPages({ limit });
  const users: User[] = await fetchAllUsers({ currentPage, limit });




  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 px-4">
      <div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
          <Link href={routes.crearUser}>+ Registrar Usuario</Link>
        </Button>
        <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2"
          onClick={exportTableToExcel}
        > <ExportIcon className={'group-hover:fill-white fill-burgundy-900'}></ExportIcon>
          Exportar
        </Button>
        
      </div>
<div>
  <UsersTable
          users={users}
          currentPage={currentPage}
          limit={limit}
        ></UsersTable>
        {totalPages >1 && 
          <Pagination totalPages={totalPages} />
        }
</div>
        
    </main>
  );
};

export default page;
