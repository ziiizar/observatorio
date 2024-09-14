import { axiosInstance } from "@/lib/utils";
import { TSLoginSchema } from "@/schemas/auth";
// import { getSessionId } from "@/lib/getCookie";
// import Cookies from 'js-cookie'


export const login = async (data: TSLoginSchema) => {
  const { password, username } = data;

  try {
    const response = await axiosInstance.post("login", { password, username });

    if (!response) throw new Error("Error during login");

    // const sessionid = Cookies.get('sessionid');
    // console.log('sessionid');
    // console.log(sessionid);

    return { success: "Login successful" };
    // redirect("/");
  } catch (error) {
    return { error: "Login failed:" };
  }
};
