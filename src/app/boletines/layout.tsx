import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

export default function BoletinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" boletinLayoutGrid">
      <div className="[grid-area:header]">
        <Header landing={false}></Header>
      </div>

      {/* <div className="flex p-6"> */}
      {/* <Suspense fallback={<AsideSkeleton></AsideSkeleton>}> */}
      {/* <Aside>
        <NavLinks links={AdminLinks}></NavLinks>
      </Aside> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<TableSkeleton></TableSkeleton>}> */}
      <main className="[grid-area:main]">{children}</main>

      {/* </Suspense> */}
      {/* </div> */}
      <div className="[grid-area:footer]"><Footer></Footer></div>
      
    </div>
  );
}
