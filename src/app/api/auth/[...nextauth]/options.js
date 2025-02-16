import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
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
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
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
    async signIn({ user, account, profile }) {
      if (!user.email) {
        console.error("Email is missing from the provider data.");
        return false;
      }

      const userData = {
        email: user.email,
        firstName: user.name.split(" ")[0] || user.name || "Unknown",
        lastName: user.name.split(" ")[1] || user.name || "Unknown",
        provider: account.provider,
      };

      const existingUser =
        await sql`select * from users where email=${userData.email}`;
      if (existingUser.rowCount === 0) {
        await sql`insert into users(email, firstname, lastname, provider) values(${userData.email}, ${userData.firstName}, ${userData.lastName}, ${userData.provider})`;
      } else {
        await sql`update users set firstname = ${userData.firstName}, lastname = ${userData.lastName}, provider = ${userData.provider} where email = ${userData.email}`;
      }

      return true;
    },
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
