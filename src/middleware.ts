import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const cookies = request.cookies;
  const url = request.nextUrl.clone();

  const authToken = cookies.get("authToken");

  if (!authToken && url.pathname !== "/signin") {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (authToken && url.pathname === "/signin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

// ignore router
export const config = {
  matcher: [
    "/((?!.next/static_next/static|_next/image|sitemap.xml|robots.txt|favicon.ico|images|fonts|.*\\.map).*)",
  ],
};
