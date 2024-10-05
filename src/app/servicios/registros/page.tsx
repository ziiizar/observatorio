import RegistrosTable from "@/components/Servicios/RegistrosTable";
import Pagination from "@/components/Table/pagination";
import { fetchRegistrosTotalPages } from "@/data/registros";

const Page = async ({searchParams}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {

  const limit = 6

  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchRegistrosTotalPages({limit});

  return (
    <main className="[grid-area:main] w-full h-full  flex  gap-4  overflow-hidden pt-4 ps-4 ">
    <div className="overflow-auto">
      <RegistrosTable currentPage={currentPage} limit={limit}></RegistrosTable>
      <div className="mt-5 flex w-full justify-center ">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
    </main>
  );
};

export default Page;
