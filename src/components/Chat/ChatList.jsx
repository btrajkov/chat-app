import React from "react";
import ChatListItem from "./ChatListItem"; // Assuming ChatListItem component is in components folder

const ChatList = () => {
  // Mock chat data
  const chats = [
    {
      id: 1,
      name: "Keely Griffith",
      lastMessage: "I was there the whole day",
      messageSender: "You",
    },
    {
      id: 2,
      name: "John Doe",
      lastMessage: "What time is the meeting?",
      messageSender: "John",
    },
    {
      id: 3,
      name: "Jane Smith",
      lastMessage: "Let’s grab lunch tomorrow.",
      messageSender: "You",
    },
  ];

  return (
    <>
      <h1 className="font-semibold mb-4 text-xl text-gray-100 pl-3">Chats</h1>
      <div className="p-3 w-full">
        <div className="space-y-4 text-sm pl-2 flex h-full flex-col gap-5 items-center">
          {/* Render each chat using the Hcat component */}
          {chats.map((chat) => (
            <ChatListItem
              id={chat.id}
              key={chat.id}
              name={chat.name}
              lastMessage={chat.lastMessage}
              messageSender={chat.messageSender}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatList;
