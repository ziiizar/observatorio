import { axiosInstance } from "@/lib/utils";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const getAuth = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    return null; // Si no hay token, devuelve null (no autenticado)
  }
  const decodedToken = jwtDecode(token);

  const currentTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
  if (decodedToken.exp < currentTime) {
    return null; // Si el token ha expirado, devuelve null
  }

  try {
    const response = await axiosInstance.get("api/get-user-from-token/", {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado
      },
    });

    if (!response) throw new Error("Error fetching user data");

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
