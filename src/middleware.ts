import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // ignore static assets
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/public") ||
    /\.(png|jpg|jpeg|svg|webp|ico|woff2|css|js|map)$/.test(url.pathname)
  ) {
    return NextResponse.next();
  }

  // handle request
  // Enter "/" or "/abc.."
  // if no auth Token => redirect /signin
  // middlewares will check again route redirect /signin
  const authToken = request.cookies.get("authToken")?.value;
  if (authToken && url.pathname.startsWith("/signin")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // if no auth Token and url.startWith /signin => next();
  // if don't have condition startsWith /signin => error redirect too many
  if (!authToken && !url.pathname.startsWith("/signin")) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
