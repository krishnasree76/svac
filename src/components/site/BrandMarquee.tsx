const brands = ["Daikin", "LG", "Samsung", "Voltas", "Blue Star", "Panasonic", "Whirlpool", "Hitachi", "Godrej", "Haier"];

export function BrandMarquee() {
  const list = [...brands, ...brands];
  return (
    <section className="relative py-14 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Certified to service every major brand</p>
      </div>
      <div className="relative">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {list.map((b, i) => (
            <span key={i} className="font-display text-3xl lg:text-4xl text-navy-deep/40 hover:text-navy-deep transition">
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
