// app/(auth)/layout.js
"use client";

import ThemeProvider from "@/components/utils/ThemeProvider";
import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen bg-bg_children"}>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
