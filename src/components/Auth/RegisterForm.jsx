"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/api/auth/register/register";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    // Handle registration logic here
    const formData = { firstName, lastName, email, password };

    const resp = await registerUser(formData);
    console.log(resp);

    if (resp) {
      router?.push(`/chat-panel/${resp}`); // Redirect on successful login
    } else {
      console.log("Invalid email or password");
    }

    // console.log("Registering user with data:", formData);
  }

  return (
    <div className="bg-bg_search p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-active_text">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-active_text font-semibold"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-active_text font-semibold"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_color"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
