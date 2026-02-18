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
      <body>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-50 px-16 py-20">
          <div className="text-center max-w-2xl w-full bg-white/60 backdrop-blur-sm rounded-3xl p-16 md:p-24 lg:p-32 shadow-sm">
            <div className="mb-14">
              <div className="inline-flex items-center justify-center w-28 h-28 bg-red-100 rounded-full mb-10">
                <svg
                  className="w-14 h-14 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Application Error
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                A critical error occurred. Please refresh the page.
              </p>
              {error.digest && (
                <p className="text-sm text-gray-500 mb-10 font-mono" role="alert">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl transition-colors cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 text-lg font-medium rounded-xl transition-colors cursor-pointer"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
