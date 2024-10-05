import PatentesTable from "@/components/Servicios/PatentesTable";
import Pagination from "@/components/Table/pagination";
import { fetchPatentsTotalPages } from "@/data/patents";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const limit = 5;
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPatentsTotalPages({ limit });

  return (
    <main className="[grid-area:main] w-full h-full  flex  gap-4  overflow-hidden pt-4 ps-4">
      <div className="overflow-auto">
        <PatentesTable currentPage={currentPage} limit={5}></PatentesTable>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
};

export default Page;
