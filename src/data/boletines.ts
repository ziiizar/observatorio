import { axiosInstance } from "@/lib/utils"

export const fetchAllBoletines = async () => {
    const boletines = await axiosInstance.get('boletines')
    return boletines.data

  }
export const fetchBoletinById = async (id:number) => {
    const boletines = await axiosInstance.get(`boletines/${id}`)
    return boletines.data

  }