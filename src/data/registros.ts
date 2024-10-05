import { axiosInstance } from "@/lib/utils"

export const fetchRegistros = async ({currentPage, limit}) => {
    const offset = (currentPage - 1) * limit;
    const registros = await axiosInstance.get(`registros?limit=${limit}&offset=${offset}`)
    return registros.data
}

export const fetchRegistrosTotalPages = async ({limit}) => {
    const totalRegistros = await axiosInstance.get(`registros/total-pages?limit=${limit}`)
    return totalRegistros.data
}