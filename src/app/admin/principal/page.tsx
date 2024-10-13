import AccountCard from "@/components/Admin/Principal/AccountCard";
import { TotalFuentes, TotalUsers } from "@/Icons/Admin";
import { getAuth } from "@/services/getAuth";
import { AuthUser } from "@/types/user";

const page = async () => {
  const user: AuthUser = await getAuth();
  return (
    <main className="[grid-area:main] w-full h-full  flex  gap-4  pt-4 px-4">
      <div className="flex flex-col gap-4 h-full w-1/2">
        <div className="flex flex-col gap-4 w-full h-[50%]">
          <div className="">
            <h4>Bienvenido {user.username}</h4>
            <strong className="text-4xl mt-2">Panel de Administración</strong>
          </div>
          <div className="flex gap-4 h-full">
            <article className="bg-dusty-gray-300 rounded-xl w-1/2  shadow-shadowBlack p-4">
              <strong>Total de usuarios</strong>
              <div className="flex  items-center">
                <TotalUsers></TotalUsers>
                <strong>214</strong>
              </div>
            </article>
            <article className="bg-dusty-gray-300 rounded-xl w-1/2  shadow-shadowBlack p-4">
              <strong>Total de fuentes</strong>
              <div className="flex items-center">
                <TotalFuentes></TotalFuentes>
                <strong>101</strong>
              </div>
            </article>
          </div>
        </div>
        <AccountCard></AccountCard>
      </div>
      <div className="flex flex-col gap-4 h-full w-1/2">
        <article className="bg-dusty-gray-300 rounded-xl w-full h-1/2 shadow-shadowBlack p-4 flex gap-2">
          <div>
            <strong>Ejes Tematicos</strong>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="flex gap-2  items-center" >
                <div className="size-4 bg-burgundy-900 rounded-md"></div> Electroenergía
                - 20%
              </li>
              <li className="flex gap-2 items-center">
                <div className="size-4 bg-[#0F7D6B] rounded-md"></div>Medio Ambiente -
                60%
              </li>
              <li className="flex gap-2 items-center">
                <div className="size-4 bg-[#EDA145] rounded-md"></div>Industrial - 20%
              </li>
            </ul>
          </div>
          <div></div>
        </article>
        <article className="bg-dusty-gray-300 rounded-xl w-full h-1/2 shadow-shadowBlack p-4 flex gap-2">
          <div>
            <strong>Ejes Tematicos</strong>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="flex gap-2  items-center" >
                <div className="size-4 bg-burgundy-900 rounded-md"></div> Electroenergía
                - 20%
              </li>
              <li className="flex gap-2 items-center">
                <div className="size-4 bg-[#0F7D6B] rounded-md"></div>Medio Ambiente -
                60%
              </li>
              <li className="flex gap-2 items-center">
                <div className="size-4 bg-[#EDA145] rounded-md"></div>Industrial - 20%
              </li>
            </ul>
          </div>
          <div></div>
        </article>
      </div>
    </main>
  );
};

export default page;
