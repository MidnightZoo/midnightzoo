/* ============================================================
   Logo — Midnight Zoo wordmark
   Near-invisible brand purple (#24153A) that illuminates under
   the cursor: a radial glow tracks the mouse and slowly blooms
   in on hover (styles: .mz-logo in index.css). The original
   logo PNG lived on Replit's CDN, which expired — if recovered,
   drop it in client/public/images/ and swap it in here;
   Navigation and Footer both render this component.
   Size scales with font-size: control it via text-* classes.
   ============================================================ */

import { useRef, type MouseEvent } from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const trackMouse = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <span
      ref={ref}
      onMouseEnter={trackMouse}
      onMouseMove={trackMouse}
      className={`mz-logo relative inline-block whitespace-nowrap leading-none ${className}`}
    >
      Midnight Zoo
      <span className="mz-logo-glow" aria-hidden="true">
        Midnight Zoo
      </span>
    </span>
  );
}
