import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Rate limiter
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10s"),
  analytics: true,
});

// Middleware function
export default withAuth(async function middleware(req) {
  // Check if user is authenticated (from Kinde's auth system)
  const isAuthenticated = req.cookies.get("kindeLoggedIn"); // Adjust this as per your Kinde cookie name

  if (!isAuthenticated) {
    return NextResponse.redirect("https://scrollread.kinde.com"); // Redirect to Kinde login page
  }

  // Check for rate limiting
  const ip = req.ip || req.headers.get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip.toString());

  if (!success) {
    return new NextResponse("Too many requests", { status: 429 });
  }

  return NextResponse.next();
});

// Matcher
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
