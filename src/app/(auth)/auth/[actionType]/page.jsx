// app/(auth)/page.js
"use client";

import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm"; // Import RegisterForm
import { usePathname } from "next/navigation";

export default function AuthPage() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full flex justify-center items-center">
      {pathname === "/auth/login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
