import CreateBoletinForm from "@/components/Admin/Boletines/CreateBoletinForm"
import { fetchEjesTematicos } from "@/data/ejesTematicos";
import { getAuth } from "@/services/getAuth";
import { AuthUser } from "@/types/user";

const page = async () => {
  const { ejes } = await fetchEjesTematicos({});
  const user:AuthUser = await getAuth();


    return (
      <main className="my-4"><CreateBoletinForm userId={user.id} ejes={ejes}></CreateBoletinForm></main>
    )
  }
  
  export default page