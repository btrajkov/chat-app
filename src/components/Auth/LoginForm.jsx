"use client"; // Ensure this is at the top of the file

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' in the App Router (Next.js 13+)

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Safely use useRouter only in environments where it exists
  const router = typeof window !== "undefined" ? useRouter() : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email, // Updated to email
      password,
    });

    setIsLoading(false);

    if (result?.ok) {
      router?.push("/chat-panel/1"); // Redirect on successful login
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleGitHubLogin = () => {
    signIn("github", { callbackUrl: "/chat-panel/1" }); // Fixed callback URL
  };

  return (
    <div className="bg-bg_search p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-active_text">
        Login
      </h2>

      {/* Email/Password Login */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-active_text font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-active_text font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full py-2 mt-4 bg-purple_color hover:bg-purple_color_active text-white font-semibold rounded-md transition-colors"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* GitHub Login */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleGitHubLogin}
          className="flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md transition-colors"
        >
          Login with GitHub
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="mt-4 text-center text-red-500">{errorMessage}</p>
      )}

      <p className="mt-4 text-center text-inactive_text">
        {"Don't have an account? "}
        <Link
          href="/auth/register"
          className="text-purple_color hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
