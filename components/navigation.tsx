"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { useLocaleSwitcher } from "@/components/intl-provider";

const SECTIONS = ["home", "about", "experience", "skills", "projects"] as const;

export function Navigation() {
  const t = useTranslations("nav");
  const { locale, setLocale } = useLocaleSwitcher();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = [...SECTIONS, "contact"];
    // Scroll-position based: the section whose top has passed a line just below
    // the nav is "active". Works for sections taller than the viewport (which an
    // intersection-ratio threshold cannot reliably detect).
    const compute = () => {
      setScrolled(window.scrollY > 24);
      const line = 130;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Snap to the last section when scrolled to the very bottom.
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        compute();
        ticking = false;
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const switchLang = () => setLocale(locale === "en" ? "ar" : "en");

  const links = SECTIONS.map((id) => ({ id, label: t(id) }));

  return (
    <>
      <nav
        className="brm-nav fixed top-3.5 left-3 right-3 z-[900] flex items-center gap-1.5 py-2 ps-4 pe-2.5 rounded-full transition-[background,box-shadow] duration-300 min-[880px]:left-1/2 min-[880px]:right-auto min-[880px]:-translate-x-1/2 min-[880px]:max-w-[calc(100vw-24px)]"
        style={{
          border: "1px solid rgba(255,255,255,0.09)",
          background: scrolled ? "rgba(10,10,16,0.78)" : "rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="flex items-center gap-2 me-2 no-underline"
          aria-label="Home — Bishoy R Mansour"
        >
          <span
            className="grid place-items-center w-[30px] h-[30px] rounded-[9px] text-white font-display font-extrabold text-[13px]"
            style={{
              background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
              boxShadow: "0 4px 14px rgba(139,92,246,0.5)",
            }}
          >
            B
          </span>
          <span className="font-display font-bold text-[15px] text-white tracking-tight">
            BRM
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden min-[880px]:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                id={`nav-${l.id}`}
                href={`#${l.id}`}
                onClick={(e) => scrollTo(e, `#${l.id}`)}
                aria-current={isActive ? "true" : undefined}
                className="relative no-underline text-[13.5px] font-medium px-3 py-2 rounded-full transition-colors"
                style={{ color: isActive ? "#fff" : "rgba(233,233,242,0.62)" }}
              >
                {l.label}
                <span
                  className="absolute start-3 end-3 bottom-1 h-0.5 rounded-sm origin-[left] transition-transform duration-300"
                  style={{
                    background: "linear-gradient(90deg,#8B5CF6,#06B6D4)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* Actions (pushed to the right on mobile) */}
        <div className="flex items-center gap-1.5 ms-auto min-[880px]:ms-0">
        {/* Language switch */}
        <button
          onClick={switchLang}
          className="grid place-items-center w-[38px] h-[38px] rounded-full text-white/80 hover:text-white transition-colors"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
          }}
          aria-label={locale === "en" ? "التبديل إلى العربية" : "Switch to English"}
          title={locale === "en" ? "العربية" : "English"}
        >
          <Globe className="w-[17px] h-[17px]" aria-hidden="true" />
        </button>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          data-magnetic="0.35"
          className="hidden min-[880px]:inline-flex magnetic-btn no-underline px-[18px] py-[9px] rounded-full text-white text-[13.5px] font-semibold whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
            boxShadow: "0 6px 20px rgba(139,92,246,0.45)",
          }}
        >
          {t("cta")}
        </a>

        {/* Burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="min-[880px]:hidden grid place-items-center w-[38px] h-[38px] rounded-[11px] text-white"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="min-[880px]:hidden fixed top-[70px] left-3 right-3 z-[899] p-2.5 rounded-[22px] flex flex-col gap-0.5"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(12,12,20,0.92)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => scrollTo(e, `#${l.id}`)}
              className="no-underline text-[#e9e9f2] text-base font-medium px-4 py-3.5 rounded-[14px] hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="no-underline text-center text-white text-base font-semibold px-4 py-3.5 rounded-[14px] mt-1"
            style={{ background: "linear-gradient(135deg,#8B5CF6,#3B82F6)" }}
          >
            {t("cta")}
          </a>
        </div>
      )}
    </>
  );
}
