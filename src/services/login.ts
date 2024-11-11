import { axiosInstance } from "@/lib/utils";
import { TSLoginSchema } from "@/schemas/user";

export const login = async (data: TSLoginSchema) => {
  const { password, username } = data;
  console.log(data)

  try {
    const response = await axiosInstance.post("login", { password, username });

    if (!response) throw new Error("Error during login");

    return { success: "Login successful" };
  } catch (error) {
    return { error: "Login failed:" };
  }
};
