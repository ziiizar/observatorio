import Header from "@/components/global/Header";
import Aside from "@/components/Admin/Aside";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="adminLayoutGrid  overflow-y-auto overflow-x-auto z-10 ">
      <div className="[grid-area:header]">
        <Header></Header>
      </div>
      
        {/* <div className="flex p-6"> */}
          <Aside></Aside>
          {children}
        {/* </div> */}
      </div>
   
  );
}