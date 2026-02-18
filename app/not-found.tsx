import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
              404
            </h1>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
