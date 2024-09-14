import { axiosInstance } from "@/lib/utils"

export const stopMonitoring = async (fuenteId: string) => {
    await axiosInstance.get(`stop-monitoring/${fuenteId}`)
}