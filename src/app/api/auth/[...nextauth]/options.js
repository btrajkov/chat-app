import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

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

        if (!credentials?.email || !credentials?.password) {
          console.error("Missing email or password");
          return null;
        }

        // Query the user from the database
        const result =
          await sql`SELECT * FROM users WHERE email=${credentials.email}`;
        const user = result.rows[0]; // Assuming result.rows contains the user rows

        if (!user) {
          console.error("User not found");
          return null; // User with the provided email does not exist
        }

        // Compare the provided password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isValidPassword) {
          console.error("Invalid password");
          return null; // Password does not match
        }

        console.log("Valid credentials:", user);

        // Return user object to be stored in the session
        return user;
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
      console.log("Redirect Callback Triggered:");
      console.log("URL:", url);
      console.log("Base URL:", baseUrl);

      if (url === `${baseUrl}/api/auth/callback/github`) {
        console.log("Redirecting GitHub login to /chat-panel/1");
        return `${baseUrl}/chat-panel/1`;
      }

      if (url.startsWith(baseUrl)) {
        console.log("Redirecting to valid internal URL:", url);
        return url;
      }

      console.log("Redirecting to base URL:", baseUrl);
      return baseUrl;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
