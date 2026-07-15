// import { useState } from "react";
// import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

// export function Contact() {
//   const [sent, setSent] = useState(false);
//   return (
//     <section id="contact" className="relative py-24 lg:py-32 bg-gradient-dark text-white overflow-hidden">
//       <div aria-hidden className="absolute inset-0 opacity-30">
//         <div className="absolute -top-20 left-20 h-96 w-96 rounded-full bg-cyan-bright blur-[140px]" />
//         <div className="absolute bottom-0 right-10 h-[30rem] w-[30rem] rounded-full bg-sky blur-[160px]" />
//       </div>
//       <div className="relative mx-auto max-w-7xl px-4">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
//               <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Get in touch
//             </div>
//             <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
//               Book a visit, ask a question,<br /><span className="italic text-sky">or just say hi.</span>
//             </h2>
//             <p className="mt-4 max-w-lg text-white/70 leading-relaxed">
//               G. Srikanth Reddy and the S.V. team personally respond to every enquiry.
//               Expect a reply within minutes during business hours.
//             </p>

//             <div className="mt-10 space-y-4">
//               {[
//                 { icon: Phone, label: "Call us", value: "6370978129", href: "tel:+916370978129" },
//                 { icon: Mail, label: "Email", value: "venkyaircondiners1998@gmail.com", href: "mailto:venkyaircondiners1998@gmail.com" },
//                 { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/916370978129" },
//                 { icon: Clock, label: "Hours", value: "Mon – Sun · 8:00 AM – 10:00 PM · 24/7 emergency", href: null },
//                 { icon: MapPin, label: "Service Area", value: "Hyderabad & surrounding regions", href: null },
//               ].map((c) => (
//                 <a
//                   key={c.label}
//                   href={c.href ?? undefined}
//                   className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 transition ${c.href ? "hover:bg-white/10 hover:border-cyan-bright/50" : ""}`}
//                 >
//                   <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-cyan text-navy-deep">
//                     <c.icon className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="text-[10px] uppercase tracking-widest text-sky/80">{c.label}</div>
//                     <div className="mt-0.5 text-sm font-medium">{c.value}</div>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
//               <div className="aspect-[16/8] w-full bg-gradient-to-br from-navy to-cyan-bright/40 grid place-items-center text-white/70 text-sm">
//                 <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Google Map · Hyderabad</div>
//               </div>
//             </div>
//           </div>

//           <form
//             onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
//             className="rounded-[2rem] bg-white text-navy-deep p-8 lg:p-10 shadow-elevated"
//           >
//             <h3 className="text-2xl font-semibold">Book a service</h3>
//             <p className="mt-1 text-sm text-muted-foreground">Fill this out and we'll call you back within minutes.</p>

//             <div className="mt-6 grid gap-4">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Field label="Full name" name="name" placeholder="G. Srikanth" />
//                 <Field label="Phone" name="phone" placeholder="63709 78129" type="tel" required />
//               </div>
//               <Field label="Email" name="email" placeholder="you@example.com" type="email" />
//               <div>
//                 <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</label>
//                 <select className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright">
//                   <option>AC Installation</option>
//                   <option>AC Repair / Gas Filling</option>
//                   <option>Refrigerator / Freezer</option>
//                   <option>Washing Machine</option>
//                   <option>TV / Smart TV</option>
//                   <option>Water Purifier</option>
//                   <option>Packers &amp; Movers</option>
//                   <option>Buy / Sell Second-hand</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
//                 <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright" placeholder="Tell us a bit about the issue…" />
//               </div>

//               <button
//                 type="submit"
//                 className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] active:scale-95"
//               >
//                 {sent ? (<><CheckCircle2 className="h-4 w-4" /> Request received</>) : (<>Send Request <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
//               </button>
//               <p className="text-[11px] text-muted-foreground text-center">By submitting you agree to be contacted about your enquiry.</p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Field({ label, name, ...rest }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <div>
//       <label htmlFor={name} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
//       <input
//         id={name}
//         name={name}
//         {...rest}
//         className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright"
//       />
//     </div>
//   );
// }
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Construct a clean text message for WhatsApp
    const whatsappMessage = `Hello S.V. Team,%0A%0AI would like to book a service:%0A` +
      `• *Name:* ${name || "Not provided"}%0A` +
      `• *Phone:* ${phone}%0A` +
      `• *Email:* ${email || "Not provided"}%0A` +
      `• *Service:* ${service}%0A` +
      `• *Message:* ${message || "Not provided"}`;

    // Target number: 916370978129
    const whatsappUrl = `https://wa.me/916370978129?text=${whatsappMessage}`;

    // UI Feedback state
    setSent(true);
    setTimeout(() => setSent(false), 4000);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-dark text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-20 h-96 w-96 rounded-full bg-cyan-bright blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-[30rem] w-[30rem] rounded-full bg-sky blur-[160px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" /> Get in touch
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Book a visit, ask a question,<br /><span className="italic text-sky">or just say hi.</span>
            </h2>
            <p className="mt-4 max-w-lg text-white/70 leading-relaxed">
              G. Srikanth Reddy and the S.V. team personally respond to every enquiry.
              Expect a reply within minutes during business hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Call us", value: "6370978129", href: "tel:+916370978129" },
                { icon: Mail, label: "Email", value: "venkyaircondiners1998@gmail.com", href: "mailto:venkyaircondiners1998@gmail.com" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/916370978129" },
                { icon: Clock, label: "Hours", value: "Mon – Sun · 8:00 AM – 10:00 PM · 24/7 emergency", href: null },
                { icon: MapPin, label: "Service Area", value: "Hyderabad & surrounding regions", href: null },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? undefined}
                  className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 transition ${c.href ? "hover:bg-white/10 hover:border-cyan-bright/50" : ""}`}
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-cyan text-navy-deep">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-sky/80">{c.label}</div>
                    <div className="mt-0.5 text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-[16/8] w-full bg-gradient-to-br from-navy to-cyan-bright/40 grid place-items-center text-white/70 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Google Map · Hyderabad</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white text-navy-deep p-8 lg:p-10 shadow-elevated"
          >
            <h3 className="text-2xl font-semibold">Book a service</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fill this out and we'll redirect you to WhatsApp to confirm.</p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" placeholder="you@example.com" type="email" />
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</label>
                <select name="service" className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright">
                  <option>AC Installation</option>
                  <option>AC Repair / Gas Filling</option>
                  <option>Refrigerator / Freezer</option>
                  <option>Washing Machine</option>
                  <option>TV / Smart TV</option>
                  <option>Water Purifier</option>
                  <option>Packers &amp; Movers</option>
                  <option>Buy / Sell Second-hand</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright" placeholder="Tell us a bit about the issue…" />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] active:scale-95"
              >
                {sent ? (<><CheckCircle2 className="h-4 w-4" /> Opening WhatsApp...</>) : (<>Send via WhatsApp <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">By submitting you agree to be contacted about your enquiry.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, ...rest }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:border-cyan-bright"
      />
    </div>
  );
}