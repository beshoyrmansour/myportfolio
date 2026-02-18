"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Palette } from "lucide-react";

interface ExperienceEntry {
  key: string;
  gradient: string;
  icon: "work" | "freelance" | "teaching";
  hasClient: boolean;
}

const experiences: ExperienceEntry[] = [
  {
    key: "ejada",
    gradient: "from-violet-500 to-indigo-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "tagaddod",
    gradient: "from-emerald-500 to-teal-600",
    icon: "work",
    hasClient: false,
  },
  {
    key: "ticketsmarche",
    gradient: "from-orange-500 to-pink-600",
    icon: "freelance",
    hasClient: false,
  },
  {
    key: "iotblue",
    gradient: "from-blue-500 to-cyan-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "flairstech",
    gradient: "from-purple-500 to-violet-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "crossworkers",
    gradient: "from-green-500 to-emerald-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "xield",
    gradient: "from-pink-500 to-rose-600",
    icon: "freelance",
    hasClient: true,
  },
  {
    key: "itworx",
    gradient: "from-sky-500 to-blue-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "vodafone",
    gradient: "from-red-500 to-rose-600",
    icon: "work",
    hasClient: true,
  },
  {
    key: "instructor",
    gradient: "from-amber-500 to-orange-600",
    icon: "teaching",
    hasClient: false,
  },
  {
    key: "truemega",
    gradient: "from-slate-500 to-gray-600",
    icon: "work",
    hasClient: true,
  },
];

const iconMap = {
  work: Briefcase,
  freelance: Palette,
  teaching: GraduationCap,
};

const typeColors = {
  fulltime:
    "bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white",
  freelance: "bg-linear-to-r from-orange-500 to-pink-500 text-white",
  teaching: "bg-linear-to-r from-amber-500 to-orange-500 text-white",
};

interface ExperienceTimelineProps {
  t: (key: string) => string;
}

export function ExperienceTimeline({ t }: ExperienceTimelineProps) {
  return (
    <div className="timeline-container relative max-w-5xl mx-auto">
      {/* Timeline Spine */}
      <div
        className="timeline-spine absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/40 via-blue-500/30 to-cyan-500/20"
        aria-hidden="true"
      />

      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;
        const Icon = iconMap[exp.icon];
        const type = t(`experience.${exp.key}.type`) as keyof typeof typeColors;

        return (
          <motion.div
            key={exp.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.05,
            }}
            className={`timeline-entry relative flex items-start gap-4 lg:gap-0 mb-12 last:mb-0 ${
              isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className="timeline-dot absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className={`w-12 h-12 rounded-full bg-linear-to-br ${exp.gradient} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-950`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Card */}
            <div
              className={`timeline-card ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                isLeft ? "lg:mr-auto lg:pr-0" : "lg:ml-auto lg:pl-0"
              }`}
            >
              <div className="group premium-card bg-white/85 dark:bg-gray-900/40 border border-gray-200/60 dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                {/* Period & Type Badge Row */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-muted-foreground tracking-wide">
                    {t(`experience.${exp.key}.period`)}
                  </span>
                  <span
                    className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${typeColors[type] || typeColors.fulltime}`}
                  >
                    {t(`experience.${type}`)}
                  </span>
                </div>

                {/* Company & Client */}
                <h3 className="text-lg font-black text-foreground tracking-tight leading-tight">
                  {t(`experience.${exp.key}.company`)}
                </h3>
                {exp.hasClient && (
                  <p className="text-sm text-muted-foreground font-medium mt-0.5">
                    {t(`experience.${exp.key}.client`)}
                  </p>
                )}

                {/* Role */}
                <p className="text-sm font-bold bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mt-1">
                  {t(`experience.${exp.key}.role`)}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {t(`experience.${exp.key}.description`)}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    {t("experience.techLabel")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t(`experience.${exp.key}.tech`)
                      .split(", ")
                      .map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex px-2.5 py-1 rounded-lg text-[11px] font-semibold glass-pill text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
