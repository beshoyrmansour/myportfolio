"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Download, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  buttonTap,
  viewportOptions,
} from "@/lib/animations";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    alert(t("contact.success"));
    reset();
  };

  // Skills data organized by category
  const skills = {
    frontend: [
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
    uiFrameworks: [
      "TailwindCSS",
      "CVA",
      "Bootstrap",
      "Material-UI",
      "Ant Design",
    ],
    crossPlatform: ["React Native", "Flutter", "Ionic"],
    design: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"],
    testing: ["Jest", "Vitest", "Git", "Jenkins"],
  };

  // Projects data with gradient colors and image counts per device
  const projects = [
    {
      key: "tevoca",
      url: "https://tevoca-website-460568149866.me-central1.run.app/en",
      gradient: "from-violet-500 to-indigo-600",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "palestinian",
      url: "https://palestinianrestaurant.com",
      gradient: "from-amber-500 to-red-600",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "olive",
      url: "https://theolivebranchprague.com",
      gradient: "from-emerald-500 to-teal-600",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "digitalizers",
      url: "https://digitalizers.co",
      gradient: "from-blue-500 to-cyan-600",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "elite",
      url: "https://elite-spaces-website.vercel.app/",
      gradient: "from-slate-600 to-amber-500",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "karas",
      url: "https://karashowardjewellers.com/",
      gradient: "from-amber-400 to-rose-500",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
    {
      key: "tickets",
      url: null,
      gradient: "from-orange-500 to-pink-600",
      imageCount: { desktop: 3, tablet: 2, mobile: 2 },
    },
  ];

  // Skill category colors for interactive borders
  const skillColors = {
    frontend: {
      border: "border-purple-200 dark:border-purple-900/50",
      hoverBorder: "hover:border-purple-500",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.4)]",
      bg: "hover:bg-purple-50 dark:hover:bg-purple-950/30",
      gradient: "from-purple-500 to-violet-600",
    },
    uiFrameworks: {
      border: "border-blue-200 dark:border-blue-900/50",
      hoverBorder: "hover:border-blue-500",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)]",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
      gradient: "from-blue-500 to-indigo-600",
    },
    crossPlatform: {
      border: "border-cyan-200 dark:border-cyan-900/50",
      hoverBorder: "hover:border-cyan-500",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)]",
      bg: "hover:bg-cyan-50 dark:hover:bg-cyan-950/30",
      gradient: "from-cyan-500 to-teal-600",
    },
    design: {
      border: "border-pink-200 dark:border-pink-900/50",
      hoverBorder: "hover:border-pink-500",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(236,72,153,0.4)]",
      bg: "hover:bg-pink-50 dark:hover:bg-pink-950/30",
      gradient: "from-pink-500 to-rose-600",
    },
    testing: {
      border: "border-green-200 dark:border-green-900/50",
      hoverBorder: "hover:border-green-500",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)]",
      bg: "hover:bg-green-50 dark:hover:bg-green-950/30",
      gradient: "from-green-500 to-emerald-600",
    },
  };

  const renderSkillCategory = (
    categoryKey: keyof typeof skills,
    translationKey: string,
    colors: (typeof skillColors)[keyof typeof skillColors],
  ) => (
    <motion.div className="text-center">
      <h3 className="text-xl font-bold tracking-tight mb-6 inline-flex items-center gap-3">
        <span
          className={`inline-flex w-2 h-2 rounded-full bg-linear-to-r ${colors.gradient}`}
        />
        {t(translationKey)}
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="flex flex-wrap justify-center gap-3"
      >
        {skills[categoryKey].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`skill-tag glass-pill relative px-10 py-5 text-foreground rounded-2xl font-semibold border ${colors.border} ${colors.hoverBorder} ${colors.hoverShadow} ${colors.bg} transition-all duration-300 cursor-default select-none`}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Navigation />

      <main id="main-content" className="w-full relative">
        {/* ========== HERO SECTION ========== */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden flex-col"
        >
          {/* Animated gradient orbs — portrait-inspired palette */}
          <div className="orb orb-1" aria-hidden="true" />
          <div className="orb orb-2" aria-hidden="true" />
          <div className="orb orb-3" aria-hidden="true" />
          <div className="orb orb-gold" aria-hidden="true" />
          <div className="orb orb-magenta" aria-hidden="true" />

          {/* Bokeh circles */}
          <div className="bokeh bokeh-gold-1" aria-hidden="true" />
          <div className="bokeh bokeh-gold-2" aria-hidden="true" />
          <div className="bokeh bokeh-teal-1" aria-hidden="true" />
          <div className="bokeh bokeh-teal-2" aria-hidden="true" />

          {/* Geometric panels */}
          <div className="geo-panel geo-panel-1" aria-hidden="true" />
          <div className="geo-panel geo-panel-2" aria-hidden="true" />

          <div className="relative mx-auto text-center z-10">
            <div className="mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Experience Badge with Glassmorphism */}
                <motion.div className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-pill animate-float">
                  <Sparkles
                    className="w-5 h-5 text-gradient-via"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold tracking-tight bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {t("hero.years")} {t("hero.yearsLabel")}
                  </span>
                </motion.div>

                {/* Greeting */}
                <motion.p className="text-xl text-muted-foreground font-medium">
                  {t("hero.greeting")}
                </motion.p>

                {/* Name with Gradient */}
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="gradient-text">{t("hero.name")}</span>
                </motion.h1>

                {/* Title */}
                <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {t("hero.title")}
                </motion.h2>

                {/* Description */}
                <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                  {t("hero.description")}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4">
                  <motion.a
                    href="#projects"
                    whileTap={buttonTap}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 50px -15px rgba(139, 92, 246, 0.5)",
                    }}
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-2xl font-bold shadow-premium hover:shadow-premium-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 w-full sm:w-auto overflow-hidden cursor-pointer"
                    aria-label="View my work - scroll to projects section"
                  >
                    <span className="relative z-10">{t("hero.cta")}</span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-700 via-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                  <motion.a
                    href="/resume/Bishoy-R-Mansour-Resume.pdf"
                    download
                    whileTap={buttonTap}
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center justify-center gap-3 px-12 py-6 glass text-foreground rounded-2xl font-bold hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 w-full sm:w-auto cursor-pointer"
                    aria-label="Download Bishoy R Mansour resume PDF"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    {t("hero.downloadResume")}
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* ========== ABOUT SECTION ========== */}
        <section
          id="about"
          className="relative min-h-screen py-20 md:py-32 mx-auto text-center mesh-bg overflow-hidden"
        >
          {/* Geometric panels */}
          <div className="geo-panel geo-panel-2" aria-hidden="true" />
          <div className="geo-panel geo-panel-3" aria-hidden="true" />
          {/* Bokeh accents */}
          <div className="bokeh bokeh-gold-1" aria-hidden="true" />
          <div className="bokeh bokeh-teal-2" aria-hidden="true" />

          <div className="container flex flex-col justify-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                  {t("about.title")}
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground">
                  {t("about.subtitle")}
                </motion.p>
              </div>

              {/* Content - Centered Single Column */}
              <div className="flex flex-col items-center justify-center mx-auto space-y-12 text-center">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-white/60 dark:border-white/10 shadow-xl overflow-hidden"
                >
                  <Image
                    src="/Gemini_Generated_Image_eqv088eqv088eqv0.png"
                    alt="Bishoy R Mansour — illustrated portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div className="space-y-8 text-center">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto px-6 py-2">
                    {t("about.description")}
                  </p>

                  <div className="mx-auto px-6">
                    <h3 className="text-2xl font-bold tracking-tight mb-6">
                      {t("about.experience")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed py-2">
                      {t("about.currentRole")}
                    </p>
                  </div>

                  <div className="mx-auto px-6">
                    <h3 className="text-2xl font-bold tracking-tight mb-6">
                      {t("about.specialties")}
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <motion.li
                          key={num}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center px-8 py-4 rounded-full glass-pill text-secondary-foreground text-sm font-medium cursor-default"
                        >
                          {t(`about.specialty${num}`)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* ========== EXPERIENCE SECTION ========== */}
        <section
          id="experience"
          className="relative py-20 md:py-32 mesh-bg overflow-hidden"
        >
          {/* Geometric panels */}
          <div className="geo-panel geo-panel-1" aria-hidden="true" />
          <div className="geo-panel geo-panel-3" aria-hidden="true" />
          {/* Bokeh accents */}
          <div className="bokeh bokeh-gold-2" aria-hidden="true" />
          <div className="bokeh bokeh-teal-1" aria-hidden="true" />

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                  {t("experience.title")}
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground mb-2">
                  {t("experience.subtitle")}
                </motion.p>
                <motion.p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  {t("experience.description")}
                </motion.p>
              </div>

              {/* Timeline */}
              <ExperienceTimeline t={t} />
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* ========== SKILLS SECTION ========== */}
        <section id="skills" className="relative py-20 md:py-32">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                  {t("skills.title")}
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground">
                  {t("skills.subtitle")}
                </motion.p>
              </div>

              {/* Skills Grid — Interactive with glow & color */}
              <div className="space-y-12 max-w-6xl mx-auto">
                {renderSkillCategory(
                  "frontend",
                  "skills.frontend",
                  skillColors.frontend,
                )}
                {renderSkillCategory(
                  "uiFrameworks",
                  "skills.uiFrameworks",
                  skillColors.uiFrameworks,
                )}
                {renderSkillCategory(
                  "crossPlatform",
                  "skills.crossPlatform",
                  skillColors.crossPlatform,
                )}
                {renderSkillCategory(
                  "design",
                  "skills.design",
                  skillColors.design,
                )}
                {renderSkillCategory(
                  "testing",
                  "skills.testing",
                  skillColors.testing,
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* ========== PROJECTS SECTION ========== */}
        <section
          id="projects"
          className="relative py-20 md:py-32 mesh-bg overflow-hidden"
        >
          {/* Geometric panels */}
          <div className="geo-panel geo-panel-1" aria-hidden="true" />
          {/* Bokeh accents */}
          <div className="bokeh bokeh-teal-1" aria-hidden="true" />
          <div className="bokeh bokeh-gold-2" aria-hidden="true" />

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                  {t("projects.title")}
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground mb-2">
                  {t("projects.subtitle")}
                </motion.p>
                <motion.p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  {t("projects.description")}
                </motion.p>
              </div>

              {/* Projects List */}
              <div className="space-y-8 space-x-4">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.key}
                    project={project}
                    t={t}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" aria-hidden="true" />

        {/* ========== CONTACT SECTION ========== */}
        <section id="contact" className="relative py-20 md:py-32">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                  {t("contact.title")}
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground mb-2">
                  {t("contact.subtitle")}
                </motion.p>
                <motion.p className="text-base text-muted-foreground mx-auto">
                  {t("contact.description")}
                </motion.p>
              </div>

              <div className="mx-auto max-w-2xl">
                {/* Contact Form — Glassmorphic card */}
                <motion.div className="mb-12 glass-card p-8 md:p-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Name Field */}
                    <div className="text-left">
                      <label
                        htmlFor="name"
                        className="flex text-sm font-semibold text-foreground mb-3 flex"
                      >
                        {t("contact.name")}
                        <span
                          className="text-destructive ml-1"
                          aria-label="required"
                        >
                          *
                        </span>
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/30 border border-gray-200/60 dark:border-white/5 rounded-2xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-2 text-sm text-destructive font-medium text-left"
                          role="alert"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="text-left">
                      <label
                        htmlFor="email"
                        className="flex text-sm font-semibold text-foreground mb-3"
                      >
                        {t("contact.email")}
                        <span
                          className="text-destructive ml-1"
                          aria-label="required"
                        >
                          *
                        </span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/30 border border-gray-200/60 dark:border-white/5 rounded-2xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-2 text-sm text-destructive font-medium text-left"
                          role="alert"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="text-left">
                      <label
                        htmlFor="message"
                        className="flex text-sm font-semibold text-foreground mb-3"
                      >
                        {t("contact.message")}
                        <span
                          className="text-destructive ml-1"
                          aria-label="required"
                        >
                          *
                        </span>
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={5}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/30 border border-gray-200/60 dark:border-white/5 rounded-2xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-2 text-sm text-destructive font-medium text-left"
                          role="alert"
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-3 px-12 py-6 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:shadow-premium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Send message"
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="inline-flex w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                            aria-hidden="true"
                          />
                          {t("contact.sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          {t("contact.send")}
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div className="space-y-8 text-center">
                  {/* Direct Contact */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-4">
                      {t("contact.or")}
                    </h3>
                    <a
                      href="mailto:beshoy.r.mansour@gmail.com"
                      className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1 cursor-pointer"
                      aria-label="Send email to beshoy.r.mansour@gmail.com"
                    >
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      <span className="font-semibold">
                        beshoy.r.mansour@gmail.com
                      </span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-4">
                      {t("contact.social")}
                    </h3>
                    <div className="flex gap-4 justify-center">
                      <motion.a
                        href="https://github.com/beshoyrmansour"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-2xl glass-button text-foreground transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
                        aria-label="Visit Bishoy R Mansour GitHub profile"
                      >
                        <Github className="w-6 h-6" aria-hidden="true" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/beshoy-r-mansour/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-2xl glass-button text-foreground transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
                        aria-label="Visit Bishoy R Mansour LinkedIn profile"
                      >
                        <Linkedin className="w-6 h-6" aria-hidden="true" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Availability Note */}
                  <div className="p-8 glass-card">
                    <p className="text-sm text-foreground leading-relaxed py-2 px-4">
                      <strong className="font-bold">Currently available</strong>{" "}
                      for freelance projects and full-time opportunities. Feel
                      free to reach out to discuss collaboration!
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
