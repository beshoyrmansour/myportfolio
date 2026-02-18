"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/beshoyrmansour",
      icon: Github,
      ariaLabel: "Visit Bishoy R Mansour GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/beshoy-r-mansour/",
      icon: Linkedin,
      ariaLabel: "Visit Bishoy R Mansour LinkedIn profile",
    },
    {
      name: "Email",
      href: "mailto:beshoy.r.mansour@gmail.com",
      icon: Mail,
      ariaLabel: "Send email to beshoy.r.mansour@gmail.com",
    },
  ];

  return (
    <footer
      className="w-full relative"
      role="contentinfo"
    >
      {/* Gradient accent line at top */}
      <div
        className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="bg-white/50 dark:bg-gray-950/30 backdrop-blur-2xl backdrop-saturate-180">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold tracking-tighter">
                <span className="gradient-text">BRM</span>
              </h3>
              <p className="text-sm text-muted-foreground w-full leading-relaxed">
                {t("tagline")}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex items-center gap-3 justify-center">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-2xl glass-button text-foreground transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
                    aria-label={link.ariaLabel}
                  >
                    <link.icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Accessibility Statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                {t("accessibility")}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("accessibilityText")}
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-muted-foreground text-center sm:text-left font-medium">
              &copy; {new Date().getFullYear()} Bishoy R Mansour. {t("rights")}.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-2xl glass-button text-foreground transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
