// app/429/page.jsx
"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function RateLimitPage() {
  return (
    //Page for when too many requests hit from client side

    <div
      style={{ padding: "3rem", textAlign: "center" }}
      className="bg-black text-white h-screen flex flex-col gap-3 justify-center items-center z-10"
    >
      <h1
        style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        ScrollRead
      </h1>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Too Many Requests
      </h1>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        You’ve hit the rate limit. Please slow down and try again later.
      </p>
      <a href="/" className="z-10">
        <button className="bg-purple-600 mt-3 px-4 py-1 hover:opacity-70 rounded-md text-white">
          Go back
        </button>
      </a>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={200} factor={4} fade speed={3} />
        </Canvas>
      </div>
    </div>
  );
}
