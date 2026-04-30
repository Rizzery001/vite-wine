"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {
    n: "01",
    title: "Naturel & biodinamica",
    body: "Every grower in our book farms organically at minimum. Most are certified Demeter or Bio Suisse. In the cellar: native yeast, no additions, minimal or zero sulphur — the way wine has been made for most of its history.",
    image: "/images/manifesto-hands.jpg",
    alt: "Hands of a vigneron pruning a bare grapevine in winter",
  },
  {
    n: "02",
    title: "Direct from the cellar",
    body: "We work in single-domaine pallets, never through middlemen. You get traceability back to the parcel, fair pricing for the grower, and stories you can tell on the floor of your restaurant.",
    image: "/images/manifesto-barrel.jpg",
    alt: "Oak wine barrel with chalk handwriting reading Petite Arvine 2024 Saillon",
  },
  {
    n: "03",
    title: "Baltics & the UK",
    body: "Bonded warehouses in Riga, Tallinn, Vilnius and London. EUR or GBP invoicing. Tax and customs handled. Delivery in seven to ten days from order confirmation.",
    image: "/images/manifesto-map.jpg",
    alt: "Vintage map of Europe with brass compass and twine tracing route from Switzerland to the Baltics and London",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative px-6 md:px-10 py-24 md:py-40"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
              § Manifesto
            </div>
          </div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tightest">
            We sell wine that{" "}
            <span className="italic font-light">tastes of somewhere</span>{" "}
            — and of someone.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {points.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-square w-full mb-8 overflow-hidden bg-paper">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover manifesto-image"
                />
              </div>

              {/* Number + label */}
              <div className="flex items-baseline justify-between mb-6 border-t border-ink/25 pt-6">
                <span className="font-display text-5xl md:text-6xl tracking-tightest">
                  {p.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
                  Tenet
                </span>
              </div>

              {/* Title + body */}
              <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                {p.title}
              </h3>
              <p className="text-ink/75 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
