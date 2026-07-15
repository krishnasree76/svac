import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ac from "@/assets/service-ac.jpg";
import tv from "@/assets/service-tv.jpg";
import water from "@/assets/service-water.jpg";
import mov from "@/assets/service-movers.jpg";
import fr from "@/assets/service-fridge.jpg";
import wa from "@/assets/service-washing.jpg";
import comm from "@/assets/service-commercial.jpg";

const shots = [
  { src: ac, alt: "AC repair", span: "row-span-2" },
  { src: tv, alt: "TV installation", span: "" },
  { src: water, alt: "Water purifier install", span: "" },
  { src: mov, alt: "Packers & Movers", span: "row-span-2" },
  { src: fr, alt: "Fridge repair", span: "" },
  { src: wa, alt: "Washing machine service", span: "" },
  { src: comm, alt: "Commercial AC", span: "col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Field notes
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
              From our <span className="gradient-text italic">recent visits.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {shots.map((s, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setOpen(s.src)}
              className={`group relative overflow-hidden rounded-3xl ${s.span}`}
            >
              <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-left text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-widest text-sky">Case</div>
                <div className="text-sm font-semibold">{s.alt}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-navy-deep/80 backdrop-blur-lg p-6 flex items-center justify-center"
            onClick={() => setOpen(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-elevated"
            />
            <button className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
