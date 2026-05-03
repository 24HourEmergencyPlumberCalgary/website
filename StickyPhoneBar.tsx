/**
 * StickyPhoneBar Component
 * Mobile-only sticky bottom bar with phone CTA and booking link
 * Appears after scrolling past the hero section
 */

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function StickyPhoneBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ background: "oklch(0.15 0.02 250)" }}
      >
        <div className="flex items-stretch">
          <a
            href={BUSINESS.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 bg-[oklch(0.45_0.22_25)] text-white py-4 font-bold text-base min-h-[56px]"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone size={18} />
            TAP TO CALL
          </a>
          <a
            href="#book"
            className="flex-1 flex items-center justify-center gap-2 text-white py-4 font-semibold text-base min-h-[56px] hover:bg-white/10 transition-colors"
            style={{ background: "oklch(0.22 0.015 250)" }}
          >
            <Calendar size={18} />
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Desktop FAB — only visible on scroll */}
      <div
        className={`hidden lg:flex fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-3 bg-[oklch(0.45_0.22_25)] text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-2xl hover:bg-[oklch(0.40_0.22_25)] transition-colors pulse-emergency"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone size={18} />
          {BUSINESS.phone}
        </a>
      </div>
    </>
  );
}
