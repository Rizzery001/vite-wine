"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Ancient dry-stone wall in a Swiss alpine vineyard, with bare grapevine emerging from the stones"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 pt-32 pb-12 md:pb-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70 mb-12 md:mb-20"
          >
            <span className="h-px bg-bone/40 w-10 md:w-20" />
            <span>Est. in the Alps · Direct trade · Since 2019</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-[44px] sm:text-[68px] md:text-[104px] lg:text-[132px] leading-[0.92] tracking-tightest text-bone"
          >
            Swiss wine,
            <br />
            <span className="italic font-light text-clay">by the case,</span>
            <br />
            with the people
            <br />
            who grow it.
          </motion.h1>

          {/* Sub line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12"
          >
            <p className="md:col-span-5 md:col-start-1 text-lg md:text-xl leading-relaxed text-bone/85 max-w-md">
              We import natural and biodynamic wine from small Swiss growers
              into the Baltics and the United Kingdom — for restaurants,
              wine bars, and bottle shops who care where it came from.
            </p>

            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4 md:items-end">
              <a
                href="#producers"
                className="font-mono text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-3 group text-bone"
              >
                <span>See the growers</span>
                <span className="inline-block w-8 h-px bg-bone transition-all group-hover:w-14" />
              </a>
              <a
                href="#join"
                className="font-mono text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-3 group text-bone"
              >
                <span>Request the trade list</span>
                <span className="inline-block w-8 h-px bg-bone transition-all group-hover:w-14" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marker row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 px-6 md:px-10 pb-10 md:pb-14"
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 border-t border-bone/25 pt-8">
          {[
            ["06", "Swiss growers"],
            ["38ha", "Under vine"],
            ["04", "Markets served"],
            ["100%", "Direct trade"],
          ].map(([num, label]) => (
            <div key={label as string}>
              <div className="font-display text-3xl md:text-5xl tracking-tightest text-bone">
                {num}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
