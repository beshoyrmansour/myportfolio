"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Monitor,
  Tablet,
  Smartphone,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type DeviceType = "desktop" | "tablet" | "mobile";

interface ProjectData {
  key: string;
  url: string | null;
  gradient: string;
  imageCount: { desktop: number; tablet: number; mobile: number };
}

interface ProjectCardProps {
  project: ProjectData;
  t: (key: string) => string;
  index: number;
}

const devices = [
  { key: "desktop" as const, icon: Monitor, label: "Desktop" },
  { key: "tablet" as const, icon: Tablet, label: "Tablet" },
  { key: "mobile" as const, icon: Smartphone, label: "Mobile" },
];

const deviceAspect: Record<DeviceType, string> = {
  desktop: "aspect-[16/10]",
  tablet: "aspect-[4/3]",
  mobile: "aspect-[9/19]",
};

export function ProjectCard({ project, t, index }: ProjectCardProps) {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const isReversed = index % 2 === 1;
  const currentImageCount = project.imageCount[activeDevice];

  const getImagePath = useCallback(
    (device: DeviceType, idx: number) =>
      `/projects/${project.key}/${device}-${idx + 1}.webp`,
    [project.key],
  );

  const handleImageError = useCallback((path: string) => {
    setImageErrors((prev) => new Set(prev).add(path));
  }, []);

  const switchDevice = useCallback((device: DeviceType) => {
    setActiveDevice(device);
    setActiveImageIndex(0);
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      setActiveImageIndex((prev) => {
        if (direction === "next") {
          return prev < currentImageCount - 1 ? prev + 1 : 0;
        }
        return prev > 0 ? prev - 1 : currentImageCount - 1;
      });
    },
    [currentImageCount],
  );

  const currentPath = getImagePath(activeDevice, activeImageIndex);
  const hasImageError = imageErrors.has(currentPath);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group premium-card bg-white/85 dark:bg-gray-900/40 border border-gray-200/60 dark:border-white/5 rounded-3xl overflow-hidden"
    >
      <div
        className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}
      >
        {/* ── Gallery Side ── */}
        <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10">
          {/* Device Tabs */}
          <div className="flex gap-2 mb-5">
            {devices.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => switchDevice(key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeDevice === key
                    ? "bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20"
                    : "glass-pill text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`View ${label} screenshots`}
                aria-pressed={activeDevice === key}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Device Frame */}
          <div className={`device-frame device-frame-${activeDevice} relative`}>
            {/* Browser Chrome for Desktop */}
            {activeDevice === "desktop" && (
              <div className="browser-bar flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200/60 dark:border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white/80 dark:bg-gray-700/60 rounded-lg px-3 py-1 text-xs text-muted-foreground truncate max-w-xs">
                    {project.url || `${project.key}.app`}
                  </div>
                </div>
              </div>
            )}

            {/* Tablet Notch */}
            {activeDevice === "tablet" && (
              <div className="tablet-notch flex justify-center py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200/60 dark:border-white/5">
                <div className="w-2 h-2 rounded-full bg-gray-400/50 dark:bg-gray-600" />
              </div>
            )}

            {/* Mobile Status Bar */}
            {activeDevice === "mobile" && (
              <div className="mobile-status flex items-center justify-between px-4 py-1.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200/60 dark:border-white/5">
                <span className="text-[10px] font-semibold text-muted-foreground">
                  9:41
                </span>
                <div className="w-20 h-5 rounded-full bg-gray-900 dark:bg-white mx-auto" />
                <div className="flex gap-1">
                  <div className="w-4 h-2 rounded-sm bg-gray-400/50" />
                </div>
              </div>
            )}

            {/* Image Area */}
            <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeDevice}-${activeImageIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative w-full ${deviceAspect[activeDevice]} ${activeDevice === "mobile" ? "max-h-[420px]" : ""}`}
                >
                  {/* Gradient Placeholder (always behind) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {activeDevice === "desktop" && (
                        <Monitor className="w-6 h-6 text-white/60" />
                      )}
                      {activeDevice === "tablet" && (
                        <Tablet className="w-6 h-6 text-white/60" />
                      )}
                      {activeDevice === "mobile" && (
                        <Smartphone className="w-6 h-6 text-white/60" />
                      )}
                    </div>
                    <span className="text-white/50 text-xs font-medium tracking-wide uppercase">
                      {t(`projects.${project.key}.name`)} &middot;{" "}
                      {activeDevice} {activeImageIndex + 1}
                    </span>
                  </div>

                  {/* Actual Screenshot (overlays placeholder) */}
                  {!hasImageError && (
                    <Image
                      src={currentPath}
                      alt={`${t(`projects.${project.key}.name`)} - ${activeDevice} view ${activeImageIndex + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes={
                        activeDevice === "mobile"
                          ? "280px"
                          : activeDevice === "tablet"
                            ? "400px"
                            : "600px"
                      }
                      onError={() => handleImageError(currentPath)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {currentImageCount > 1 && (
                <>
                  <button
                    onClick={() => navigateImage("prev")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 cursor-pointer z-10"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateImage("next")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 cursor-pointer z-10"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom bar for mobile */}
            {activeDevice === "mobile" && (
              <div className="flex justify-center py-1.5 bg-gray-100 dark:bg-gray-800 border-t border-gray-200/60 dark:border-white/5">
                <div className="w-28 h-1 rounded-full bg-gray-400/40 dark:bg-gray-600" />
              </div>
            )}
          </div>

          {/* Carousel Dots */}
          {currentImageCount > 1 && (
            <div
              className="flex justify-center gap-2 mt-4"
              role="tablist"
              aria-label="Screenshot navigation"
            >
              {Array.from({ length: currentImageCount }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeImageIndex}
                  aria-label={`Screenshot ${i + 1}`}
                  onClick={() => setActiveImageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeImageIndex
                      ? "w-7 bg-linear-to-r from-purple-500 to-blue-500"
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Details Side ── */}
        <div className="w-full lg:w-[45%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-6">
          {/* Header */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {t(`projects.${project.key}.sector`)}
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-tight">
              {t(`projects.${project.key}.name`)}
            </h3>
          </div>

          {/* Long Description */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {t(`projects.${project.key}.longDescription`)}
          </p>

          {/* Key Highlights */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
              {t("projects.keyHighlights")}
            </p>
            <ul className="space-y-2">
              {[1, 2, 3].map((num) => (
                <li
                  key={num}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="inline-flex w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500 mt-1.5 shrink-0" />
                  {t(`projects.${project.key}.highlight${num}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-white/5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              {t("projects.roleLabel")}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {t(`projects.${project.key}.role`)}
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 border border-gray-200/50 dark:border-white/5">
            <Quote
              className="w-5 h-5 text-purple-400/40 mb-2"
              aria-hidden="true"
            />
            <blockquote>
              <p className="text-sm text-foreground leading-relaxed italic">
                {t(`projects.${project.key}.testimonialQuote`)}
              </p>
              <footer className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {t(`projects.${project.key}.testimonialAuthor`)
                      .charAt(0)
                      .toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">
                    {t(`projects.${project.key}.testimonialAuthor`)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(`projects.${project.key}.testimonialPosition`)}
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* CTA */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-bold bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 rounded-md px-1 py-1 w-fit cursor-pointer"
              aria-label={`View ${t(`projects.${project.key}.name`)} live website`}
            >
              {t("projects.viewLive")}
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          ) : (
            <p className="text-sm text-muted-foreground font-semibold">
              {t("projects.mobileApp")}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
