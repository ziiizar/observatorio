import RegistrosTable from "@/components/Servicios/RegistrosTable";
import Pagination from "@/components/Table/Pagination";
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
    <main className="[grid-area:main] w-full h-full  flex flex-col gap-4  overflow-hidden pt-4 ps-4 ">
    <div className="overflow-auto">
      <RegistrosTable currentPage={currentPage} limit={limit}></RegistrosTable>
    </div>
      <div className="mt-5 flex w-full justify-center ">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default Page;
