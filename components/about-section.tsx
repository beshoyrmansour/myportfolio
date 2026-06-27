"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const STATS = [
  { value: 9, suffix: "+", key: "statYears" },
  { value: 11, suffix: "", key: "statRoles" },
  { value: 8, suffix: "", key: "statProjects" },
  { value: 95, suffix: "+", key: "statLighthouse" },
] as const;

export function AboutSection() {
  const t = useTranslations("about");
  const excel = [1, 2, 3, 4, 5].map((n) => t(`specialty${n}`));

  return (
    <section id="about" className="px-6 py-[90px] max-w-[1180px] mx-auto">
      <div data-reveal="0" className="text-center mb-[54px]">
        <p className="mb-2 text-[13px] font-semibold tracking-[0.16em] uppercase text-[#8b7fff]">
          {t("title")}
        </p>
        <h2
          className="font-display font-bold tracking-[-0.02em]"
          style={{ fontSize: "clamp(30px,4.6vw,46px)" }}
        >
          {t("subtitle")}
        </h2>
      </div>

      <div className="grid grid-cols-1 min-[880px]:grid-cols-[0.9fr_1.1fr] gap-8 min-[880px]:gap-11 items-center">
        {/* Portrait — head pops out above the circle */}
        <div
          data-reveal="80"
          className="relative justify-self-center w-[min(340px,84%)] aspect-square"
        >
          <div
            className="absolute rounded-full"
            style={{
              inset: "-12%",
              background:
                "radial-gradient(circle, rgba(6,182,212,0.4), rgba(139,92,246,0.22) 50%, transparent 70%)",
              filter: "blur(14px)",
            }}
          />
          <div
            data-tilt
            className="relative z-[1] w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform .25s ease-out",
            }}
          >
            {/* Gradient ring + dark fill (the circular frame) */}
            <div
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: "linear-gradient(140deg,#8B5CF6,#3B82F6,#06B6D4)",
                boxShadow: "0 24px 60px -22px rgba(6,182,212,0.5)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#0b0b14]" />
            </div>
            {/* Body: clipped to the circle so the shirt never spills past it */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/portrait.png"
                alt="Bishoy R Mansour portrait"
                width={674}
                height={976}
                sizes="340px"
                priority
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain"
              />
            </div>
            {/* Head: same image, faded in above the circle so it pops out
                seamlessly (soft fade avoids a hard horizontal cut). */}
            <Image
              src="/portrait.png"
              alt=""
              aria-hidden="true"
              width={674}
              height={976}
              sizes="340px"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain pointer-events-none z-[2]"
              style={{
                filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.5))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0 30%, transparent 45%)",
                maskImage:
                  "linear-gradient(to bottom, #000 0 30%, transparent 45%)",
              }}
            />
          </div>
        </div>

        {/* Copy */}
        <div data-reveal="140">
          <p
            className="mb-[18px] text-[16.5px] leading-[1.75]"
            style={{ color: "rgba(233,233,242,0.74)" }}
          >
            {t("description")}
          </p>
          <div className="brm-glass rounded-[18px] px-5 py-[18px] mb-[22px]">
            <h3 className="font-display font-semibold text-base text-white mb-1.5">
              {t("experience")}
            </h3>
            <p
              className="text-[15px] leading-[1.65]"
              style={{ color: "rgba(233,233,242,0.66)" }}
            >
              {t("currentRole")}
            </p>
          </div>
          <h3 className="font-display font-semibold text-base text-white mb-3.5">
            {t("excelTitle")}
          </h3>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-2.5">
            {excel.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 text-sm leading-[1.45]"
                style={{ color: "rgba(233,233,242,0.74)" }}
              >
                <span className="shrink-0 mt-0.5 text-[#06B6D4]">✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        data-reveal="60"
        className="grid grid-cols-2 min-[880px]:grid-cols-4 gap-4 mt-[46px]"
      >
        {STATS.map((s) => (
          <div
            key={s.key}
            className="brm-glass text-center rounded-[20px] px-3 py-[26px]"
          >
            <div
              className="gradient-text-accent font-display font-extrabold leading-none"
              style={{ fontSize: "clamp(28px,4vw,40px)" }}
            >
              <span className="brm-count" data-target={s.value}>
                0
              </span>
              {s.suffix}
            </div>
            <div
              className="mt-2 text-[13px]"
              style={{ color: "rgba(233,233,242,0.6)" }}
            >
              {t(s.key)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
