"use server";
import bcrypt from "bcrypt";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { signOut } from "next-auth/react";
const CredentialsSchema = z.object({
  password: z.string({
    required_error: "Password is required.",
  }),
  email: z.string({
    required_error: "Email is required.",
  }),
  firstName: z.string({
    required_error: "First name is required.",
  }),
  lastName: z.string({
    required_error: "Last name is required.",
  }),
});

export async function registerUser(credentials) {
  const validatedFields = CredentialsSchema.safeParse({
    email: credentials?.email,
    password: credentials?.password,
    firstName: credentials?.firstName,
    lastName: credentials?.lastName,
  });

  if (!validatedFields.success) {
    console.error("Registration data not valid.");
    return null;
  }

  const { email, password, firstName, lastName } = validatedFields.data;

  const passwordEncrypted = await bcrypt.hash(password, 10);

  try {
    await sql`insert into users ("password", email, firstname, lastname) values (${passwordEncrypted}, ${email}, ${firstName}, ${lastName});`;
    const id = await sql`select user_id from users where email=${email}`;
    return id.rows[0].user_id;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to register the user in database.");
  }
}

export async function handleSignOut() {
  await signOut({
    redirect: true,
    callbackUrl: "/auth/login",
  });
}
