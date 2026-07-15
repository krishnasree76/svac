import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Which areas do you cover?", a: "We serve Hyderabad and surrounding areas with same-day visits. For AMC clients, we guarantee response times in writing." },
  { q: "Do you charge a visit fee?", a: "The visit fee is transparent and applied only if you decide not to proceed with the repair. When you approve the quote, the visit fee is waived." },
  { q: "Are your spare parts genuine?", a: "Yes — we only fit OEM (original) parts and provide the invoice. Any part we install comes with a written warranty." },
  { q: "Do you provide a warranty on repairs?", a: "Every repair is backed by a service warranty ranging from 30 to 180 days depending on the work performed." },
  { q: "Can I buy a second-hand appliance from you?", a: "Absolutely. Every certified pre-owned AC, fridge or washing machine is fully serviced, tested and delivered with a warranty." },
  { q: "How do I book a service?", a: "Call 6370978129, tap the WhatsApp button, or send us a message via the contact form and we'll confirm within minutes." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-bright/10 px-3 py-1 text-xs font-medium text-navy-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Frequently asked
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-navy-deep">
            Answers, <span className="gradient-text italic">no fine print.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl gradient-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="text-base lg:text-lg font-medium text-navy-deep">{f.q}</span>
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-primary text-white transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
