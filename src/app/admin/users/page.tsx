import { fetchAllUsers } from "@/data/users";


const page = async () => {

    
  const users = await fetchAllUsers()
//   console.log(users)
  return (
    <div>usersPage</div>
  )
}

export default page