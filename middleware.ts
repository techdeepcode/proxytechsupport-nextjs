import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Send /technologies/ to the home page Technologies section (single source of truth). */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = '/';
  url.hash = 'tech';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/technologies', '/technologies/'],
};
