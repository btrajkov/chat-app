import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { z } from "zod";

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

const Login = CredentialsSchema.omit({
  firstName: true,
  lastName: true,
});

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("Received credentials:", credentials);

        const validatedFields = Login.safeParse({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (!validatedFields.success) {
          console.error("Email or password not valid.");
          return null;
        }

        const { email, password } = validatedFields.data;

        // Query the user from the database
        try {
          const result = await sql`SELECT * FROM users WHERE email=${email}`;
          const user = result.rows[0]; // Assuming result.rows contains the user rows

          if (!user) {
            console.error("User not found");
            return null; // User with the provided email does not exist
          }

          // Compare the provided password with the hashed password in the database
          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            console.error("Invalid password");
            return null; // Password does not match
          }

          console.log("Valid credentials:", user);

          // Return user object to be stored in the session
          return user;
        } catch (err) {
          console.error("Database Error:", err);
          throw new Error("Failed to return the user.");
        }
      },

      async register(credentials) {
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

        try {
          await sql`insert into users ("password", email, firstname, lastname) values (${bcrypt.hash(password, 10)}, ${email}, ${firstName}, ${lastName});`;
          return true;
        } catch (err) {
          console.error("Database Error:", err);
          throw new Error("Failed to register the user in database.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Custom login page
    signOut: "/auth/logout", // (Optional) Custom logout page
    error: "/auth/error", // (Optional) Custom error page
    verifyRequest: "/auth/verify-request", // (Optional) Email verification page
    newUser: "/auth/register", // (Optional) Redirect after new user creation
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // console.log("Redirect Callback Triggered:");
      // console.log("URL:", url);
      // console.log("Base URL:", baseUrl);
      //
      // if (url.startsWith(`${baseUrl}/api/auth/callback/github`)) {
      //   console.log("Redirecting GitHub login to /chat-panel/1");
      //   return `${baseUrl}/chat-panel/1`;
      // } else if (url.startsWith(baseUrl)) {
      //   console.log("Redirecting to valid internal URL:", url);
      //   return url;
      // }
      //
      // console.log("Redirecting to base URL:", baseUrl);
      // return baseUrl;
      return `${baseUrl}/chat-panel/1`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
