"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { producers } from "@/lib/producers";

const philoLabel = {
  natural: "Vin naturel",
  biodynamic: "Biodinamica",
  organic: "Bio organic",
};

export default function Producers() {
  return (
    <section
      id="producers"
      className="relative px-6 md:px-10 py-24 md:py-40 bg-paper border-y border-ink/15"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
              § The growers
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tightest mb-6">
              Six houses,{" "}
              <span className="italic font-light">five regions,</span> one
              philosophy.
            </h2>
            <p className="text-ink/75 max-w-2xl leading-relaxed">
              Visited at harvest, tasted barrel by barrel, chosen for what
              they refuse to do as much as for what they put in the bottle.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15">
          {producers.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="bg-paper group hover:bg-bone transition-colors duration-500 relative producer-card flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                <Image
                  src={p.image}
                  alt={`Vineyards in ${p.region}, Switzerland`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover producer-image"
                />
                {/* Region badge over image */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone bg-ink/60 backdrop-blur-sm px-2 py-1">
                    {String(i + 1).padStart(2, "0")} / {p.canton}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone bg-ember/90 backdrop-blur-sm px-2 py-1">
                    {philoLabel[p.philosophy]}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05] mb-2">
                  {p.name}
                </h3>
                <div className="font-display italic text-lg text-ink/60 mb-6">
                  {p.village} — {p.region}
                </div>

                <p className="text-sm leading-relaxed text-ink/75 mb-8 flex-1">
                  {p.blurb}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-ink/15 font-mono text-[10px] uppercase tracking-[0.18em]">
                  <div>
                    <div className="text-smoke mb-1">Hectares</div>
                    <div>{p.hectares}</div>
                  </div>
                  <div>
                    <div className="text-smoke mb-1">Since</div>
                    <div>{p.founded}</div>
                  </div>
                  <div>
                    <div className="text-smoke mb-1">Cert.</div>
                    <div>{p.certification ?? "—"}</div>
                  </div>
                </div>

                <div className="mt-6 font-display italic text-ember">
                  ↳ {p.signature}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
