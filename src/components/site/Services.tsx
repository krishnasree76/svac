import { motion } from "framer-motion";
import { AirVent, Refrigerator, WashingMachine, Tv, Droplets, Zap, Truck, RefreshCw, ArrowUpRight } from "lucide-react";
import acImg from "@/assets/service-ac.jpg";
import tvImg from "@/assets/service-tv.jpg";
import waterImg from "@/assets/service-water.jpg";
import fridgeImg from "@/assets/service-fridge.jpg";
import washingImg from "@/assets/service-washing.jpg";
import moversImg from "@/assets/service-movers.jpg";
import commercialImg from "@/assets/service-commercial.jpg";

const services = [
  {
    icon: AirVent, image: acImg, title: "Air Conditioning",
    desc: "Installation, repair, gas filling, AMC, deep cleaning, shifting & more for every AC type.",
    items: ["Split AC", "Window AC", "Cassette AC", "Tower AC", "Duct AC", "VRV / VRF"],
  },
  {
    icon: Zap, image: commercialImg, title: "Commercial AC Services",
    desc: "End-to-end setup and upkeep for offices, showrooms and industrial spaces.",
    items: ["Design & Install", "Preventive AMC", "24/7 Response"],
  },
  {
    icon: Refrigerator, image: fridgeImg, title: "Refrigeration",
    desc: "Fridge, deep freezer and commercial refrigerator repair with genuine spares.",
    items: ["Cooling Issues", "Gas Charging", "Compressor Replacement"],
  },
  {
    icon: WashingMachine, image: washingImg, title: "Washing Machine",
    desc: "Fully automatic, semi-automatic, front load and top load — installed, repaired, maintained.",
    items: ["Installation", "Repair", "Maintenance"],
  },
  {
    icon: Tv, image: tvImg, title: "Television",
    desc: "New Smart TVs, LED installation, wall mounting, repair and Smart TV setup.",
    items: ["Wall Mounting", "Smart TV Setup", "Repair"],
  },
  {
    icon: Droplets, image: waterImg, title: "Water Purifiers",
    desc: "RO installation, service, repair, filter replacement and AMC — plus brand new units.",
    items: ["RO Install", "Filter Change", "AMC"],
  },
  {
    icon: Truck, image: moversImg, title: "Packers & Movers",
    desc: "Careful packing, loading, transportation and safe delivery for home and office shifting.",
    items: ["House Shifting", "Office Shifting", "Safe Delivery"],
  },
  {
    icon: RefreshCw, image: fridgeImg, title: "Second-Hand Electronics",
    desc: "Buy, sell or exchange ACs, fridges and washing machines with confidence.",
    items: ["Buy", "Sell", "Exchange"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-bright/10 px-3 py-1 text-xs font-medium text-navy-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> What we do
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
            One team. <span className="gradient-text italic">Every appliance</span> in your home.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the compressor of your AC to the filters of your RO — our certified technicians handle it all,
            with the same attention to detail a premium showroom would.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card gradient-border tilt-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl glass text-navy-deep">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-deep opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium text-navy-deep"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
