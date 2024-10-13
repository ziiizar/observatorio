import { axiosInstance } from "@/lib/utils"

export const fetchPatents = async ({currentPage, limit, orderBy,
    sortOrder = 'asc',}: {
        currentPage: number;
        limit: number;
        orderBy?: string;
        sortOrder?: string;
      }) => {
    const offset = (currentPage - 1) * limit;
    const patents = await axiosInstance.get(`patentes?limit=${limit}&offset=${offset}&orderBy=${orderBy}&sortOrder=${sortOrder}`)
    return patents.data
}
export const fetchPatentsTotalPages = async ({limit}) => {
    const totalPatents = await axiosInstance.get(`patentes/total-pages?limit=${limit}`)
    return totalPatents.data
}