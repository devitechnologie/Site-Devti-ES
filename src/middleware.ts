import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'es'],

  // Used when no locale matches
  defaultLocale: 'es',
});

export function middleware(request: NextRequest): NextResponse {
  // Call the next-intl middleware first
  const response = intlMiddleware(request);

  // Modify the response
  response.headers.set('x-url', request.url);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(fr|en)/:path*']
  matcher: ['/', '/((?!api|static|.*\\..*|_next|landing-page|hqlead).*)']
};