import Header from "@/components/global/Header";
import Aside from "@/components/Admin/Aside";
import { Suspense } from "react";
import AsideSkeleton from "@/components/ui/Skeletons/AsideSkeleton";
import TableSkeleton from "@/components/ui/Skeletons/TableSkeleton";
import NavLinks from "@/components/Admin/NavLinks";
import {
  ObservadorServiceLinks,
  ServicesLinks,
} from "@/constants/asideLinkList";
import { getAuth } from "@/services/getAuth";
import { AuthUser } from "@/types/user";

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: AuthUser = await getAuth();

  return (
    <div className="adminLayoutGrid  overflow-y-auto overflow-x-auto z-10 px-4 pb-4 gap-x-4 ">
      <div className="[grid-area:header]">
        <Header></Header>
      </div>

      {/* <div className="flex p-6"> */}
      <Suspense fallback={<AsideSkeleton></AsideSkeleton>}>
        <Aside>
          {user?.role === "observador" ? (
            <NavLinks links={ObservadorServiceLinks}></NavLinks>
          ) : (
            <NavLinks links={ServicesLinks}></NavLinks>
          )}
        </Aside>
      </Suspense>

      <Suspense fallback={<TableSkeleton></TableSkeleton>}>{children}</Suspense>

      {/* </div> */}
    </div>
  );
}
