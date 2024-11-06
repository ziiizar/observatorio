import { axiosInstance } from "@/lib/utils"

export const stopMonitoring = async (fuenteId: number) => {
    await axiosInstance.get(`stop-monitoring/${fuenteId}`)
}