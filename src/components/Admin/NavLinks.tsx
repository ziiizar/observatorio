"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { routes } from "@/constants/routes";
import { Links } from "@/types/links";



const NavLinks = ({links}: {links:Links[]}) => {
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
          className={cn('flex gap-2 items-center h-10 p-2 rounded-s-full ps-5  hover:text-black transition-all ', (link.href === pathname || pathname.startsWith(link.href)) && 'bg-white text-black' )}
        >
            {link.href === pathname || pathname.startsWith(link.href) ? <LinkIcon color={'black'}></LinkIcon>: 
            <LinkIcon  color={'white'}></LinkIcon>}
          
          <span>{link.name}</span>
        </Link>
        )
      })}
    </>
  );
};

export default NavLinks;
