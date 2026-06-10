import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_ROUTES = ["/dashboard", "/posts"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = ADMIN_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  // Firebase Auth uses client-side tokens — actual auth guard
  // is handled in AdminLayout via useAuth hook.
  // Middleware here is a lightweight first gate using a session cookie
  // you can set after login (optional enhancement).
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/posts/:path*"],
};