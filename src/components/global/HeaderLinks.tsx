"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { routes } from "@/constants/routes";

const links = [
  {
    name: "Servicios",
    href: routes.services,
    // coloredIcon: DashboardColor,
  },
  {
    name: "Boletines",
    href: routes.boletines,
  },
  {
    name: "Sobre el observatorio",
    href: routes.aboutUs,
  },

  // {
  //   name: "Affiliate Program",
  //   href: "/Profile/Affilliate",
  //   icon: Affilliate,
  //   coloredIcon: AffilliateColor,

  // },
];

const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        // const LinkIcon = link.icon;
        // const ColoredIcon = link.coloredIcon;
        return (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                " hover:text-burgundy-900 hover:underline transition-all ",
                (link.href === pathname || pathname.startsWith(link.href)) &&
                  " text-burgundy-900 underline"
              )}
            >
              {/* {link.href === pathname || pathname.startsWith(link.href) ? <LinkIcon color={'black'}></LinkIcon>: 
            <LinkIcon color={'white'}></LinkIcon>} */}

              <span>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default HeaderLinks;
