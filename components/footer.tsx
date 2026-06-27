"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-9 max-w-[1180px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      role="contentinfo"
    >
      <div className="flex flex-wrap justify-between items-center gap-4.5">
        <div className="flex items-center gap-2.5">
          <span
            className="grid place-items-center w-[34px] h-[34px] rounded-[10px] text-white font-display font-extrabold text-sm"
            style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)" }}
          >
            B
          </span>
          <div>
            <div className="font-display font-bold text-[15px] text-white">
              Bishoy R Mansour
            </div>
            <div
              className="text-[12px]"
              style={{ color: "rgba(233,233,242,0.5)" }}
            >
              {t("tagline")}
            </div>
          </div>
        </div>
        <div
          className="text-[12.5px]"
          style={{ color: "rgba(233,233,242,0.45)" }}
        >
          © {year} Bishoy R Mansour. {t("rights")}.
        </div>
      </div>
    </footer>
  );
}
