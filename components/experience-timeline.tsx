"use client";

import { useTranslations } from "next-intl";

const EXPERIENCES: { key: string; hasClient: boolean }[] = [
  { key: "ejada", hasClient: true },
  { key: "tagaddod", hasClient: false },
  { key: "ticketsmarche", hasClient: false },
  { key: "iotblue", hasClient: true },
  { key: "flairstech", hasClient: true },
  { key: "crossworkers", hasClient: true },
  { key: "xield", hasClient: true },
  { key: "itworx", hasClient: true },
  { key: "vodafone", hasClient: true },
  { key: "instructor", hasClient: false },
  { key: "truemega", hasClient: true },
];

export function ExperienceTimeline() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="px-6 py-[90px] max-w-[980px] mx-auto">
      <div data-reveal="0" className="text-center mb-[54px]">
        <p className="mb-2 text-[13px] font-semibold tracking-[0.16em] uppercase text-[#8b7fff]">
          {t("title")}
        </p>
        <h2
          className="font-display font-bold tracking-[-0.02em] mb-3.5"
          style={{ fontSize: "clamp(30px,4.6vw,46px)" }}
        >
          {t("subtitle")}
        </h2>
        <p
          className="mx-auto max-w-[560px] text-base leading-[1.7]"
          style={{ color: "rgba(233,233,242,0.62)" }}
        >
          {t("description")}
        </p>
      </div>

      <div className="relative">
        {/* Spine */}
        <div
          className="absolute start-[19px] top-1.5 bottom-1.5 w-0.5"
          style={{
            background:
              "linear-gradient(to bottom,#8B5CF6,#3B82F6,#06B6D4,transparent)",
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-[22px]">
          {EXPERIENCES.map((exp, i) => {
            const type = t(`${exp.key}.type`);
            const tech = t(`${exp.key}.tech`).split(", ");
            return (
              <div
                key={exp.key}
                data-reveal={(i % 4) * 70}
                className="relative ps-14"
              >
                {/* Dot */}
                <div
                  className="absolute start-2.5 top-1.5 w-5 h-5 rounded-full"
                  style={{
                    background: "#0b0b14",
                    border: "2px solid #8B5CF6",
                    boxShadow: "0 0 0 4px rgba(139,92,246,0.14)",
                  }}
                  aria-hidden="true"
                />
                <article className="exp-card brm-glass rounded-[20px] px-6 py-[22px]">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-[12.5px] font-semibold text-[#7dd3fc]">
                      {t(`${exp.key}.period`)}
                    </span>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-[3px] rounded-full"
                      style={{
                        background: "rgba(139,92,246,0.16)",
                        color: "#c9b8ff",
                      }}
                    >
                      {t(type)}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[19px] text-white mb-0.5">
                    {t(`${exp.key}.company`)}
                  </h3>
                  <div className="flex flex-wrap items-baseline gap-2 mb-3">
                    <span className="text-[14.5px] font-semibold text-[#a78bfa]">
                      {t(`${exp.key}.role`)}
                    </span>
                    {exp.hasClient && (
                      <span
                        className="text-[13px]"
                        style={{ color: "rgba(233,233,242,0.5)" }}
                      >
                        · {t(`${exp.key}.client`)}
                      </span>
                    )}
                  </div>
                  <p
                    className="mb-3.5 text-[14.5px] leading-[1.68]"
                    style={{ color: "rgba(233,233,242,0.68)" }}
                  >
                    {t(`${exp.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-[7px]">
                    {tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] font-medium px-2.5 py-[5px] rounded-full"
                        style={{
                          border: "1px solid rgba(255,255,255,0.1)",
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(233,233,242,0.78)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
