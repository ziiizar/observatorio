interface routes {
  home: string;
  login: string;
  admin: string;
  unauthorized: string;
  services: string
  aboutUs:  string
  patentes: string
  registros: string
  fuentes: string
  crearFuente:string
signup: string
users: string

  // confirmEmail:string
  // profile: string;
  // verifyEmail:string
  // register: string;
  // reset: string
  // newPassword: string

}

export const routes: routes = {
  home: "/",
  login: "/login",
  admin: "/admin",
  unauthorized: "/unauthorized",
  services: '/services',
  aboutUs: '/aboutUs',
  patentes:'/patentes',
  registros:'/registros',
  fuentes:'/admin/fuentes',
  crearFuente:'/admin/fuentes/crear',
  signup: '/admin/signup',
  users: '/admin/users',
  // register: "/Register",
  // confirmEmail: '/confirm-email',
  // verifyEmail: '/auth/email-verification',
  // profile: "/Profile/Dashboard",
  // reset: '/Reset',
  // newPassword: '/auth/new-password',


};


const PUBLIC_ROUTES = [routes.home, routes.unauthorized, routes.services, routes.aboutUs];
// const PREFIX_PUBLIC_ROUTES = [];
const PRIVATE_ROUTES = [routes.admin, , routes.patentes, routes.registros ];
const AUTH_ROUTES = [routes.login];
const ADMIN_ROUTES = [routes.admin, routes.fuentes, routes.signup, routes.users, routes.crearFuente]

export { AUTH_ROUTES,  PRIVATE_ROUTES, PUBLIC_ROUTES, ADMIN_ROUTES };
