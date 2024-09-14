import { axiosInstance } from "@/lib/utils"

export const fetchEjesTematicos = async () => {
    const ejes = await axiosInstance.get('ejes')
    return ejes.data
}