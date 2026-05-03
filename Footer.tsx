/**
 * Footer Component
 * Design: Precision Response — dark slate background, organized link columns
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS, RESOURCES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.15_0.02_250)] text-white">
      {/* Emergency CTA bar */}
      <div className="bg-[oklch(0.45_0.22_25)] py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-['Barlow_Condensed'] text-2xl font-bold">PLUMBING EMERGENCY IN CALGARY?</div>
            <div className="text-red-100 text-sm mt-0.5">We dispatch within 60 minutes — 24 hours, 7 days a week</div>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors whitespace-nowrap min-h-[52px]"
          >
            <Phone size={20} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-['Barlow_Condensed'] text-xl font-bold mb-4 text-white">
              24 HOUR EMERGENCY<br />
              <span className="text-[oklch(0.65_0.18_220)]">PLUMBER CALGARY</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Calgary's most trusted 24/7 emergency plumbing service. Licensed, insured, and ready to respond any time — day or night.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                Calgary, Alberta, Canada
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                Open 24/7 — No Overtime Charges
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4 text-white">OUR SERVICES</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/emergency-plumbing-calgary" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Emergency Plumbing (Pillar)
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas + Resources */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4 text-white">SERVICE AREAS</h3>
            <ul className="flex flex-col gap-2 mb-6">
              {NEIGHBORHOODS.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/${n.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  All Calgary Areas
                </Link>
              </li>
            </ul>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4 text-white">RESOURCES</h3>
            <ul className="flex flex-col gap-2">
              {RESOURCES.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {r.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Certifications */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4 text-white">CERTIFICATIONS</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: CheckCircle, text: "Backflow Certified" },
                { icon: Award, text: "BBB Accredited" },
                { icon: CheckCircle, text: "Alberta Master Plumber" },
                { icon: Shield, text: "TSSA Certified" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon size={14} className="text-green-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="text-xs text-gray-400 mb-1">AVERAGE RESPONSE TIME</div>
              <div className="font-['Barlow_Condensed'] text-3xl font-bold text-white">~45 min</div>
              <div className="text-xs text-gray-400">across Calgary & area</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {currentYear} 24 Hour Emergency Plumber Calgary. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
            <a href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</a>
            <a href="https://www.calgary.ca" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              City of Calgary
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
