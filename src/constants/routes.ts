interface routes {
  home: string;
  login: string;
  admin: string;
  unauthorized: string;
  services: string;
  aboutUs: string;
  patentes: string;
  visualizacion: string
  registros: string;
  adminFuentes: string;
  crearFuente: string;
  adminUsers: string;
  crearUser: string
  adminEstadisticas: string;
  adminBoletines: string;

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
  admin: "/admin/principal",
  unauthorized: "/unauthorized",
  services: "/servicios",
  aboutUs: "/sobre-nosotros",
  patentes: "/servicios/patentes",
  visualizacion: '/servicios/visualizacion',
  registros: "/servicios/registros",
  adminFuentes: "/admin/fuentes",
  crearFuente: "/admin/fuentes/crear",
  adminUsers: "/admin/usuarios",
  crearUser: "/admin/usuarios/crear",
  adminEstadisticas: "/admin/estadisticas",
  adminBoletines: "/admin/boletines",

  // register: "/Register",
  // confirmEmail: '/confirm-email',
  // verifyEmail: '/auth/email-verification',
  // profile: "/Profile/Dashboard",
  // reset: '/Reset',
  // newPassword: '/auth/new-password',
};

const PUBLIC_ROUTES = [
  routes.home,
  routes.unauthorized,
  routes.services,
  routes.aboutUs,
];
// const PREFIX_PUBLIC_ROUTES = [];
const PRIVATE_ROUTES = [routes.admin, , routes.patentes, routes.registros];
const AUTH_ROUTES = [routes.login];
const ADMIN_ROUTES = [
  routes.admin,
  routes.adminFuentes,
  routes.crearUser,
  routes.adminUsers,
  routes.crearFuente,
];

export { AUTH_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES, ADMIN_ROUTES };
