import Header from "@/components/global/Header";
import Aside from "@/components/Admin/Aside";
import NavLinks from "@/components/Admin/NavLinks";
import { Suspense } from "react";
import AsideSkeleton from "@/components/ui/Skeletons/AsideSkeleton";
import TableSkeleton from "@/components/ui/Skeletons/TableSkeleton";
import { AdminLinks } from "@/constants/asideLinkList";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="adminLayoutGrid  overflow-y-auto overflow-x-auto z-10  pb-4 gap-x-4">
      <div className="[grid-area:header]">
        <Header landing={false}></Header>
      </div>
      
        {/* <div className="flex p-6"> */}
        <Suspense fallback={<AsideSkeleton></AsideSkeleton>}>
          <Aside>
          <NavLinks links={AdminLinks}></NavLinks>
          </Aside>
          </Suspense>
          <Suspense fallback={<TableSkeleton></TableSkeleton>}>{children}</Suspense>
        {/* </div> */}
      </div>
   
  );
}