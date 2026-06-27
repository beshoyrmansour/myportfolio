"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07070b",
          color: "#e9e9f2",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <div style={{ fontSize: 46, marginBottom: 16 }}>⚠️</div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            Application error
          </h1>
          <p
            style={{
              color: "rgba(233,233,242,0.62)",
              maxWidth: 420,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            A critical error occurred. Please refresh the page.
          </p>
          {error.digest && (
            <p
              style={{
                color: "rgba(233,233,242,0.4)",
                fontFamily: "monospace",
                fontSize: 12,
                marginBottom: 24,
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              padding: "14px 28px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              background: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
              boxShadow: "0 14px 40px -10px rgba(139,92,246,0.6)",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
