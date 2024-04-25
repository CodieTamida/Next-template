//export { auth as middleware } from "auth";
import About from "@/app/About/page";
import Home from "@/app/page";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/About",
};
