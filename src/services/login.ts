import { axiosInstance } from "@/lib/utils";
import { TSLoginSchema } from "@/schemas/user";
import Cookies from "js-cookie";

export const login = async (data: TSLoginSchema) => {
  const { password, username } = data;

  try {
    const response = await axiosInstance.post("login", { password, username });

    if (!response) throw new Error("Error during login");

    Cookies.set("access_token", response.data.access, {
      secure: true,
      sameSite: "Strict",
      expires: 1,
    });
    Cookies.set("refresh_token", response.data.refresh, {
      secure: true,
      sameSite: "Strict",
      expires: 7,
    });


    return { success: "Login successful" };
  } catch (error) {
    return { error: "Login failed:" };
  }
};
