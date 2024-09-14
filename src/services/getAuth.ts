// import { axiosInstance } from "@/lib/utils";
// import Cookies from 'js-cookie'
// export const getCsrfToken = async () => {
//     const csrfResponse = await axiosInstance.get('api/crsf')
//     const csrfToken = csrfResponse.data.csrfToken
//     Cookies.set('csrftoken', csrfToken, {})
//   };

import {users} from "@/mocks/users.json";

export const getAuth = async (position) => {
  if (position < 0 || position >= users.length) {
    throw new Error("Invalid position");
  }

  // Devuelve el usuario en la posición especificada
  return users[position];
};
