import { axiosInstance } from "@/lib/utils"

export const fetchFuentes = async () => {
    const fuentes = await axiosInstance.get('fuentes')
    return fuentes.data
}