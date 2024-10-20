import React from "react";
import Image from "next/image"; // For Next.js optimized image loading

const ChatListItem = ({ name, lastMessage, messageSender }) => {
  return (
    <div className="flex items-center justify-center w-full cursor-pointer rounded-lg p-2">
      {/* Image placeholder */}
      <div className="mr-2">
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
        <span className="text-inactive_text">
          {messageSender}: {lastMessage}
        </span>
      </div>
    </div>
  );
};

export default ChatListItem;
