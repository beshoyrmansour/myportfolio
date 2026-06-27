"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-[46px] mb-4">⚠️</div>
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-3 text-white">
          Something went wrong
        </h1>
        <p
          className="mb-8 mx-auto max-w-md text-base leading-relaxed"
          style={{ color: "rgba(233,233,242,0.62)" }}
        >
          We hit an unexpected error. Please try again.
        </p>
        {error.digest && (
          <p
            className="mb-8 font-mono text-xs"
            style={{ color: "rgba(233,233,242,0.4)" }}
          >
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] text-white font-semibold cursor-pointer"
            style={{
              background: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
              boxShadow: "0 14px 40px -10px rgba(139,92,246,0.6)",
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] font-semibold no-underline"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              color: "#e9e9f2",
            }}
          >
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}
