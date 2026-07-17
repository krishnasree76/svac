import { Facebook, Instagram, Youtube, Phone, Mail,Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
  <a href="#top" className="inline-block group">
    <img
      src={logo}
      alt="S.V. AC Solutions"
      className="h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]"
    />
  </a>

  <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
    S.V. AC Solutions — Cooling, care, and complete home solutions delivered by a team you can trust.
  </p>

  {/* <div className="mt-6 flex gap-3">
    {[Facebook, Instagram, Youtube].map((I, i) => (
      <a
        key={i}
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-cyan-bright hover:text-navy-deep"
      >
        <I className="h-4 w-4" />
      </a>
    ))}
  </div> */}
</div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-sky/70">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Air Conditioning", "Refrigeration", "Washing Machines", "Television", "Water Purifiers", "Packers & Movers"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-cyan-bright transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-sky/70">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#top" className="hover:text-cyan-bright transition">Home</a></li>
              <li><a href="#products" className="hover:text-cyan-bright transition">Products</a></li>
              <li><a href="#process" className="hover:text-cyan-bright transition">Process</a></li>
              {/* <li><a href="#gallery" className="hover:text-cyan-bright transition">Gallery</a></li> */}
              <li><a href="#contact" className="hover:text-cyan-bright transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-sky/70">Reach us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-bright" /> 6370978129</li>
              <li className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 text-cyan-bright" /> venkyaircondiners1998@gmail.com</li>
              <li className="text-white/60 text-xs pt-2">Proprietor: G. Srikanth Reddy</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} S.V. AC Solutions. All rights reserved.</div>
          <div>Crafted with care in Hyderabad.</div>
        </div>
      </div>
    </footer>
  );
}
