import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { users, chats, messages, chatsUsers } from "@/app/seed/seedData";

const client = await db.connect();

async function drop() {
  await client.sql`
    DROP TABLE IF EXISTS chats_users`;
  await client.sql`
    DROP TABLE IF EXISTS messages`;
  await client.sql`
    DROP TABLE IF EXISTS chats`;
  await client.sql`
    DROP TABLE IF EXISTS users`;
  await client.sql`
    DROP TABLE IF EXISTS chat_channels`;
}

async function seedUsers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const passHash = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (username, password, email, firstName, lastName)
        VALUES (${user.username}, ${passHash}, ${user.email}, ${user.firstName}, ${user.lastName});`;
    })
  );

  return insertedUsers;
}

async function seedChats() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS chats (
        chat_id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        description VARCHAR(255),
        is_group BOOLEAN DEFAULT FALSE,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

  const insertedChats = await Promise.all(
    chats.map(async (chat) => {
      return client.sql`
            INSERT INTO chats (name, description, is_group)
            VALUES (${chat.name}, ${chat.description}, ${chat.is_group});`;
    })
  );

  return insertedChats;
}

async function seedMessages() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS messages (
        message_id SERIAL PRIMARY KEY,
        chat_id INT REFERENCES chats(chat_id) ON DELETE CASCADE,
        user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
        content TEXT NOT NULL,
        status TEXT,
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

  const insertedMessages = await Promise.all(
    messages.map(async (message) => {
      return client.sql`
        INSERT INTO messages (chat_id, user_id, content)
        VALUES (${message.chat_id}, ${message.user_id}, ${message.content});`;
    })
  );

  return insertedMessages;
}

async function seedChatsUsers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS chats_users (
        chat_id INT REFERENCES chats(chat_id) ON DELETE CASCADE,
        user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
        PRIMARY KEY (chat_id, user_id),
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

  const insertedChatsUsers = await Promise.all(
    chatsUsers.map(async (chatUser) => {
      return client.sql`
        INSERT INTO chats_users (chat_id, user_id)
        VALUES (${chatUser.chat_id}, ${chatUser.user_id});`;
    })
  );

  return insertedChatsUsers;
}

async function seedChatChannels() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS chat_channels (
        name VARCHAR(255) PRIMARY KEY,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await drop();
    await seedUsers();
    await seedChats();
    await seedMessages();
    await seedChatsUsers();
    await seedChatChannels();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (err) {
    await client.sql`ROLLBACK`;
    return Response.json({ err }, { status: 500 });
  }
}
