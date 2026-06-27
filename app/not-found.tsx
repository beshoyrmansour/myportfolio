import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p
          className="gradient-text font-display font-extrabold leading-none mb-2"
          style={{ fontSize: "clamp(90px,20vw,180px)" }}
        >
          404
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-3 text-white">
          Page not found
        </h1>
        <p
          className="mb-8 mx-auto max-w-md text-base leading-relaxed"
          style={{ color: "rgba(233,233,242,0.62)" }}
        >
          Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] text-white font-semibold no-underline"
          style={{
            background: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
            boxShadow: "0 14px 40px -10px rgba(139,92,246,0.6)",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
