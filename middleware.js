import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Step 1: Set up Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Step 2: Set up rate limiter (10 requests per 10 seconds)
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1m"),
  analytics: true,
});

// Step 3: Combine Kinde auth + rate limiting
export default withAuth(
  async function middleware(req) {
    const ip = req.ip || req.headers.get("x-forwarded-for") || "127.0.0.1";

    const { success } = await ratelimit.limit(ip.toString());
    if (!success) {
      return NextResponse.redirect(new URL("/429", req.url));
    }
    // Allow request through
    return NextResponse.next();
  },
  {
    publicPaths: ["/", "/429"], // Let homepage remain public
  }
);

// Step 4: Match non-static routes only
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
