import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let isLoggedIn = request.cookies.get("isLoggedIn");
  console.log(isLoggedIn);
  if (request.nextUrl.pathname.startsWith("/login")) {
    const response = NextResponse.next();
    response.cookies.set("tried", false);
    return response;
  } else if (!isLoggedIn || isLoggedIn.value === "false") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.set("tried", true);
    return response;
  } else {
    return;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/newsfeed", "/friends", "/search", "/login"],
};
