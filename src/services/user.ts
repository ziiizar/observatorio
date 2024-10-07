
import { axiosInstance } from "@/lib/utils";
import { TSDeleteUserSchema, TSEditUserSchema } from "@/schemas/user";



export const updateUser = async (data: TSEditUserSchema) => {
  const { id,email,first_name,last_name,organization,role, username } = data;

  console.log(data)
  console.log("DATAAAAAAAAAAAAAAA")
  try {
    const response = await axiosInstance.put("edit-user", { id, email,first_name,last_name,organization,role, username });

    if (!response) throw new Error("Error during update");

    
    return { success: "Usuario editado con exito" };
    // redirect("/");
  } catch (error) {
    return { error: "Update failed:"+ (error.response?.data?.detail || error.message) };
  }
};


export const deleteUser = async (data: TSDeleteUserSchema) => {
    const { id } = data;
  
    console.log(data)
    console.log(id)
  
    try {
      const resp = await axiosInstance.delete(`delete-user/${id}`
        
      );
  
      return { success: "Usuario Eliminado" };
    } catch (error) {
      return { error: "Error" };
    }
  };