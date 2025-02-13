import { NextResponse } from "next/server";
import { isAuthenticated } from "./utils/auth";

export async function middleware(request) {
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configura las rutas que deben ser protegidas
export const config = {
  matcher: ["/profile"], // Agrega aquí las rutas protegidas
};