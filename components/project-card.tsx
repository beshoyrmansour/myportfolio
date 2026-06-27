"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  projectKey: string;
  live: string;
  hasImg: boolean;
  isRight: boolean;
  /** Screenshot file extension (most projects ship webp; some ship png). */
  ext?: string;
  /** Whether a client testimonial exists for this project. */
  hasTestimonial?: boolean;
}

export function ProjectCard({
  projectKey,
  live,
  hasImg,
  isRight,
  ext = "webp",
  hasTestimonial = true,
}: ProjectCardProps) {
  const t = useTranslations("projects");
  const name = t(`${projectKey}.name`);

  return (
    <div
      data-reveal="0"
      className="proj-card brm-glass rounded-[28px] p-[26px] grid grid-cols-1 min-[880px]:grid-cols-[1.05fr_0.95fr] gap-6 min-[880px]:gap-9 items-center"
    >
      {/* Visual */}
      <div
        data-tilt
        className={`relative ${isRight ? "min-[880px]:order-2" : ""}`}
        style={{ transformStyle: "preserve-3d", transition: "transform .2s ease-out" }}
      >
        {hasImg ? (
          <>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "#0b0b14",
                boxShadow: "0 30px 70px -30px rgba(0,0,0,0.8)",
              }}
            >
              <div
                className="flex items-center gap-1.5 px-3.5 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
              </div>
              <Image
                src={`/projects/${projectKey}/desktop-1.${ext}`}
                alt={`${name} preview`}
                width={1440}
                height={900}
                loading="lazy"
                sizes="(max-width: 880px) 90vw, 560px"
                className="w-full h-auto block"
              />
              <div
                className="brm-glare absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
            <div
              className="absolute -bottom-[22px] -end-1.5 w-[88px] rounded-2xl overflow-hidden"
              style={{
                border: "3px solid #14141f",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.7)",
                background: "#0b0b14",
              }}
            >
              <Image
                src={`/projects/${projectKey}/mobile-1.${ext}`}
                alt={`${name} mobile`}
                width={750}
                height={1624}
                loading="lazy"
                sizes="88px"
                className="w-full h-auto block"
              />
            </div>
          </>
        ) : (
          <div
            className="relative rounded-2xl grid place-items-center text-center"
            style={{
              aspectRatio: "16 / 10",
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(150deg,rgba(139,92,246,0.25),rgba(6,182,212,0.18))",
              boxShadow: "0 30px 70px -30px rgba(0,0,0,0.8)",
            }}
          >
            <div>
              <div className="text-[40px] mb-2">📱</div>
              <div className="font-display font-bold text-xl text-white">
                {name}
              </div>
              <div
                className="text-[13px] mt-1"
                style={{ color: "rgba(233,233,242,0.6)" }}
              >
                Mobile App · iOS &amp; Android
              </div>
            </div>
            <div
              className="brm-glare absolute inset-0 pointer-events-none"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <span
          className="inline-block text-[11.5px] font-semibold tracking-[0.06em] uppercase px-3 py-[5px] rounded-full mb-3.5"
          style={{ background: "rgba(139,92,246,0.16)", color: "#c9b8ff" }}
        >
          {t(`${projectKey}.sector`)}
        </span>
        <h3 className="font-display font-bold text-[26px] text-white mb-3">
          {name}
        </h3>
        <p
          className="mb-4 text-[14.5px] leading-[1.7]"
          style={{ color: "rgba(233,233,242,0.66)" }}
        >
          {t(`${projectKey}.description`)}
        </p>

        <div className="flex flex-col gap-2 mb-[18px]">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex items-start gap-2.5 text-[13.5px] leading-[1.5]"
              style={{ color: "rgba(233,233,242,0.72)" }}
            >
              <span className="shrink-0 mt-px text-[#06B6D4]">✓</span>
              {t(`${projectKey}.highlight${n}`)}
            </div>
          ))}
        </div>

        {hasTestimonial && (
          <div
            className="rounded-[14px] px-4 py-3.5 mb-[18px]"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p
              className="mb-2.5 text-[13.5px] leading-[1.6] italic"
              style={{ color: "rgba(233,233,242,0.78)" }}
            >
              &ldquo;{t(`${projectKey}.testimonialQuote`)}&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <span
                className="grid place-items-center w-8 h-8 rounded-full font-bold text-[13px] text-white"
                style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)" }}
              >
                {t(`${projectKey}.testimonialAuthor`).charAt(0)}
              </span>
              <div>
                <div className="text-[13px] font-semibold text-white">
                  {t(`${projectKey}.testimonialAuthor`)}
                </div>
                <div
                  className="text-[11.5px]"
                  style={{ color: "rgba(233,233,242,0.55)" }}
                >
                  {t(`${projectKey}.testimonialPosition`)}
                </div>
              </div>
            </div>
          </div>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.3"
            className="magnetic-btn no-underline inline-flex items-center gap-2 px-[22px] py-[11px] rounded-xl text-white font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
              boxShadow: "0 10px 30px -10px rgba(139,92,246,0.6)",
            }}
          >
            {t("viewLive")} ↗
          </a>
        )}
      </div>
    </div>
  );
}
