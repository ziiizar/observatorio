'use server'
import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import { TSSignUpSchema } from "@/schemas/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const signup = async (data: TSSignUpSchema) => {
  const { password,email,first_name,last_name,organization,role, username } = data;

 
  try {
    const response = await axiosInstance.post("signup", { password, email,first_name,last_name,organization,role, username });

    if (!response) throw new Error("Error during signup");

    revalidatePath(routes.adminUsers)
    return { success: "Cuenta creada con exito" };
    // redirect("/");
  } catch (error) {
    return { error: "Signup failed:"+ (error.response?.data?.detail || error.message) };
  }
  redirect(routes.adminUsers)
};
