import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export const axiosInstance = axios.create(
    {
        baseURL:"http://127.0.0.1:8000/",
        withCredentials: true
    }
)

// axiosInstance.interceptors.request.use(config =>{
//     const token = useLoged.getState().token
//     config.headers = {
//         Authorization: `Bearer ${token}`
//     }
//     return config
// })
