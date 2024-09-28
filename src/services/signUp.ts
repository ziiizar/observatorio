
import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import { TSSignUpSchema } from "@/schemas/auth";



export const signup = async (data: TSSignUpSchema) => {
  const { password, adminId,email,firstName,lastName,organization,rol } = data;

  try {
    const response = await axiosInstance.post("signup", { password, email,firstName,lastName,organization,rol });

    if (!response) throw new Error("Error during signup");

    
    return { success: "Cuenta creada con exito" };
    // redirect("/");
  } catch (error) {
    return { error: "Signup failed:" };
  }
};
