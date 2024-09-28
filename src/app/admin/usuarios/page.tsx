import UsersTable from "@/components/Admin/Users/UsersTable";
import Button from "@/components/ui/Button";
import { routes } from "@/constants/routes";
import { fetchAllUsers } from "@/data/users";
import Link from "next/link";

const page = async () => {
  const users = await fetchAllUsers();
  //   console.log(users)
  return (
    <main className="my-4  flex flex-col gap-4 px-4 me-4">
      <div className="flex gap-4">
        <Button className="bg-burgundy-900 text-white w-64"><Link href={routes.crearUser}>+ Registrar Usuario</Link></Button>
        <Button className="w-36 border-burgundy-900 border-2 text-burgundy-900">Exportar</Button>
      </div>

      <UsersTable></UsersTable>
    </main>
  );
};

export default page;
