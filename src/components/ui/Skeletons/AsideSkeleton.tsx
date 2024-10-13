import { Skeleton } from "./Skeleton"

export default function AsideSkeleton() {
  return (
    <aside className="w-64 bg-burgundy-900 text-white p-6 rounded-lg">
      <div className="mb-6">
        <Skeleton className="h-6 w-24 bg-burgundy-700 mb-4" />
        <Skeleton className="h-10 w-full bg-red-800" />
      </div>
      <div className="mb-6">
        <Skeleton className="h-6 w-24 bg-burgundy-700 mb-4" />
        <Skeleton className="h-10 w-full bg-red-800" />
      </div>
      <div>
        <Skeleton className="h-6 w-24 bg-burgundy-700 mb-4" />
        <Skeleton className="h-10 w-full bg-burgundy-800" />
      </div>
    </aside>
  )
}