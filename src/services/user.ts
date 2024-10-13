'use server'

import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import { TSDeleteUserSchema, TSEditUserSchema } from "@/schemas/user";
import { revalidatePath } from "next/cache";



export const updateUser = async (data: TSEditUserSchema) => {
  const { id,email,first_name,last_name,organization,role, username } = data;

  console.log(data)
  console.log("DATAAAAAAAAAAAAAAA")
  try {
    const response = await axiosInstance.put("edit-user", { id, email,first_name,last_name,organization,role, username });

    if (!response) throw new Error("Error during update");

    // revalidatePath(routes.adminUsers)
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
  
      revalidatePath(routes.adminUsers)
      return { success: "Usuario Eliminado" };
    } catch (error) {
      return { error: "Error" };
    }
  };