import { getAuth } from "@/services/getAuth";
import { AUTH_ROUTES, PUBLIC_ROUTES, routes, ADMIN_ROUTES } from "./constants/routes";
import { FAKEUSERINDEX } from "./constants/fakeUser";

export default async function auth(req) {
  const { nextUrl } = req;

  const simulatedUserPosition = FAKEUSERINDEX; 
  const user = await getAuth(simulatedUserPosition);

  const isLoggedIn = !!user; // Comprueba si existe un usuario
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAdminRoute = ADMIN_ROUTES.includes(nextUrl.pathname)

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(routes.home, nextUrl)); // Redirige si ya está autenticado
    }
    return; // Si no está autenticado, permite el acceso a la ruta de autenticación
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(routes.login, nextUrl)); // Redirige a login si no está autenticado
  }

  if(isAdminRoute && !user.is_superuser){
    return Response.redirect(new URL(routes.home, nextUrl));
  }

  return; // Si está autenticado o en una ruta pública, permite el acceso
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
