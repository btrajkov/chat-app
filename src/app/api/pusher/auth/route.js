import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

const { getPusherInstance } = require("@/app/lib/pusher/server");

const pusherServer = getPusherInstance();

export default async function POST(req, res) {
  const { email, password, socket_id, channel_name } = req.body;

  try {
    const result = await sql`SELECT password FROM users WHERE email=${email}`;
    if (result.rows.length === 0) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const hashedPassword = result.rows[0].password;

    const isValid = await bcrypt.compare(password, hashedPassword);
    if (!isValid) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const auth = pusherServer.authenticateUser(socket_id, email);
    res.send(auth);
  } catch (err) {
    console.error("Error during authentication");
    throw new Error(err);
  }
}
