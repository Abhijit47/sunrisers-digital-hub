import { NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  // const someHeader = req.headers.set('x-some-header', 'some-value');

  const path = req.nextUrl.pathname;
  console.log(`Proxying request to: ${path}`);

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
};
