"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { menuVariants, menuItemVariants } from "@/lib/animations";

export function Navigation() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#experience", label: t("experience") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed left-4 right-4 z-50 rounded-2xl transition-all duration-300 m-0 ${
        scrolled ? "floating-nav-scrolled" : "floating-nav"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl md:text-2xl font-bold tracking-tighter text-foreground hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Home - Bishoy R Mansour"
          >
            <span className="gradient-text">BRM</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 text-sm lg:text-base font-medium text-foreground hover:text-foreground transition-all relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-linear-to-r after:from-purple-600 after:via-blue-600 after:to-cyan-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md cursor-pointer"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              {/* <LanguageSwitcher /> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-20 right-4 left-4 glass-card md:hidden shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col p-6">
                <nav>
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <motion.li key={item.href} variants={menuItemVariants}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-4 py-3 text-lg font-semibold text-foreground hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                          aria-label={`Navigate to ${item.label}`}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  variants={menuItemVariants}
                  className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-4"
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
