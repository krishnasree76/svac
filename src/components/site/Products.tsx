import { motion } from "framer-motion";
import tvImg from "@/assets/tv.png";
import waterImg from "@/assets/waterpurifier.png";
import acImg from "@/assets/ac.png";
import fridgeImg from "@/assets/fridge.png";
import washImg from "@/assets/washingmachine.png";

const products = [
  { image: tvImg, badge: "New", title: "Smart TVs", tag: "4K · Android", price: "Starting ₹18,999" },
  { image: waterImg, badge: "New", title: "RO Water Purifiers", tag: "7-stage · Warranty", price: "Starting ₹8,499" },
  { image: acImg, badge: "Certified Pre-Owned", title: "Second-hand ACs", tag: "Tested · Warranty", price: "From ₹9,999" },
  { image: fridgeImg, badge: "Certified Pre-Owned", title: "Second-hand Fridges", tag: "Serviced · Clean", price: "From ₹6,499" },
  { image: washImg, badge: "Certified Pre-Owned", title: "Second-hand Washing Machines", tag: "Verified", price: "From ₹5,999" },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-gradient-dark text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-cyan-bright blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-sky blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Products in stock
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Brand-new tech.<br /><span className="italic text-sky">Trusted pre-owned finds.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-sky transition"
          >
            Enquire on WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-cyan-bright text-navy-deep px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {p.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-sky/80">{p.tag}</div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sky">{p.price}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-navy-deep"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
