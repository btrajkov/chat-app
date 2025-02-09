"use client";

import { useChatData } from "@/app/hooks/useChatData";
import { useState } from "react";
import ChatHeader from "@/components/Chat/ChatHeader";
import ChatBox from "@/components/Chat/ChatBox";
import ChatInput from "@/components/Chat/ChatInput";
import { useChannel } from "ably/react";

export default function ChatPage({ handleToggleLayoutMobile, showChatMobile }) {
  const { chat } = useChatData(); // This gets messages from database
  const currentUserId = "1";
  const [receivedMessages, setMessages] = useState([]); // This sets messages from ably

  const { channel, ably } = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const handleSendMessage = async (messageText) => {
    channel.publish("chat-message", messageText); // This differs from tutorial
  };

  return (
    <div className="flex flex-col h-[93vh] bg-bg_children w-full overflow-auto">
      <ChatHeader
        showChatMobile={showChatMobile}
        handleToggleLayoutMobile={handleToggleLayoutMobile}
      />
      {/*Add later when I figure it out: chatName={chat ? chat[0]?.chat_name : ""}*/}
      <ChatBox
        messageList={receivedMessages}
        currentUserId={currentUserId}
        ably={ably}
      />
      <ChatInput handleSendMessage={handleSendMessage} />
    </div>
  );
}
