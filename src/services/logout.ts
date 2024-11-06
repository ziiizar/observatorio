import Cookies from "js-cookie";


export const logout = async () => {
  try {
    // Elimina las cookies de autenticación
    Cookies.remove("access_token", { secure: true, sameSite: 'Strict' });
    Cookies.remove("refresh_token", { secure: true, sameSite: 'Strict' });

    // Revalida la ruta actual para asegurarse de que el estado de autenticación se actualice
    // revalidatePath('/');

    // Redirige al usuario a la página principal (o a la página de inicio de sesión)
    // redirect(routes.home);

    return { success: "Logout successful" };
  } catch (error) {
    return { error: "Logout failed" };
  }
};
