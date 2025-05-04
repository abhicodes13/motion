import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { RateLimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new RateLimit({
  redis,
  limiter: RateLimit.slidingWindow(10, "10s"),
  analytics: true,
});

export default withAuth(
  async function middleware(req) {
    const ip = req.ip || req.headers.get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip.toString());
    if (!success) {
      return new NextResponse("Too many requests", { status: 429 });
    }
    return NextResponse.next();
  },
  {
    publicPaths: ["/"],
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
