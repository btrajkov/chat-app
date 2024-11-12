"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import Pusher from "pusher";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw err;
  }
}

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
  status: z.string(),
});

const SaveMessage = MessageSchema.omit({ message_id: true, sent_at: true });

// function that handles emitting the messages and storing them in db
// needs further refactoring
export async function saveMessage(chat_id, user_id, content, status) {
  const validatedFields = SaveMessage.safeParse({
    chat_id: chat_id,
    user_id: user_id,
    content: content,
    status: status,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Save Message.",
    };
  }

  const { chat_id, user_id, content, status } = validatedFields.data;

  try {
    await sql`
    INSERT INTO messages (chat_id, user_id, content, status)
    VALUES (${chat_id}, ${user_id}, ${content}, ${status})
    `;
  } catch (err) {
    return {
      message: "Database Error: Failed to Save Message.",
    };
  }
}
