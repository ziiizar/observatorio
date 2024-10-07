import UsersTable from "@/components/Admin/Users/UsersTable";
import ExportButton from "@/components/ExportButton";
import Pagination from "@/components/Table/Pagination";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { fetchAllUsers, fetchUsersTotalPages } from "@/data/users";
import { User } from "@/types/user";
import Link from "next/link";
import { exportTableToPDF, exportTableToExcel } from "@/lib/exports";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const limit = 6;

  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchUsersTotalPages({ limit });

  const users: User[] = await fetchAllUsers({ currentPage, limit });
  console.log(users);

  return (
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 ps-4">
      <div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64 shadow-shadowRed">
          <Link href={routes.crearUser}>+ Registrar Usuario</Link>
        </Button>
        <Button
          className="w-36 border-burgundy-900 border-2 text-burgundy-900"
          onClick={exportTableToExcel}
        >
          Exportar
        </Button>
      </div>

      <div className="overflow-auto ">
        <UsersTable
          users={users}
          currentPage={currentPage}
          limit={limit}
        ></UsersTable>
      </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
    </main>
  );
};

export default page;
