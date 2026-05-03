/**
 * Anatomy of a Calgary Home: Where Your Shut-Off Valve Is Probably Hiding
 * Visual guide — backlink-worthy content
 */

import { Link } from "wouter";
import { Phone, ChevronRight, ExternalLink, AlertTriangle, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function ShutOffValveGuide() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-12">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 mb-4">
              Visual Guide
            </span>
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              Anatomy of a Calgary Home: Where Your Shut-Off Valve Is Probably Hiding
            </h1>
            <p className="text-gray-200 text-xl font-semibold mb-2">
              In a Calgary plumbing emergency, finding your main water shut-off valve in the first 60 seconds can prevent thousands of dollars in water damage. Here's exactly where to look.
            </p>
            <p className="text-gray-400 text-sm">Updated March 2026 · By 24 Hour Emergency Plumber Calgary</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm">
                    <strong>Do this now, before an emergency:</strong> Find your main water shut-off valve today and make sure every adult in your household knows where it is. In a burst pipe emergency, you may have less than 2 minutes before significant water damage occurs.
                  </p>
                </div>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                Why This Matters in Calgary
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Calgary's freeze-thaw cycles mean burst pipes are a genuine risk every winter. When a pipe bursts, water can flow at 5–10 gallons per minute — that's 300–600 gallons in an hour. A typical burst pipe in an undetected location can cause $10,000–$50,000 in water damage before it's discovered.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Knowing exactly where your main shut-off valve is — and being able to reach it quickly — is the single most important thing a Calgary homeowner can do to limit water damage in an emergency.
              </p>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-6">
                Where to Find Your Main Shut-Off Valve
              </h2>

              {[
                {
                  location: "Most Common: Basement Utility Room",
                  description: "In most Calgary homes (especially those built after 1970), the main shut-off valve is in the basement utility room, near the front foundation wall — the wall closest to the street. Look for a copper or galvanized pipe coming through the floor or wall, with a valve (either a gate valve or a ball valve) on it.",
                  tip: "The valve is usually within 3–5 feet of where the water main enters the house from the street.",
                  icon: "🏠",
                },
                {
                  location: "Older Homes (Pre-1970): Near the Furnace",
                  description: "In many older Calgary homes (Brentwood, Varsity, Ramsay, Inglewood), the water main enters near the furnace room rather than the front wall. Check the mechanical room where your furnace is located.",
                  tip: "Older homes often have gate valves (round wheel handle) rather than ball valves (lever handle). Gate valves require multiple turns to close completely.",
                  icon: "🔧",
                },
                {
                  location: "Crawl Space Homes",
                  description: "If your Calgary home has a crawl space rather than a full basement, the shut-off valve may be in the crawl space near the point where the water main enters. You may need a flashlight and to crouch or crawl to access it.",
                  tip: "Consider having a plumber relocate the valve to a more accessible location if this is the case.",
                  icon: "🔦",
                },
                {
                  location: "Utility Closet (Condos and Townhomes)",
                  description: "In Calgary condos and townhomes, the main shut-off valve is typically in the utility closet — the same space where your furnace, hot water tank, and electrical panel are located. It may be labeled.",
                  tip: "Condo owners: your building also has a main shut-off for the entire building. Know who to call (building management) if you need the building valve shut off.",
                  icon: "🏢",
                },
                {
                  location: "Garage (Some Newer Homes)",
                  description: "Some newer Calgary homes (built after 2000) route the water main through the garage. Check the interior garage wall closest to the street for the shut-off valve.",
                  tip: "Garage shut-off valves are at higher risk of freezing in Calgary winters — ensure the garage is heated or the valve is insulated.",
                  icon: "🚗",
                },
              ].map(({ location, description, tip, icon }) => (
                <div key={location} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{icon}</span>
                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <MapPin size={16} className="text-[oklch(0.45_0.22_25)]" />
                        {location}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{description}</p>
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 text-xs text-blue-800">
                        <strong>Tip:</strong> {tip}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                How to Turn Off Your Main Shut-Off Valve
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">Ball Valve (Lever Handle)</h3>
                  <p className="text-gray-600 text-sm">Turn the lever 90 degrees (quarter turn) so it's perpendicular to the pipe. This closes the valve completely. Ball valves are more common in homes built after 1990.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">Gate Valve (Round Wheel)</h3>
                  <p className="text-gray-600 text-sm">Turn the wheel clockwise (right) until it stops. This may require multiple full rotations. Gate valves are common in older Calgary homes and can seize if not used regularly.</p>
                </div>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                What to Do After Shutting Off the Water
              </h2>
              <ol className="flex flex-col gap-3 mb-6">
                {[
                  `Call us immediately at ${BUSINESS.phone} — our dispatcher will guide you through next steps`,
                  "Open the lowest faucet in your home (basement utility sink) to drain remaining water from pipes",
                  "Turn off your water heater to prevent it from running dry",
                  "Document any water damage with photos for insurance purposes",
                  "Move valuables and furniture away from the affected area",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[oklch(0.45_0.22_25)] flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">External Resources</h3>
                <div className="flex flex-col gap-1.5">
                  <a href="https://www.calgary.ca/water/water-emergencies.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> City of Calgary Water Emergencies
                  </a>
                  <a href="https://www.ibc.ca/news-insights/news/water-damage-is-the-leading-cause-of-home-insurance-claims" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> IBC: Water Damage & Insurance Claims
                  </a>
                  <Link href="/burst-pipe-repair-calgary" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ChevronRight size={12} /> Burst Pipe Repair Service
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">BURST PIPE?</h3>
                <p className="text-red-100 text-sm mb-4">Shut off your water and call us now. 24/7.</p>
                <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full">
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">RELATED GUIDES</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/burst-pipe-repair-calgary", label: "Burst Pipe Repair" },
                    { href: "/frozen-pipe-thawing-calgary", label: "Frozen Pipe Thawing" },
                    { href: "/winterize-outdoor-faucets-calgary", label: "Winterize Your Faucets" },
                    { href: "/emergency-plumbing-calgary", label: "Emergency Plumbing Guide" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline font-medium">
                      <ChevronRight size={13} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
