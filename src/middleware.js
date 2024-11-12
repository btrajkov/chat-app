import { sessionData } from "@/utils/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/activity",
  "/chat-panel",
  "/teams",
  "/calendar",
  "/calls",
  "/onedrive",
  "/more",
  "/apps",
];

const reverseProtectedRoutes = ["/auth/login", "/auth/register"];

export default function middleware(req) {
  if (
    !sessionData[0].loggedIn &&
    (protectedRoutes.includes(req.nextUrl.pathname) ||
      req.nextUrl.pathname.startsWith("/chat-panel"))
  ) {
    const absoluteURL = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  } else if (
    sessionData[0].loggedIn &&
    reverseProtectedRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/chat-panel/1", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
