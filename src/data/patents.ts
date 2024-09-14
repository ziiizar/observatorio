import { axiosInstance } from "@/lib/utils"

export const fetchPatents = async () => {
    const patents = await axiosInstance.get('patentes')
    return patents.data
}