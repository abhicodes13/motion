// app/429/page.jsx
export default function RateLimitPage() {
  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Too Many Requests
      </h1>
      <p style={{ marginTop: "1rem" }}>
        You’ve hit the rate limit. Please slow down and try again later.
      </p>
    </div>
  );
}
