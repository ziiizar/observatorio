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
    const err = error as { response?: { data?: { detail?: string } } }; // Casting de error
    return { error: "Signup failed:" + (err.response?.data?.detail || (error as Error).message) };
  }
  redirect(routes.adminUsers)
};
