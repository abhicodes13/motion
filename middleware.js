import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { RateLimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Redis connection using environment variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Set up rate-limiting: 10 requests per 10 seconds per IP
const ratelimit = new RateLimit({
  redis,
  limiter: RateLimit.slidingWindow(10, "10s"), // 10 requests in 10 seconds
  analytics: true,
});

export default withAuth(
  async function middleware(req) {
    // Get the user's IP address
    const ip = req.ip || req.headers.get("x-forwarded-for") || "127.0.0.1";

    // Log the incoming request and the user's IP for debugging
    console.log("Incoming Request:", req.url);
    console.log("User IP:", ip);

    // Apply rate-limiting based on the IP address
    const { success, limit, remaining, reset } = await ratelimit.limit(
      ip.toString()
    );

    // Log rate limit details for debugging
    console.log("Rate Limit Status - Success:", success);
    console.log("Limit:", limit);
    console.log("Remaining Requests:", remaining);
    console.log("Reset In:", reset, "seconds");

    // If the rate limit is exceeded, respond with a 429 status
    if (!success) {
      console.log("Rate limit exceeded for IP:", ip);
      return new NextResponse("Too many requests, please try again later.", {
        status: 429,
      });
    }

    // If the rate limit is not exceeded, continue the request
    return NextResponse.next();
  },
  {
    // Public paths that don't require authentication
  }
);

export const config = {
  // Apply the middleware to all paths (can be adjusted if needed)
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
