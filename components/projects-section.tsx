"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./project-card";

type Project = {
  key: string;
  live: string;
  hasImg: boolean;
  ext?: string;
  hasTestimonial?: boolean;
};

const PROJECTS: Project[] = [
  {
    key: "tevoca",
    live: "https://tevoca-website-460568149866.me-central1.run.app/en",
    hasImg: true,
  },
  { key: "palestinian", live: "https://palestinianrestaurant.com", hasImg: true },
  { key: "olive", live: "https://theolivebranchprague.com", hasImg: true },
  { key: "digitalizers", live: "https://digitalizers.co", hasImg: true },
  { key: "elite", live: "https://elite-spaces-website.vercel.app/", hasImg: true },
  { key: "karas", live: "https://karashowardjewellers.com/", hasImg: true },
  {
    key: "xenon",
    live: "https://xenon.com.eg/",
    hasImg: true,
    ext: "png",
    hasTestimonial: false,
  },
  { key: "tickets", live: "", hasImg: false },
];

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="px-6 py-[90px] max-w-[1180px] mx-auto">
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
          className="mx-auto max-w-[600px] text-base leading-[1.7]"
          style={{ color: "rgba(233,233,242,0.62)" }}
        >
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.key}
            projectKey={p.key}
            live={p.live}
            hasImg={p.hasImg}
            ext={p.ext}
            hasTestimonial={p.hasTestimonial}
            isRight={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
