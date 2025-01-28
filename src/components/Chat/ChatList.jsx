"use client";

import React, { useState, useEffect } from "react";
import ChatListItem from "./ChatListItem";
import { fetchChatList } from "@/app/lib/data";
import { useMobileView } from "@/app/hooks/useMobileView"; // Adjust path as needed

const ChatList = ({ handleToggleLayoutMobile, showChatMobile }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const userId = 1; // Replace with actual user ID
        const chatData = await fetchChatList(userId);
        setChats(chatData);
      } catch (error) {
        console.error("Failed to load chats [Deprecated]:", error);
      }
    };
    loadChats();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-xl text-gray-100 pl-8 pt-4">Chats</h1>
      <div className="p-3 w-full h-screen overflow-auto">
        <div
          className={`space-y-4 text-sm pl-2 flex flex-col items-start justify-start gap-5 pt-3 transition-all duration-200`}
        >
          {chats
            ? chats.map((chat) => (
                <ChatListItem
                  handleToggleLayoutMobile={handleToggleLayoutMobile}
                  showChatMobile={showChatMobile}
                  key={chat.chat_id}
                  id={chat.chat_id}
                  name={chat.name || chat.message_sender} // Use name or fallback to message sender
                  lastMessage={chat.last_message}
                  messageSender={chat.message_sender}
                />
              ))
            : "Loading Chats"}
        </div>
      </div>
    </>
  );
};

export default ChatList;
