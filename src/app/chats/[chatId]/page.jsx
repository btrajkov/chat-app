"use client";

import { useState, useEffect } from "react";

// Example data (replace with your own data fetching logic)
const chatData = {
  1: {
    participants: [
      { id: 101, name: "John Doe" },
      { id: 102, name: "Jane Smith" },
    ],
    messages: [
      {
        id: 1001,
        chatId: 1,
        userId: 101,
        message: "Hey Jane, how are you?",
        timestamp: "2024-10-18T12:00:00Z",
      },
      {
        id: 1002,
        chatId: 1,
        userId: 102,
        message: "Hi John, I'm doing great! How about you?",
        timestamp: "2024-10-18T12:01:00Z",
      },
      {
        id: 1003,
        chatId: 1,
        userId: 101,
        message: "I'm good too, thanks!",
        timestamp: "2024-10-18T12:02:00Z",
      },
      {
        id: 1004,
        chatId: 1,
        userId: 102,
        message: "That's great to hear! Have you been busy lately?",
        timestamp: "2024-10-18T12:03:00Z",
      },
      {
        id: 1005,
        chatId: 1,
        userId: 101,
        message: "Yeah, work has been keeping me occupied. How about you?",
        timestamp: "2024-10-18T12:04:00Z",
      },
      {
        id: 1006,
        chatId: 1,
        userId: 102,
        message: "Same here, it's been hectic but manageable.",
        timestamp: "2024-10-18T12:05:00Z",
      },
      {
        id: 1007,
        chatId: 1,
        userId: 101,
        message: "Any plans for the weekend?",
        timestamp: "2024-10-18T12:06:00Z",
      },
      {
        id: 1008,
        chatId: 1,
        userId: 102,
        message: "Yeah, I'm thinking of going hiking. You?",
        timestamp: "2024-10-18T12:07:00Z",
      },
      {
        id: 1009,
        chatId: 1,
        userId: 101,
        message: "Sounds fun! I might just relax and catch up on some reading.",
        timestamp: "2024-10-18T12:08:00Z",
      },
      {
        id: 1010,
        chatId: 1,
        userId: 102,
        message: "That sounds like a good plan too!",
        timestamp: "2024-10-18T12:09:00Z",
      },
    ],
  },
  // Add more chat data here
};

const ChatPage = ({ params }) => {
  const { id } = params;
  const [currentUserId, setCurrentUserId] = useState(101); // Assuming current user is John Doe

  const chat = chatData["1"];

  if (!chat) return <div>Chat not found</div>;

  return (
    <div className="flex flex-col h-[91dvh] bg-bg_children">
      <div className="flex-1 flex flex-col overflow-auto gap-5 p-4 pt-6">
        {/* Display messages */}
        {chat.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.userId === currentUserId ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.userId === currentUserId
                  ? "bg-outgoing_message text-active_text"
                  : "bg-incoming_message text-active_text"
              }`}
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>

      {/* Message input area */}
      <div className="p-4 fixed w-full bottom-0 bg-bg_children">
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
