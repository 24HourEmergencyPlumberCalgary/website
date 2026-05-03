/**
 * Header Component
 * Design: Precision Response — sticky header with emergency phone CTA always visible
 * Mobile-first: Logo | Call Now | Menu (hamburger)
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top alert bar */}
      <div className="bg-[oklch(0.45_0.22_25)] text-white text-center py-2 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="status-dot inline-block w-2 h-2 rounded-full bg-green-400"></span>
          <strong>DISPATCH AVAILABLE NOW</strong> — Technicians on standby across Calgary
          <span className="hidden sm:inline">·</span>
          <a href={BUSINESS.phoneHref} className="hidden sm:inline font-bold underline hover:no-underline">{BUSINESS.phone}</a>
        </span>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.45_0.22_25)] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="font-['Barlow_Condensed'] font-bold text-lg leading-tight text-[oklch(0.15_0.015_250)]">
                  24 HOUR EMERGENCY
                </div>
                <div className="font-['Barlow_Condensed'] font-bold text-lg leading-tight text-[oklch(0.45_0.22_25)]">
                  PLUMBER CALGARY
                </div>
              </div>
              <div className="sm:hidden">
                <div className="font-['Barlow_Condensed'] font-bold text-base leading-tight text-[oklch(0.15_0.015_250)]">
                  EMERGENCY PLUMBER
                </div>
                <div className="font-['Barlow_Condensed'] text-sm text-[oklch(0.45_0.22_25)] font-semibold">
                  CALGARY
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)] transition-colors">
                Home
              </Link>
              {/* Services dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)] transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/emergency-plumbing-calgary" className="text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)] transition-colors">
                Emergency
              </Link>
              <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)] transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 bg-[oklch(0.45_0.22_25)] text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-[oklch(0.40_0.22_25)] transition-colors pulse-emergency min-h-[44px]"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <Phone size={16} />
                <span className="hidden sm:inline">{BUSINESS.phone}</span>
                <span className="sm:hidden">CALL NOW</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="container py-4 flex flex-col gap-1">
              <Link href="/" className="px-3 py-3 rounded-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors min-h-[44px] flex items-center">
                Home
              </Link>
              <div>
                <button
                  className="w-full px-3 py-3 rounded-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors flex items-center justify-between min-h-[44px]"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors min-h-[44px] flex items-center"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/emergency-plumbing-calgary" className="px-3 py-3 rounded-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors min-h-[44px] flex items-center">
                Emergency
              </Link>
              <Link href="/about" className="px-3 py-3 rounded-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors min-h-[44px] flex items-center">
                About
              </Link>
              <Link href="/contact" className="px-3 py-3 rounded-lg font-semibold text-gray-800 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] transition-colors min-h-[44px] flex items-center">
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-100 mt-2">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-[oklch(0.45_0.22_25)] text-white px-4 py-3 rounded-lg font-bold text-base w-full min-h-[52px]"
                >
                  <Phone size={18} />
                  TAP TO CALL: {BUSINESS.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
