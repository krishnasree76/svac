import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full glass text-navy-deep hover:scale-110 transition shadow-elevated animate-in fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
      <a
        href="tel:+916370978129"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-white shadow-elevated hover:scale-110 transition lg:hidden"
        aria-label="Call now"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/916370978129"
        target="_blank"
        rel="noopener"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated animate-pulse-glow hover:scale-110 transition"
        aria-label="WhatsApp us"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.28c-.28-.14-1.66-.82-1.92-.91-.26-.1-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.91c.14.19 1.98 3.02 4.79 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.77.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33Zm-5.15 7.03h-.01a10.3 10.3 0 0 1-5.25-1.44l-.38-.22-3.9 1.02 1.04-3.8-.25-.39a10.28 10.28 0 1 1 8.75 4.83Zm8.76-19.09A12.28 12.28 0 0 0 3.5 20.05L2 26l6.1-1.6a12.28 12.28 0 0 0 5.85 1.49h.01c6.79 0 12.31-5.52 12.31-12.31 0-3.29-1.28-6.38-3.61-8.72Z" />
        </svg>
      </a>
    </div>
  );
}
