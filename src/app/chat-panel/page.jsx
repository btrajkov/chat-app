import React from "react";
import ChatListItem from "../../components/Chat/ChatListItem";
import ChatList from "@/components/Chat/ChatList"; // Assuming ChatListItem component is in components folder

const ChatPanelPage = () => {
  return (
    <div className="flex flex-col h-full md:flex-row">
      <div className="h-full w-full bg-bg_actionbar flex-1 overflow-auto flex-col rounded-t-2xl md:rounded-tl-xl md:rounded-tr-[0px]">
        <ChatList />
      </div>
      <div className="">
        <h1 className="text-white"> Something</h1>
      </div>
    </div>
  );
};

export default ChatPanelPage;
