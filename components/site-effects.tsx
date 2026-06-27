"use client";

import { useEffect } from "react";

interface SiteEffectsProps {
  /** Localized rotating roles for the hero typed-text effect. */
  roles: string[];
}

/**
 * Global progressive-enhancement layer ported from the imported design:
 * custom cursor, magnetic buttons, 3D tilt + glare, scroll reveal,
 * count-up stats, scroll-progress bar and the hero typed-text effect.
 *
 * All content is visible without JS; this only enhances it.
 */
export function SiteEffects({ roles }: SiteEffectsProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia(
      "(hover:hover) and (pointer:fine)",
    ).matches;

    const cleanups: Array<() => void> = [];
    const rafs: number[] = [];

    /* ---------- Custom cursor ---------- */
    const dot = document.querySelector<HTMLElement>(".brm-cursor-dot");
    const ring = document.querySelector<HTMLElement>(".brm-cursor-ring");
    if (fine && dot && ring) {
      document.body.style.cursor = "none";
      let rx = 0,
        ry = 0,
        mx = 0,
        my = 0,
        scale = 1,
        tScale = 1;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px,${my}px)`;
      };
      window.addEventListener("mousemove", onMove);
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
      const loop = () => {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        scale += (tScale - scale) * 0.18;
        ring.style.transform = `translate(${rx}px,${ry}px) scale(${scale})`;
        rafs.push(requestAnimationFrame(loop));
      };
      loop();
      const hoverTargets = document.querySelectorAll(
        "a,button,[data-tilt],input,textarea,[data-magnetic]",
      );
      hoverTargets.forEach((el) => {
        const enter = () => {
          tScale = 1.9;
          ring.style.borderColor = "rgba(6,182,212,0.9)";
        };
        const leave = () => {
          tScale = 1;
          ring.style.borderColor = "rgba(139,92,246,0.7)";
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    } else if (dot && ring) {
      dot.style.display = "none";
      ring.style.display = "none";
    }

    /* ---------- Magnetic buttons ---------- */
    if (fine) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const strength = parseFloat(el.getAttribute("data-magnetic") || "") || 0.3;
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
        };
        const leave = () => {
          el.style.transform = "translate(0,0)";
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });

      /* ---------- 3D tilt + glare ---------- */
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const glare = card.querySelector<HTMLElement>(".brm-glare");
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          const rxx = (py - 0.5) * -9;
          const ryy = (px - 0.5) * 11;
          card.style.transform = `perspective(900px) rotateX(${rxx}deg) rotateY(${ryy}deg) translateY(-6px)`;
          if (glare)
            glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.22), transparent 55%)`;
        };
        const leave = () => {
          card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
          if (glare) glare.style.background = "transparent";
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }

    /* ---------- Typed roles ---------- */
    const typeEl = document.querySelector<HTMLElement>(".brm-typed");
    if (typeEl && roles.length) {
      if (reduceMotion) {
        typeEl.textContent = roles[0];
      } else {
        let ri = 0,
          ci = roles[0].length,
          del = false;
        let timer: ReturnType<typeof setTimeout>;
        const tick = () => {
          const word = roles[ri];
          if (!del) {
            ci++;
            if (ci >= word.length) {
              del = true;
              typeEl.textContent = word;
              timer = setTimeout(tick, 1500);
              return;
            }
          } else {
            ci--;
            if (ci <= 0) {
              del = false;
              ri = (ri + 1) % roles.length;
              ci = 0;
            }
          }
          typeEl.textContent = word.slice(0, ci);
          timer = setTimeout(tick, del ? 42 : 88);
        };
        timer = setTimeout(tick, 1800);
        cleanups.push(() => clearTimeout(timer));
      }
    }

    /* ---------- Scroll reveal ---------- */
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!reduceMotion && "IntersectionObserver" in window) {
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.9) {
          el.style.opacity = "0";
          el.style.transform = "translateY(30px)";
          el.style.transition =
            "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
        }
      });
      const io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target as HTMLElement;
              const d = parseFloat(el.getAttribute("data-reveal") || "") || 0;
              el.style.transitionDelay = `${d}ms`;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Count-up stats ---------- */
    const counts = Array.from(
      document.querySelectorAll<HTMLElement>(".brm-count"),
    );
    if ("IntersectionObserver" in window && counts.length) {
      const co = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target as HTMLElement;
              const target =
                parseFloat(el.getAttribute("data-target") || "") || 0;
              if (reduceMotion) {
                el.textContent = String(target);
                co.unobserve(el);
                return;
              }
              const dur = 1300;
              const start = performance.now();
              const step = (now: number) => {
                const p = Math.min((now - start) / dur, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = String(Math.round(target * eased));
                if (p < 1) rafs.push(requestAnimationFrame(step));
              };
              rafs.push(requestAnimationFrame(step));
              co.unobserve(el);
            }
          });
        },
        { threshold: 0.6 },
      );
      counts.forEach((el) => co.observe(el));
      cleanups.push(() => co.disconnect());
    }

    /* ---------- Scroll progress bar ---------- */
    const bar = document.querySelector<HTMLElement>(".brm-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const sc = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? sc / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => {
      document.body.style.cursor = "";
      rafs.forEach((id) => cancelAnimationFrame(id));
      cleanups.forEach((fn) => fn());
    };
  }, [roles]);

  return (
    <>
      <div
        className="brm-progress fixed top-0 left-0 h-[3px] w-full origin-left z-[1000]"
        style={{
          transform: "scaleX(0)",
          background: "linear-gradient(90deg,#8B5CF6,#3B82F6,#06B6D4)",
          boxShadow: "0 0 12px rgba(59,130,246,0.7)",
        }}
        aria-hidden="true"
      />
      <div className="brm-cursor-ring" aria-hidden="true" />
      <div className="brm-cursor-dot" aria-hidden="true" />
    </>
  );
}
