"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-ink" : "text-bone";
  const borderColor = scrolled ? "border-ink/40" : "border-bone/50";
  const hoverBg = scrolled
    ? "hover:bg-ink hover:text-bone"
    : "hover:bg-bone hover:text-ink";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-1.5 group">
          <span
            className={`font-display text-2xl md:text-[28px] tracking-tightest leading-none transition-colors ${textColor}`}
          >
            vite
          </span>
          <span className="font-display italic text-2xl md:text-[28px] tracking-tightest leading-none text-ember">
            .wine
          </span>
        </a>

        <div
          className={`hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${textColor}`}
        >
          <a href="#manifesto" className="link-underline">
            Manifesto
          </a>
          <a href="#producers" className="link-underline">
            Producers
          </a>
          <a href="#map" className="link-underline">
            Map
          </a>
          <a href="#join" className="link-underline">
            Join
          </a>
        </div>

        <a
          href="#join"
          className={`font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 border transition-colors duration-300 ${textColor} ${borderColor} ${hoverBg}`}
        >
          Trade enquiry
        </a>
      </div>
    </nav>
  );
}
