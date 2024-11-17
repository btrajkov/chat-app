"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const formData = { fullName, username, email, password };
    console.log("Registering user with data:", formData);
  };

  return (
    <div className="bg-bg_search p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-active_text">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-active_text font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-active_text font-semibold"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-active_text font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
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
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-purple_color hover:bg-purple_color_active text-white font-semibold rounded-md transition-colors"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-inactive_text">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-purple_color hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
