"use client";

import React, { useEffect, useState } from "react";
import { fetchChat } from "../../../lib/data";
import { messages } from "@/app/seed/seedData"; // Adjust path as needed
import { useParams } from "next/navigation";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useMobileView } from "@/app/hooks/useMobileView";

const ChatPage = ({
  handleToggleLayoutMobile = () => {},
  showChatMobile = null,
}) => {
  const [chat, setChat] = useState(null);
  const params = useParams();
  let { chatId } = params;
  let currentUserId = "1";
  const isMobileView = useMobileView();

  useEffect(() => {
    const loadChat = async () => {
      try {
        const chatData = await fetchChat(`${chatId}`);
        setChat(chatData);
      } catch (error) {
        console.error("Failed to load chat:", error);
      }
    };
    loadChat();
  }, [chatId]);

  if (!chat) return <div>Loading chat...</div>;
  console.log(chat);

  return (
    <div className="flex flex-col h-[93vh] bg-bg_children w-full overflow-auto">
      <div className="h-[50px] bg-bg_actionbar px-4 flex justify-start items-center gap-[80vw]">
        <div className={"block"}>
          <h2 className="text-active_text font">
            {chat[0]?.chat_name || "Chat"}
          </h2>
        </div>
        {showChatMobile === true && isMobileView ? (
          <div>
            <button
              className={"block text-2xl"}
              onClick={handleToggleLayoutMobile}
            >
              <FaArrowCircleLeft />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex-1 flex flex-col overflow-auto gap-5 p-4 pt-6">
        {chat.map((message) => (
          <div
            key={message.message_id}
            className={`flex ${message.user_id == currentUserId ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.user_id == currentUserId
                  ? "bg-outgoing_message text-active_text"
                  : "bg-incoming_message text-active_text"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-bg_children">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-4 py-2 border-2
          border-chat_border rounded-lg
          bg-incoming_message focus:border-b-4
          focus:border-b-[#6266b2] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ChatPage;
