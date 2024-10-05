import Header from "@/components/global/Header";
import Aside from "@/components/Admin/Aside";
import ServicesLinks from "@/components/Servicios/ServicesLinks";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="adminLayoutGrid  overflow-y-auto overflow-x-auto z-10 px-4 pb-4 gap-x-4 ">
      <div className="[grid-area:header]">
        <Header></Header>
      </div>
      
        {/* <div className="flex p-6"> */}
          <Aside>
            <ServicesLinks></ServicesLinks>
          </Aside>
          {children}
        {/* </div> */}
      </div>
   
  );
}