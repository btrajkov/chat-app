// components/LoginForm.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-bg_search p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-active_text">
        Login
      </h2>
      <form action={formAction} className="space-y-3">
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
          disabled={isPending}
          type="submit"
          className="w-full py-2 mt-4 bg-purple_color hover:bg-purple_color_active text-white font-semibold rounded-md transition-colors"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-inactive_text">
        {"Don't have an account? "}
        <Link
          href="/auth/register"
          className="text-purple_color hover:underline"
        >
          Register
        </Link>
      </p>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </div>
  );
}
