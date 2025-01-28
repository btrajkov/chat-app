"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { getPusherInstance } from "./pusher/server";

const pusherServer = getPusherInstance();

const MessageSchema = z.object({
  chat_id: z.number({
    required_error: "Chat id is required.",
  }),
  user_id: z.number({
    required_error: "User id is required.",
  }),
  content: z.string({
    required_error: "Message content is required.",
  }),
  // status: z.string(),
});

export async function sendMessage(chatId, userId, contentParam, receiverId) {
  const validatedFields = MessageSchema.safeParse({
    chat_id: chatId,
    user_id: userId,
    content: contentParam,
    // status: statusParam,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Save Message.",
    };
  }

  if (
    Number.isNaN(receiverId) ||
    receiverId === 0 ||
    receiverId === undefined
  ) {
    return {
      message: "ReceiverId not valid.",
    };
  }

  const { chat_id, user_id, content } = validatedFields.data;

  try {
    await sql`
    INSERT INTO messages (chat_id, user_id, content)
    VALUES (${chat_id}, ${user_id}, ${content})
    `;

    const channelName = `private-${userId}${receiverId}`;

    await sql`INSERT INTO chat_channels (name) VALUES (${channelName}) ON CONFLICT (name) DO NOTHING`;

    await pusherServer.trigger(channelName, "new-message", {
      message: contentParam,
      user: userId,
      receiver: receiverId,
      date: new Date(),
    });
  } catch (err) {
    return {
      message: "Error: Failed to Send Message.",
    };
  }
}
