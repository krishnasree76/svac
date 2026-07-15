import { motion } from "framer-motion";
import { BadgeCheck, Wallet, Timer, Home, ShieldCheck, Cog, MapPin, Users } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Experienced Technicians", desc: "Certified pros with 4+ years diagnosing every brand." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes. No hidden charges. Ever." },
  { icon: Timer, title: "Quick Response", desc: "Same-day visits across the city, 24/7 emergency support." },
  { icon: Home, title: "Doorstep Service", desc: "Fully equipped vans arrive at your door — you stay comfortable." },
  { icon: ShieldCheck, title: "Warranty Support", desc: "Every repair backed by a written service warranty." },
  { icon: Cog, title: "Original Spare Parts", desc: "OEM components only. Longer life, safer for your appliance." },
  { icon: MapPin, title: "Trusted Local Business", desc: "Rooted in the community. Referred by 5,000+ households." },
  { icon: Users, title: "Professional Team", desc: "Uniformed, background-checked and courteous every visit." },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-navy-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Why choose us
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
              Service you can<br /><span className="gradient-text italic">actually trust.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            We built S.V. AC Solutions the way we'd want a service company to treat our own home — on time,
            fully transparent and finished right the first time.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-deep">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
