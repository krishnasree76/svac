import { motion } from "framer-motion";
import { ArrowRight, Phone, Snowflake, Sparkles, Zap } from "lucide-react";
import heroImg from "@/assets/hero-ac.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-bright/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-navy/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky/30 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-navy-deep"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-bright" />
              4+ years of trusted service · Hyderabad
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-navy-deep"
            >
              Reliable cooling.<br />
              <span className="gradient-text italic">Trusted service.</span><br />
              Complete home solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              From AC installation to electronics repair, packers &amp; movers, second-hand appliances,
              and new Smart TVs &amp; Water Purifiers — S.V. AC Solutions is your one-stop solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03] active:scale-95"
              >
                Book Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+916370978129"
                className="group inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/70 backdrop-blur px-7 py-4 text-sm font-semibold text-navy-deep transition hover:bg-white"
              >
                <Phone className="h-4 w-4" />
                Call 6370978129
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground"
            >
              {["24/7 Support", "100% Genuine Parts", "Expert Technicians", "Doorstep Service"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-bright animate-pulse" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated gradient-border">
              <img src={heroImg} alt="Premium air conditioning service" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />

              {/* Floating info cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 glass rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                    <Snowflake className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cooling</div>
                    <div className="text-sm font-semibold text-navy-deep">18°C · Optimal</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Response</div>
                    <div className="text-sm font-semibold text-navy-deep">Same-day visit</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-24 left-6 glass rounded-2xl px-4 py-3"
              >
                {/* <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Rated by 5,000+ clients</div> */}
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-cyan-bright">★</span>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-navy-deep">4.9</span>
                </div>
              </motion.div>
            </div>

            {/* Snowflake particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-cyan-bright/60"
                style={{ left: `${10 + i * 11}%`, top: `${(i * 37) % 90}%` }}
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
              >
                <Snowflake className="h-4 w-4" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
