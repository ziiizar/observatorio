import TableSkeleton from "@/components/ui/Skeletons/TableSkeleton"
// import { Suspense } from "react"

const loading = () => {
  return (
    // <Suspense fallback={<TableSkeleton></TableSkeleton>}>
    //     </Suspense>
    //     <div>loading</div>
        <TableSkeleton></TableSkeleton>
    
  )
}

export default loading