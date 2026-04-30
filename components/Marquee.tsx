export default function Marquee() {
  const words = [
    "Vendange",
    "Naturel",
    "Biodinamica",
    "Cantina",
    "Mise en bouteille",
    "Cuvée",
    "Lieu-dit",
    "Sans soufre",
    "Macération",
    "Foudre",
    "Chasselas",
    "Petite Arvine",
    "Cornalin",
    "Humagne",
  ];

  return (
    <div className="relative border-y border-ink/15 py-6 md:py-8 overflow-hidden bg-paper">
      <div className="flex marquee-track whitespace-nowrap will-change-transform">
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-display italic text-3xl md:text-5xl px-8 md:px-14 tracking-tightest text-ink/70"
          >
            {w}
            <span className="text-ember not-italic ml-8 md:ml-14">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
