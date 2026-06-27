"use client";

import { useTranslations } from "next-intl";

const CATEGORIES = [
  {
    key: "frontend",
    icon: "⚛",
    items: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "Remix.js",
      "Vue.js",
      "Nuxt.js",
      "React Native",
      "Electron.js",
    ],
  },
  {
    key: "uiFrameworks",
    icon: "🎨",
    items: ["TailwindCSS", "CVA", "Bootstrap", "Material-UI", "Ant Design"],
  },
  {
    key: "crossPlatform",
    icon: "📱",
    items: ["React Native", "Flutter", "Ionic"],
  },
  {
    key: "design",
    icon: "✏️",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"],
  },
  { key: "testing", icon: "🧪", items: ["Jest", "Vitest", "Git", "Jenkins"] },
] as const;

export function SkillsSection() {
  const t = useTranslations("skills");
  const allSkills = CATEGORIES.flatMap((c) => c.items);
  const marquee = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-[90px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div data-reveal="0" className="text-center mb-12">
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

        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[880px]:grid-cols-3 gap-[18px]">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.key}
              data-reveal={(i % 3) * 80}
              className="skill-card brm-glass rounded-[22px] p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="grid place-items-center w-[38px] h-[38px] rounded-xl text-[18px]"
                  style={{
                    background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
                  }}
                >
                  {cat.icon}
                </span>
                <h3 className="font-display font-semibold text-[16.5px] text-white">
                  {t(cat.key)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="skill-chip text-[13px] font-medium px-3 py-1.5 rounded-full"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(233,233,242,0.82)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div
        data-reveal="0"
        className="mt-[42px] overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
          maskImage:
            "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
        }}
      >
        <div className="brm-marquee-track flex gap-3.5 w-max">
          {marquee.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="font-display font-semibold text-[22px] whitespace-nowrap"
              style={{ color: "rgba(233,233,242,0.3)" }}
            >
              {m} <span className="text-[#8B5CF6]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
