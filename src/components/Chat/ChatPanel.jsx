"use-client";

import { FaArrowCircleLeft } from "react-icons/fa";
import React from "react";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";

export default function ChatPanel({
  chat,
  showChatMobile,
  isMobileView,
  newMessage,
  setNewMessage,
  handleSendMessage,
  currentUserId,
  handleToggleLayoutMobile,
}) {
  const client = new Ably.Realtime({ authUrl: "/api/chat-auth" });
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={"chat-demo"}>
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

        <div className="p-4 bg-bg_children flex gap-6">
          <div className="w-4/5">
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="w-full px-4 py-2 border-2
          border-chat_border rounded-lg
          bg-incoming_message focus:border-b-4
          focus:border-b-[#6266b2] focus:outline-none"
            />
          </div>
          <div className="w-1/5">
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-gray-600 text-white rounded-md right-4 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </ChannelProvider>
    </AblyProvider>
  );
}
