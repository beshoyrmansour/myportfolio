"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Github, Linkedin } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const inputStyle = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
} as const;

const cardStyle = {
  border: "1px solid rgba(255,255,255,0.09)",
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
} as const;

export function ContactSection() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="px-6 pt-[90px] pb-[60px] max-w-[1080px] mx-auto"
    >
      <div data-reveal="0" className="text-center mb-12">
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
          className="mx-auto max-w-[540px] text-base leading-[1.7]"
          style={{ color: "rgba(233,233,242,0.62)" }}
        >
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 min-[880px]:grid-cols-[1.1fr_0.9fr] gap-[30px] items-start">
        {/* Form */}
        <div
          data-reveal="80"
          className="rounded-[24px] p-[30px]"
          style={cardStyle}
        >
          {sent ? (
            <div className="text-center px-2.5 py-[30px]">
              <div className="text-[46px] mb-3">✅</div>
              <h3 className="font-display font-semibold text-[21px] text-white mb-2">
                {t("sentTitle")}
              </h3>
              <p
                className="text-[15px]"
                style={{ color: "rgba(233,233,242,0.66)" }}
              >
                {t("sentText")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              <Field label={`${t("name")} *`}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder={t("namePlaceholder")}
                  className="brm-input w-full px-[15px] py-[13px] rounded-xl text-white text-[15px] outline-none"
                  style={inputStyle}
                />
              </Field>
              <Field label={`${t("email")} *`}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="brm-input w-full px-[15px] py-[13px] rounded-xl text-white text-[15px] outline-none"
                  style={inputStyle}
                />
              </Field>
              <Field label={`${t("message")} *`}>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className="brm-input w-full px-[15px] py-[13px] rounded-xl text-white text-[15px] outline-none resize-y"
                  style={inputStyle}
                />
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                data-magnetic="0.25"
                className="magnetic-btn py-[15px] rounded-[13px] text-white font-semibold text-[15.5px] cursor-pointer disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg,#8B5CF6,#3B82F6,#06B6D4)",
                  backgroundSize: "180% auto",
                  boxShadow: "0 14px 36px -12px rgba(139,92,246,0.6)",
                }}
              >
                {isSubmitting ? t("sending") : `${t("send")} →`}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div data-reveal="140" className="flex flex-col gap-4">
          <div className="rounded-[22px] p-6" style={cardStyle}>
            <h3 className="font-display font-semibold text-base text-white mb-3">
              {t("reachMe")}
            </h3>
            <a
              href="mailto:beshoy.r.mansour@gmail.com"
              className="flex items-center gap-3 no-underline text-[#7dd3fc] text-[14.5px] font-medium break-all"
            >
              <span
                className="grid place-items-center w-[38px] h-[38px] rounded-[11px] shrink-0"
                style={{ background: "rgba(6,182,212,0.16)" }}
              >
                <Mail className="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              beshoy.r.mansour@gmail.com
            </a>
          </div>

          <div className="rounded-[22px] p-6" style={cardStyle}>
            <h3 className="font-display font-semibold text-base text-white mb-3.5">
              {t("social")}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/beshoyrmansour"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="0.4"
                aria-label="GitHub"
                className="social-btn grid place-items-center w-[46px] h-[46px] rounded-[13px] text-[#e9e9f2] no-underline hover:text-[#c9b8ff]"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Github className="w-[19px] h-[19px]" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/beshoy-r-mansour/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="0.4"
                aria-label="LinkedIn"
                className="social-btn grid place-items-center w-[46px] h-[46px] rounded-[13px] text-[#e9e9f2] no-underline hover:text-[#7dd3fc]"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Linkedin className="w-[19px] h-[19px]" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="rounded-[22px] px-6 py-5"
            style={{
              border: "1px solid rgba(52,211,153,0.25)",
              background: "rgba(52,211,153,0.08)",
            }}
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold text-[#6ee7b7]">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#34d399",
                  boxShadow: "0 0 8px #34d399",
                  animation: "brmPulse 2s ease-in-out infinite",
                }}
              />
              {t("availableTitle")}
            </div>
            <p
              className="mt-2 text-[13px] leading-[1.55]"
              style={{ color: "rgba(233,233,242,0.6)" }}
            >
              {t("availableText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block mb-[7px] text-[13px] font-medium"
        style={{ color: "rgba(233,233,242,0.7)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
