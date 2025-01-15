"use client";

import { 
  HomeIcon, 
  UsersIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { 
    name: "Home", 
    href: "/dashboard", 
    icon: HomeIcon 
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: UsersIcon,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBagIcon,
  },
  {
    name: "Components",
    href: "/dashboard/comps",
    icon: CpuChipIcon,
  },
  { 
    name: "Customers", 
    href: "/dashboard/customers", 
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return links.map((link) => {
    const LinkIcon = link.icon;
    return (
      <Link
        href={link.href}
        key={link.name}
        className={clsx(
          "flex h-[48px] md:h-[46px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-slate-800 md:flex-none md:justify-start md:p-2 md:px-3", 
          {
            "bg-slate-800 text-teal-500": pathname === link.href,
          }
        )}
      >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
      </Link>
    )
  });
}