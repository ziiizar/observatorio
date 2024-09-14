import { axiosInstance } from "@/lib/utils"

export const startMonitoring = async (fuenteId: number) => {
    await axiosInstance.get(`start-monitoring/${fuenteId}`)
}