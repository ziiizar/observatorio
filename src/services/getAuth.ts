// import { axiosInstance } from "@/lib/utils";
// import Cookies from 'js-cookie'
// export const getCsrfToken = async () => {
//     const csrfResponse = await axiosInstance.get('api/crsf')
//     const csrfToken = csrfResponse.data.csrfToken
//     Cookies.set('csrftoken', csrfToken, {})
//   };

import { axiosInstance } from "@/lib/utils";

// import {users} from "@/mocks/users.json";

// export const getAuth = async (position) => {
//   if (position < 0 || position >= users.length) {
//     throw new Error("Invalid position");
//   }

//   // Devuelve el usuario en la posición especificada
//   return users[position];
// };


// export const getAuth = async () => {
//   try {
//     const token = localStorage.getItem('access_token');
    
//     if (!token) throw new Error("No token found");

//     const response = await axiosInstance.get("api/get-user-from-token/", {
//       headers: {
//         Authorization: `Bearer ${token}`,  // Incluir el token JWT en el encabezado
//       },
//     });

//     if (!response) throw new Error("Error fetching user data");

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return { error: "Failed to fetch user data" };
//   }
// };

import { cookies } from "next/headers";

export const getAuth = async () => {

  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  console.log('AAAAAAAAAQQQQQUUUUUUUIIIIIII')
  console.log(token)

  if (!token) {
    return null; // Si no hay token, devuelve null (no autenticado)
  }

  try {
    const response = await axiosInstance.get("api/get-user-from-token/", {
      headers: {
        Authorization: `Bearer ${token}`,  // Incluir el token JWT en el encabezado
      },
    });

    if (!response) throw new Error("Error fetching user data");

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
