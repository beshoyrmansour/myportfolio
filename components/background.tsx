/**
 * Fixed decorative background — floating gradient orbs + masked grid.
 * Purely presentational; rendered once behind all content.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute"
        style={{
          top: "-12%",
          left: "-8%",
          width: "46vw",
          height: "46vw",
          background: "radial-gradient(circle, #8B5CF6, transparent 62%)",
          filter: "blur(70px)",
          opacity: 0.34,
          animation: "brmFloatA 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "30%",
          right: "-12%",
          width: "42vw",
          height: "42vw",
          background: "radial-gradient(circle, #3B82F6, transparent 62%)",
          filter: "blur(80px)",
          opacity: 0.3,
          animation: "brmFloatB 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "-14%",
          left: "24%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, #06B6D4, transparent 62%)",
          filter: "blur(80px)",
          opacity: 0.26,
          animation: "brmFloatC 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          animation: "brmGrid 9s linear infinite",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent 80%)",
        }}
      />
    </div>
  );
}
