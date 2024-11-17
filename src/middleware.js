import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // console.log("Middleware folder: --------------------");
  // console.log("Middleware Pathname:", pathname);
  // console.log("Token Valid:", token ? true : false);
  // console.log("----------------------------------------");

  // Allow public routes
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    console.log("Public route - skipping middleware");
    return NextResponse.next();
  }

  // Redirect unauthenticated users to login
  if (!token) {
    console.log("Unauthenticated - redirecting to /auth/login");
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url); // Preserve original URL
    return NextResponse.redirect(loginUrl);
  }

  console.log("Authenticated - proceeding");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
