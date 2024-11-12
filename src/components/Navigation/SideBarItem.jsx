"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBarItem = ({ iconName: Icon, label, link }) => {
  const pathname = usePathname();
  const chatLink = link.includes("/chat-panel");
  let linkRefined = link; // Because changing link directly would yield wrong url

  // Link should be active no matter which chatId
  if (chatLink) linkRefined = "/chat-panel";

  const isActive = pathname.includes(linkRefined);

  // Define the base and active classes separately
  const baseClasses = `
    flex p-4 gap-6 items-center
    text-[20px]
    cursor-pointer
    border-l-[5px]
    md:flex-col md:gap-1 md:text-[10px] md:p-2.5
  `;

  const activeClasses = isActive
    ? "border-l-purple_color text-purple_color]"
    : "border-l-transparent text-inactive_text";

  return (
    <Link href={link} className={`${baseClasses} ${activeClasses}`}>
      <Icon className="text-xl" />
      <span className="text-inactive_text">{label}</span>
    </Link>
  );
};

export default SideBarItem;
