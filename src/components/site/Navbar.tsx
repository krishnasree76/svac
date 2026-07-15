import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  // { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3">
  <img
    src={logo}
    alt="S.V. AC Solutions"
    className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
  />

  <div className="hidden sm:flex flex-col leading-tight">
    <span className="text-lg font-bold tracking-tight text-foreground">
      S.V. AC Solutions
    </span>

    <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-600">
      Cooling • Care • Complete Solutions
    </span>
  </div>
</a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground hover:bg-white/50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="tel:+916370978129"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass p-4 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+916370978129"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call 6370978129
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
