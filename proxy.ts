import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Get locale from cookie or accept-language header
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  // Create response
  const response = NextResponse.next();

  // Set locale header for next-intl
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
