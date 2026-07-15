import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma", role: "Homeowner, Banjara Hills",
    text: "Booked an AC service on a Sunday evening — technician arrived in 90 minutes. Transparent pricing, spotless work. Genuinely the best experience I've had with any service company.",
  },
  {
    name: "Rahul Verma", role: "Cafe Owner, Jubilee Hills",
    text: "S.V. handles our two cassette ACs and the walk-in freezer. Zero downtime in over a year. Their AMC is worth every rupee.",
  },
  {
    name: "Anitha Reddy", role: "Homeowner, Gachibowli",
    text: "Bought a certified second-hand washing machine and a new water purifier from them. Installation same day, 6-month warranty, and they picked up our old fridge on exchange.",
  },
  {
    name: "Vikram Mehta", role: "IT Manager",
    text: "Shifted a 3BHK across the city — packers were on time, everything wrapped like glass. Not a single scratch. Highly recommend.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-navy-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Loved by 5,000+ homes
        </div>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
          Kind words from <span className="gradient-text italic">real customers.</span>
        </h2>

        <div className="mt-14 relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl rounded-3xl glass p-8 lg:p-12 shadow-elevated text-left"
            >
              <Quote className="h-10 w-10 text-cyan-bright/60" />
              <p className="mt-4 text-xl lg:text-2xl leading-relaxed text-navy-deep font-display italic">
                "{reviews[i].text}"
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-navy-deep">{reviews[i].name}</div>
                  <div className="text-xs text-muted-foreground">{reviews[i].role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-cyan-bright text-cyan-bright" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-gradient-primary" : "w-3 bg-navy/20"
              }`}
              aria-label={`Review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
