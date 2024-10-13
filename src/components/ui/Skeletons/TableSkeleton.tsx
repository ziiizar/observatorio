import { Skeleton } from "./Skeleton"

const TableSkeleton = () => {
  return (
    <main className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-48" />
          </div>
          <div className="bg-gray-300 rounded-lg p-4">
            <Skeleton className="h-8 w-full mb-4" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4 mb-4">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-6 flex-1" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-32" />
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-8" />
            ))}
          </div>
        </main>
  )
}

export default TableSkeleton