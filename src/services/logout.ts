
import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";

export const logout = async () => {
  try {
    const response = await axiosInstance.post("logout");

    if (!response) throw new Error("Error during logout");

    window.location.href = routes.home;

    return { success: "Logout successful" };
  } catch (error) {
    return { error: "Logout failed" };
  }
};
