"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBarItem = ({ iconName: Icon, label, link }) => {
  const pathname = usePathname();
  const isActive = pathname === "/" + link;

  console.log(pathname);

  return (
    <Link
      // className="flex flex-col p-2 gap-0.5 items-center text-[10px] cursor-pointer border-l-[5px] border-l-transparent
      //  active:border-l-[rgba(82,88,148,255)]"
      href={link}
      className={`flex p-4 gap-6 items-center
        text-[20px]
        text-inactive_text
        cursor-pointer
        border-l-[5px] border-l-transparent
        md:flex-col md:gap-1 md:text-[10px] md:p-2.5
        ${isActive ? "border-l-[rgba(82,88,148,255)]" : ""}
        `}
    >
      <Icon className="text-xl" />
      <span className="text-inactive_text">{label}</span>
    </Link>
  );
};

export default SideBarItem;
