import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

<<<<<<< HEAD
  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyEmail";
=======
  const isPublicPath = path === "/login" || path === "/signup";
>>>>>>> acecdc07ac07f17ce2f93de85f4d9f74e0e14cb9

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
<<<<<<< HEAD
  matcher: ["/", "/profile", "/login", "/signup", "/verifyEmail"],
=======
  matcher: ["/", "/profile", "/login", "/signup"],
>>>>>>> acecdc07ac07f17ce2f93de85f4d9f74e0e14cb9
};
