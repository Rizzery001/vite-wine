export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 md:px-10 py-16 md:py-20 bg-bone border-t border-ink/15">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-5xl md:text-7xl tracking-tightest leading-[0.95]">
              vite<span className="italic font-light text-ember">.wine</span>
            </div>
            <p className="mt-6 text-sm text-ink/70 max-w-sm leading-relaxed">
              Direct importer of Swiss natural & biodynamic wines to the
              Baltic states and the United Kingdom.
            </p>
          </div>

          <FooterCol title="Trade">
            <a href="#producers">Producers</a>
            <a href="#map">Where we work</a>
            <a href="#join">Request the list</a>
          </FooterCol>

          <FooterCol title="Contact">
            <a href="mailto:hello@vite.wine">hello@vite.wine</a>
            <a href="tel:+371000000">+371 0000 0000</a>
            <span>Riga · Tallinn · London</span>
          </FooterCol>

          <FooterCol title="Legal">
            <span>Reg. №000-000-000</span>
            <span>VAT LV00000000000</span>
            <a href="#">Privacy</a>
          </FooterCol>
        </div>

        <div className="mt-16 pt-8 border-t border-ink/15 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
            © {year} vite.wine — Drink natural · Drink responsibly
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
            46.7° N · 8.0° E
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2 lg:col-span-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke mb-4">
        {title}
      </div>
      <div className="flex flex-col gap-2 text-sm">
        {Array.isArray(children)
          ? children.map((c, i) => <span key={i}>{c}</span>)
          : children}
      </div>
    </div>
  );
}
