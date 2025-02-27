"use server";

import { sql } from "@vercel/postgres";

// function that returns the data needed for ChatList component
// returns chatId, chatName(null if its a dm, not null if its a groupchat), last message sent and the correspondant's name for every chat of the signedin user
export async function fetchChatList(user_id) {
  try {
    const data = await sql`
        with ordered_data as (
          SELECT m.chat_id, c.name, m.content as last_message, CONCAT(u.firstName, ' ', u.lastName) as message_sender, ROW_NUMBER() OVER (PARTITION BY m.chat_id ORDER BY m.sent_at DESC) AS row_num
          FROM messages m
          INNER JOIN chats c ON c.chat_id = m.chat_id
          INNER JOIN users u ON m.user_id = u.user_id
          WHERE c.chat_id IN (
	          SELECT cu.chat_id
	          FROM chats_users cu
	          WHERE cu.user_id = ${user_id}
          )
          order by m.sent_at desc
        )
        select *
        from ordered_data
        where row_num <= 1`;

    return data.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch chat list.");
  }
}

// function that returns the data needed for the /chats [Deprecated]/[chatId] Deprecated again page
// returns messageId, chatId, userId, content, status (sent, delivered, seen), sentAt timestamp, chatName(null if its a dm, not null if its a groupchat),
// and messageSender for every message in a chat
export async function fetchChat(chat_id) {
  try {
    const data = await sql`
        SELECT m.message_id, m.chat_id, m.user_id, m.content, m.status, m.sent_at, c.name as chat_name, CONCAT(u.firstName, ' ', u.lastName) as message_sender
        FROM messages m
        INNER JOIN chats c ON m.chat_id = c.chat_id
        INNER JOIN users u ON m.user_id = u.user_id
        WHERE m.chat_id = ${chat_id}
        ORDER BY m.sent_at ASC;`;

    return data.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch chat.");
  }
}
