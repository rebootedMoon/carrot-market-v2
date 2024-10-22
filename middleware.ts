import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("hello");
  const pathname = request.nextUrl.pathname;
  if (pathname === "/") {
    const response = NextResponse.next();
    response.cookies.set("middleware-cookie", "hello!");
    return response;
  }
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  // matcher: ["/", "/profile", "/create-account", "/user/:path*" ],
  matcher: [
    "/((?!api | _next/static | _next/image | favicon.ico).*)",
  ],
};
