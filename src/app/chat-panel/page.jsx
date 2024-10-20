import React from "react";
import ChatListItem from "../../components/Chat/ChatListItem";
import ChatList from "@/components/Chat/ChatList"; // Assuming ChatListItem component is in components folder

const ChatPanelPage = () => {
  return (
    <div className="flex h-[90vh] bg-red-300">
      <div className="w-full bg-bg_sidebar flex flex-col items-center">
        <ChatList />
      </div>
      <div className="hidden">
        <h1>Messages</h1>
      </div>
    </div>
  );
};

export default ChatPanelPage;
