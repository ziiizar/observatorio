import { axiosInstance } from "@/lib/utils";
import { TSLoginSchema } from "@/schemas/auth";
// import { getSessionId } from "@/lib/getCookie";
import Cookies from 'js-cookie'


export const login = async (data: TSLoginSchema) => {
  const { password, username } = data;

  try {
    const response = await axiosInstance.post("login", { password, username });

    if (!response) throw new Error("Error during login");

    // const { access, refresh } = response.data;
    // localStorage.setItem('access_token', access);
    // localStorage.setItem('refresh_token', refresh);

    Cookies.set('access_token', response.data.access, { secure: true, sameSite: 'Strict' });

    return { success: "Login successful" };
    // redirect("/");
  } catch (error) {
    return { error: "Login failed:" };
  }
};
