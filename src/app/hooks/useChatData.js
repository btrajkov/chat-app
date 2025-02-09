import { useState, useEffect } from "react";
import { fetchChat } from "@/app/lib/data";
import { useParams } from "next/navigation";

// Returning chat data based on chatId from navigation

export const useChatData = () => {
  const [chat, setChat] = useState(null);
  const params = useParams();
  const { chatId } = params;

  useEffect(() => {
    const loadChat = async () => {
      try {
        const chatData = await fetchChat(chatId);
        setChat(chatData);
      } catch (error) {
        console.log("Failed to load chat: ", error);
      }
    };
    loadChat();
  }, [chatId]);

  return { chat };
};
