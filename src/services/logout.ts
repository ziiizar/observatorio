import Cookies from "js-cookie"

export const logout = () => {

Cookies.remove("access_token")
console.log("sesion cerrada")
}