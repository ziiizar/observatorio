import Cookies from "js-cookie";

// import { routes } from "@/constants/routes";
// import { axiosInstance } from "@/lib/utils";

export const logout = async () => {
  try {

    Cookies.remove("access_token", { secure: true, sameSite: 'Strict' });
    Cookies.remove("refresh_token", { secure: true, sameSite: 'Strict' });
    
    
    // const response = await axiosInstance.post("logout");
    // if (!response) throw new Error("Error during logout");
    // window.location.href = routes.home;

    return { success: "Logout successful" };
  } catch (error) {
    return { error: "Logout failed" };
  }
};
