"use client";

import React, { useEffect, useState } from "react";
import { fetchChat } from "../../../lib/data";
import { messages } from "@/app/seed/seedData"; // Adjust path as needed
import { useParams } from "next/navigation";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useMobileView } from "@/app/hooks/useMobileView";
import dynamic from "next/dynamic";

const ChatPanel = dynamic(() => import("@/components/Chat/ChatPanel"), {
  ssr: false,
});

const ChatPage = ({
  handleToggleLayoutMobile = () => {},
  showChatMobile = null,
}) => {
  const [chat, setChat] = useState(null);
  const params = useParams();
  let { chatId } = params;
  let currentUserId = "1";
  const isMobileView = useMobileView();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const loadChat = async () => {
      try {
        const chatData = await fetchChat(`${chatId}`);
        setChat(chatData);
        console.log(chatData);
      } catch (error) {
        console.error("Failed to load chat:", error);
      }
    };
    loadChat();
  }, [chatId]);

  if (!chat) return <div>Loading chat...</div>;

  // Handle sending a new message
  const handleSendMessage = async () => {
    console.log("Sending message");
  };

  return (
    <div className="flex flex-col h-[93vh] bg-bg_children w-full overflow-auto">
      <ChatPanel
        chat={chat}
        showChatMobile={showChatMobile}
        isMobileView={isMobileView}
        handleSendMessage={handleSendMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        currentUserId={currentUserId}
        handleToggleLayoutMobile={handleToggleLayoutMobile}
      />
    </div>
  );
};

export default ChatPage;
