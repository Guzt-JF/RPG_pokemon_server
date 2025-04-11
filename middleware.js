import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log('Global middleware executed');
  
  // Example: Add a custom header
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'MyGlobalMiddleware');
  return response;
}

// Optional: Match specific paths
export const config = {
  matcher: '/api/:path*', // Apply only to API routes
};