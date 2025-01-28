"use client";

import Image from "next/image"; // For Next.js optimized image loading
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useMobileView } from "@/app/hooks/useMobileView";

const ChatListItem = ({
  id,
  name,
  lastMessage,
  messageSender,
  showChatMobile,
  handleToggleLayoutMobile,
}) => {
  const pathname = usePathname();
  const isActive = pathname === "/chat-panel/" + id;
  const isMobileView = useMobileView();

  return (
    <Link
      className={`flex text-start w-full cursor-pointer rounded-lg p-2 transition-all duration-200 ${
        isActive && !isMobileView ? "bg-active_chat" : ""
      } ${isMobileView ? "hover:bg-active_chat" : ""}`}
      href={`/chat-panel/${id}`}
      onClick={isMobileView ? handleToggleLayoutMobile : () => {}}
    >
      {/* Image placeholder */}
      <div className={`mr-5 md:mr-3`}>
        <Image
          src="/images/profile_image.png" // Replace with the path to the image fetched from your database
          alt={`${name}'s profile`}
          width={60} // Width of the image
          height={80} // Height of the image
          className="rounded-full object-cover" // Makes the image circular
        />
      </div>
      {/* Name and last message */}
      <div className="flex flex-col">
        <span className="font-bold text-active_text">{name}</span>
        <span
          className={`${!isActive ? "text-inactive_text" : "text-active_text"}`}
        >
          {messageSender}: {lastMessage}
        </span>
      </div>
    </Link>
  );
};

export default ChatListItem;
