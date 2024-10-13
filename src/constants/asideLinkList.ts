'use client'

import { Registros, Patentes, Visualizacion } from "@/Icons/Services";
import { routes } from "./routes";
import { Boletines, Dashboard, Estadisticas, Fuentes, Users } from "@/Icons/Admin";
import { Links } from "@/types/links";

export const ServicesLinks: Links[] = [
    {
      name: "Registros",
      href: routes.registros,
      icon: Registros,
      // coloredIcon: DashboardColor,
      
    },
    {
      name: "Patentes",
      href: routes.patentes,
      icon: Patentes,
      
    },
    {
      name: "Visualización",
      href: routes.visualizacion,
      icon: Visualizacion,
  
    },
  ];

  export const ObservadorServiceLinks : Links[] = [
    {name: 'Fuentes',href: routes.observadorFuentes, icon : Fuentes},
    {
      name: "Registros",
      href: routes.registros,
      icon: Registros,
      // coloredIcon: DashboardColor,
      
    },
    {
      name: "Patentes",
      href: routes.patentes,
      icon: Patentes,
      
    },
    {
      name: "Visualización",
      href: routes.visualizacion,
      icon: Visualizacion,
  
    },
  ];


 export const AdminLinks: Links[] = [
    {
      name: "Principal",
      href: routes.admin,
      icon: Dashboard,
      // coloredIcon: DashboardColor,
      
    },
    {
      name: "Usuarios",
      href: routes.adminUsers,
      icon: Users,
      
    },
    {
      name: "Fuentes",
      href: routes.adminFuentes,
      icon: Fuentes,
  
    },
  
    {
      name: "Estadisticas",
      href: routes.adminEstadisticas,
      icon: Estadisticas,
    },
    {
      name: "Boletines",
      href: routes.adminBoletines,
      icon: Boletines,
  
    },
    // {
    //   name: "Affiliate Program",
    //   href: "/Profile/Affilliate",
    //   icon: Affilliate,
    //   coloredIcon: AffilliateColor,
  
    // },
  ];