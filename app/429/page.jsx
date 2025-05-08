// app/429/page.jsx

export default function RateLimitPage() {
  return (
    //Page for when too many requests hit from client side
    <div
      style={{ padding: "3rem", textAlign: "center" }}
      className="bg-black text-white"
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Too Many Requests
      </h1>
      <p style={{ marginTop: "1rem" }}>
        You’ve hit the rate limit. Please slow down and try again later.
      </p>
      <a className="bg-black mt-3 p-2 text-white" href="/">
        Go Back
      </a>
    </div>
  );
}
