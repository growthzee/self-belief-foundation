import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const COOKIE_NAME = 'admin_token';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/dashboard routes
  if (pathname.startsWith('/admin/dashboard')) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.ADMIN_JWT_SECRET || 'sbf-admin-fallback-secret'
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      // Invalid or expired token — clear the cookie and redirect
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.set(COOKIE_NAME, '', { maxAge: 0, path: '/' });
      return response;
    }
  }

  // If admin is already logged in and hits /admin/login, redirect to dashboard
  if (pathname === '/admin/login') {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (token) {
      try {
        const secret = new TextEncoder().encode(
          process.env.ADMIN_JWT_SECRET || 'sbf-admin-fallback-secret'
        );
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch {
        // Token invalid, let them see login page
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
