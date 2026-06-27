"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const roles = t.raw("roles") as string[];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-[140px] pb-20 max-w-[1180px] mx-auto"
    >
      <div className="grid grid-cols-1 min-[880px]:grid-cols-[1.15fr_0.85fr] gap-10 min-[880px]:gap-14 items-center w-full text-center min-[880px]:text-start">
        {/* Copy */}
        <div className="order-2 min-[880px]:order-none">
          <div
            data-reveal="0"
            className="inline-flex items-center gap-2.5 px-[15px] py-[7px] rounded-full text-[13px] font-medium mb-[26px]"
            style={{
              border: "1px solid rgba(139,92,246,0.32)",
              background: "rgba(139,92,246,0.1)",
              color: "#c9b8ff",
            }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={{
                background: "#34d399",
                boxShadow: "0 0 8px #34d399",
                animation: "brmPulse 2s ease-in-out infinite",
              }}
            />
            {t("years")} {t("yearsLabel")} · {t("available")}
          </div>

          <p
            data-reveal="60"
            className="mb-1.5 text-[18px] font-medium"
            style={{ color: "rgba(233,233,242,0.6)" }}
          >
            {t("greeting")}
          </p>

          <h1
            data-reveal="120"
            className="gradient-text font-display font-extrabold mb-3.5 leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: "clamp(44px,7vw,82px)" }}
          >
            {t("name")}
          </h1>

          <div
            data-reveal="180"
            className="flex items-center justify-center min-[880px]:justify-start min-h-10 mb-[22px]"
          >
            <span
              className="font-display font-semibold text-[#e9e9f2]"
              style={{ fontSize: "clamp(19px,3vw,27px)" }}
            >
              <span className="brm-typed">{roles[0]}</span>
              <span
                className="inline-block w-[3px] h-[1.1em] ms-[3px] align-[-3px]"
                style={{
                  background: "#06B6D4",
                  animation: "brmBlink 1s step-end infinite",
                }}
              />
            </span>
          </div>

          <p
            data-reveal="240"
            className="mb-[34px] max-w-[520px] mx-auto min-[880px]:mx-0 text-[16.5px] leading-[1.7]"
            style={{ color: "rgba(233,233,242,0.66)" }}
          >
            {t("description")}
          </p>

          <div
            data-reveal="300"
            className="flex flex-col min-[880px]:flex-row min-[880px]:flex-wrap gap-3.5 justify-center min-[880px]:justify-start"
          >
            <a
              href="#projects"
              data-magnetic="0.4"
              className="magnetic-btn no-underline inline-flex items-center justify-center gap-2.5 px-7 py-[15px] rounded-[14px] text-white font-semibold text-[15.5px] w-full min-[880px]:w-auto"
              style={{
                background:
                  "linear-gradient(135deg,#8B5CF6,#3B82F6,#06B6D4)",
                backgroundSize: "180% auto",
                boxShadow: "0 14px 40px -10px rgba(139,92,246,0.6)",
              }}
            >
              {t("cta")} →
            </a>
            <a
              href="/resume/Bishoy-R-Mansour-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              data-magnetic="0.3"
              className="magnetic-btn no-underline inline-flex items-center justify-center gap-2.5 px-7 py-[15px] rounded-[14px] text-[#e9e9f2] font-semibold text-[15.5px] w-full min-[880px]:w-auto"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {t("downloadResume")} ↓
            </a>
          </div>
        </div>

        {/* Portrait — head pops out above the card */}
        <div
          data-reveal="200"
          className="relative justify-self-center order-1 min-[880px]:order-none"
        >
          <div
            data-tilt
            className="relative"
            style={{
              width: "clamp(240px,32vw,330px)",
              aspectRatio: "4 / 5",
              transformStyle: "preserve-3d",
              transition: "transform .2s ease-out",
            }}
          >
            {/* Card frame */}
            <div
              className="absolute inset-0 rounded-[28px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(160deg,rgba(139,92,246,0.18),rgba(6,182,212,0.12))",
                boxShadow: "0 30px 80px -25px rgba(139,92,246,0.5)",
              }}
            >
              <div
                className="brm-glare absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: "overlay" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7,7,11,0.55), transparent 55%)",
                }}
              />
            </div>
            {/* Cutout rising above the card */}
            <Image
              src="/portrait.png"
              alt="Bishoy R Mansour"
              width={674}
              height={976}
              priority
              sizes="(max-width: 880px) 280px, 330px"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain pointer-events-none z-[2]"
              style={{ filter: "drop-shadow(0 16px 26px rgba(0,0,0,0.5))" }}
            />
          </div>

          <TechBadge
            className="top-[8%] -start-[7%]"
            color="#7dd3fc"
            delay="0s"
            duration="5s"
          >
            ⚛ React
          </TechBadge>
          <TechBadge
            className="top-[42%] -end-[9%]"
            color="#c9b8ff"
            delay="0.6s"
            duration="6.5s"
          >
            ▲ Next.js
          </TechBadge>
          <TechBadge
            className="bottom-[8%] -start-[6%]"
            color="#5eead4"
            delay="1.1s"
            duration="5.8s"
          >
            TS TypeScript
          </TechBadge>
        </div>
      </div>
    </section>
  );
}

function TechBadge({
  children,
  className,
  color,
  delay,
  duration,
}: {
  children: React.ReactNode;
  className: string;
  color: string;
  delay: string;
  duration: string;
}) {
  return (
    <div
      className={`absolute z-[3] px-3.5 py-2.5 rounded-[14px] text-[13px] font-semibold ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(12,12,20,0.7)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
        color,
        animation: `brmBadge ${duration} ease-in-out infinite ${delay}`,
      }}
    >
      {children}
    </div>
  );
}
