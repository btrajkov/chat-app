import React from "react";
import ChatList from "@/components/Chat/ChatList";
import ChatPage from "@/app/(app)/chat-panel/[chatId] Deprecated again/page";

const ChatPanelPage = () => {
  return (
    <div className="flex w-full h-full">
      {/* Left Panel - Chat List */}
      <div className="h-full w-full md:w-[380px] bg-bg_actionbar flex-shrink-0 rounded-t-2xl md:rounded-tl-xl md:rounded-tr-[0px]">
        <ChatList />
      </div>

      {/* Right Panel - Chat Messages */}
      <div className="hidden md:block md:flex-1">
        {/* This will be replaced by the [chatId] Deprecated again page content when a chat is selected */}
        <div className="w-full flex items-center justify-center text-active_text">
          <ChatPage />
        </div>
      </div>
    </div>
  );
};

export default ChatPanelPage;
