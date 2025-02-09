"use client";

import { useState } from "react";

// Input field for sending new messages. Needs style fixing

const ChatInput = ({ handleSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      handleSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="p-4 bg-bg_children flex gap-6">
      <input
        type="text"
        placeholder="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        className="w-4/5 px-4 py-2 border-2 border-chat_border rounded-lg bg-incoming_message focus:border-b-4 focus:border-b-[#6266b2] focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="w-1/5 px-4 py-2 bg-gray-600 text-white rounded-md"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
