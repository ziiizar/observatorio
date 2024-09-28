"use client";
import {Dashboard, Boletines,Estadisticas,Fuentes,Settings,Users} from "@/Icons/Admin"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { routes } from "@/constants/routes";

const links = [
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

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        // const ColoredIcon = link.coloredIcon;
        return(
        <Link
          key={index}
          href={link.href}
          className={cn('flex gap-2 items-center h-10 p-2 rounded-s-xl hover:bg-gray/30 transition-all ', (link.href === pathname || pathname.startsWith(link.href)) && 'bg-white text-black' )}
        >
            {link.href === pathname || pathname.startsWith(link.href) ? <LinkIcon color={'black'}></LinkIcon>: 
            <LinkIcon color={'white'}></LinkIcon>}
          
          <span>{link.name}</span>
        </Link>
        )
      })}
    </>
  );
};

export default NavLinks;
