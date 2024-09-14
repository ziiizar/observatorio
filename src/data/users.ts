import { axiosInstance } from "@/lib/utils"

export const fetchAllUsers = async () => {
    const users = await axiosInstance.get('users')
    return users.data
}