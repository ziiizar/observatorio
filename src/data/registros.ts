import { axiosInstance } from "@/lib/utils"

export const fetchRegistro = async () => {
    const registros = await axiosInstance.get('registros')
    return registros.data
}