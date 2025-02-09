"use client";

import { useChannel } from "ably/react";
import { useEffect, useRef } from "react";

const ChatBox = ({ messageList, currentUserId, ably }) => {
  let inputBox = null;
  const chatContainerRef = useRef(null);
  const messageEndRef = useRef(null);

  const messages = messageList.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    return (
      <span
        key={index}
        className={`flex ${message.connectionId === ably.connection.id ? "justify-end" : "justify-start"} mb-2`}
        data-auhtor={author}
      >
        <div
          className={`max-w-xs px-4 py-2 rounded-lg ${
            message.user_id === currentUserId
              ? "bg-outgoing_message text-active_text"
              : "bg-incoming_message text-active_text"
          }`}
        >
          {message.data}
        </div>
      </span>
    );
  });

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    };
    scrollToBottom();
  }, [messageList]);

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 flex flex-col overflow-auto gap-5 p-4 pt-6"
    >
      {messages}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatBox;

// This went between <div className="flex-1 flex flex-col overflow-auto gap-5 p-4 pt-6"> </div> in previous version
// {messageList.map((message) => (
//     <div
//         key={message.message_id}
//         className={`flex ${message.user_id === currentUserId ? "justify-end" : "justify-start"} mb-2`}
//     >
//       <div
//           className={`max-w-xs px-4 py-2 rounded-lg ${
//               message.user_id === currentUserId
//                   ? "bg-outgoing_message text-active_text"
//                   : "bg-incoming_message text-active_text"
//           }`}
//       >
//         {message.content}
//       </div>
//     </div>
// ))}
