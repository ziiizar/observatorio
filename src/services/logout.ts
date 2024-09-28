// 'use server'

import { routes } from "@/constants/routes"
import Cookies from "js-cookie"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const logout = () => {



Cookies.remove("access_token")
console.log("sesion cerrada")
redirect(routes.home)

// revalidatePath('')
}