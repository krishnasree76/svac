import { motion } from "framer-motion";
import { CalendarCheck, UserRound, Search, Wrench, CheckCircle2, PackageCheck } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Service", desc: "Call, WhatsApp or fill the form." },
  { icon: UserRound, title: "Technician Visit", desc: "Uniformed pro at your door on time." },
  { icon: Search, title: "Inspection", desc: "Transparent diagnosis with fixed quote." },
  { icon: Wrench, title: "Repair", desc: "OEM parts, meticulous workmanship." },
  { icon: CheckCircle2, title: "Testing", desc: "Full performance check before handover." },
  { icon: PackageCheck, title: "Delivery", desc: "Clean workspace. Signed warranty card." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-bright/10 px-3 py-1 text-xs font-medium text-navy-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> How it works
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
            Six calm steps <span className="gradient-text italic">from call to comfort.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-bright via-navy to-transparent lg:hidden" />
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-cyan-bright to-transparent" />

          <ol className="grid gap-6 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 lg:pl-0 lg:text-center"
              >
                <div className="absolute left-0 top-0 lg:relative lg:mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-glow z-10">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="lg:mt-5">
                  <div className="text-[10px] uppercase tracking-widest text-cyan-bright font-semibold">Step {i + 1}</div>
                  <h3 className="mt-1 text-base font-semibold text-navy-deep">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
