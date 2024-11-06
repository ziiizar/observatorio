import { getAuth } from "@/services/getAuth";
import { AUTH_ROUTES, PUBLIC_ROUTES, routes, ADMIN_ROUTES } from "./constants/routes";
import { AuthUser } from "./types/user";
import { NextRequest } from "next/server";

export default async function auth(req:NextRequest) {
  const { nextUrl } = req;
  
  const user:AuthUser = await getAuth();

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

  if(isAdminRoute && !(user.role === 'admin')){
    return Response.redirect(new URL(routes.home, nextUrl));
  }

  return; // Si está autenticado o en una ruta pública, permite el acceso
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
