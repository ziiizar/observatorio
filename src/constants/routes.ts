interface routes {
  home: string;
  login: string;
  admin: string;
  unauthorized: string;
  services: string;
  aboutUs: string;
  boletines: string;
  geoportal: string;
  patentes: string;
  visualizacion: string;
  registros: string;
  observadorFuentes: string
  adminFuentes: string;
  crearFuente: string;
  adminUsers: string;
  crearUser: string;
  adminEstadisticas: string;
  crearEje: string
  adminBoletines: string;
  dspace: string
  vivo: string
}

export const routes: routes = {
  home: "/",
  login: "/login",
  admin: "/admin/principal",
  unauthorized: "/unauthorized",
  services: "/servicios/registros",
  aboutUs: "/sobre-nosotros",
  boletines: "/boletines",
  geoportal: "/geoportal",
  patentes: "/servicios/patentes",
  visualizacion: "/servicios/visualizacion",
  registros: "/servicios/registros",
  observadorFuentes: "/servicios/fuentes",
  adminFuentes: "/admin/fuentes",
  crearFuente: "/admin/fuentes/crear",
  adminUsers: "/admin/usuarios",
  crearUser: "/admin/usuarios/crear",
  adminEstadisticas: "/admin/estadisticas",
  crearEje: "/admin/estadisticas/crear-eje",
  adminBoletines: "/admin/boletines",
  dspace: 'https://dspace.uclv.edu.cu/',
  vivo: 'http://vivo.uclv.edu.cu/',

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
