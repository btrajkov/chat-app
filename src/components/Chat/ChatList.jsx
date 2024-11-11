"use client";

import React, { useState, useEffect } from "react";
import ChatListItem from "./ChatListItem";
import { fetchChatList } from "@/app/lib/data"; // Adjust path as needed

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const userId = 1; // Replace with actual user ID
        const chatData = await fetchChatList(userId);
        setChats(chatData);
        console.log(chatData);
      } catch (error) {
        console.error("Failed to load chats:", error);
      }
    };
    loadChats();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-xl text-gray-100 pl-8 pt-4">Chats</h1>
      <div className="p-3 w-full h-screen overflow-auto">
        <div className="space-y-4 text-sm pl-2 flex flex-col gap-5 items-start justify-start pt-3">
          {chats.map((chat) => (
            <ChatListItem
              key={chat.chat_id}
              id={chat.chat_id}
              name={chat.name || chat.message_sender} // Use name or fallback to message sender
              lastMessage={chat.last_message}
              messageSender={chat.message_sender}
              onClick={() => onSelectChat(chat.chat_id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatList;
