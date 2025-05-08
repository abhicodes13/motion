// app/429/page.jsx

export default function RateLimitPage() {
  return (
    //Page for when too many requests hit from client side
    <div
      style={{ padding: "3rem", textAlign: "center" }}
      className="bg-black text-white h-screen flex flex-col gap-3 justify-center items-center"
    >
      <h1 style={{ fontSize: "1rem", fontWeight: "bold" }}>ScrollRead</h1>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Too Many Requests
      </h1>
      <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        You’ve hit the rate limit. Please slow down and try again later.
      </p>
      <a href="/">
        <button className="bg-purple-600 mt-3 p-2 text-white">Go back</button>
      </a>
    </div>
  );
}
