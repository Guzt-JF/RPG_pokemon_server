import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("Global middleware executed");
  const URL_KEY = process.env.URL_KEY;

  // Example: Add a custom header
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  console.log(token)
  console.log(URL_KEY)
  // if (token !== URL_KEY) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }

  const response = NextResponse.next();
  response.headers.set("X-Custom-Header", "MyGlobalMiddleware");
  return response;
}

// Optional: Match specific paths
export const config = {
  matcher: "/api/:path*", // Apply only to API routes
};
