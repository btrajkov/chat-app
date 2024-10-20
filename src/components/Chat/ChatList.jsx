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
    {
      id: 4,
      name: "Alice Johnson",
      lastMessage: "Did you complete the task?",
      messageSender: "Alice",
    },
    {
      id: 5,
      name: "Bob Brown",
      lastMessage: "I’ll send the report soon.",
      messageSender: "Bob",
    },
    {
      id: 6,
      name: "Charlie Davis",
      lastMessage: "Let's catch up this weekend.",
      messageSender: "You",
    },
    {
      id: 7,
      name: "Emily Wilson",
      lastMessage: "Can you review my code?",
      messageSender: "Emily",
    },
    {
      id: 8,
      name: "Michael Green",
      lastMessage: "Sure, I'll be there at 5.",
      messageSender: "You",
    },
    {
      id: 9,
      name: "Sophia Martin",
      lastMessage: "I'll get back to you by tomorrow.",
      messageSender: "Sophia",
    },
    {
      id: 10,
      name: "David Miller",
      lastMessage: "Do you have time for a call?",
      messageSender: "You",
    },
  ];

  return (
    <>
      <h1 className="font-semibold text-xl text-gray-100 pl-8 pt-4">Chats</h1>
      <div className="p-3 w-full">
        <div className="space-y-4 text-sm pl-2 flex flex-col gap-5 items-start justify-start pt-3">
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
