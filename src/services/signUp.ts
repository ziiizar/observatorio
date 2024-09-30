
import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import { TSSignUpSchema } from "@/schemas/auth";



export const signup = async (data: TSSignUpSchema) => {
  const { password,email,first_name,last_name,organization,role, username } = data;

  console.log(data)
  try {
    const response = await axiosInstance.post("signup", { password, email,first_name,last_name,organization,role, username });

    if (!response) throw new Error("Error during signup");

    
    return { success: "Cuenta creada con exito" };
    // redirect("/");
  } catch (error) {
    return { error: "Signup failed:"+ (error.response?.data?.detail || error.message) };
  }
};
