/**
 * Tankless vs Traditional Water Heaters: Alberta Cost/Benefit Analysis
 * Comparison guide — backlink-worthy content
 */

import { Link } from "wouter";
import { Phone, ChevronRight, ExternalLink, CheckCircle, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function TanklessComparison() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-12">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-green-500/20 text-green-300 mb-4">
              Comparison Guide
            </span>
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              Tankless vs. Traditional Water Heaters: A Cost/Benefit Analysis for Alberta Homes
            </h1>
            <p className="text-gray-200 text-xl font-semibold mb-2">
              Choosing between tankless and traditional water heaters in Alberta? Here's a detailed breakdown of costs, efficiency, and which is right for your Calgary home.
            </p>
            <p className="text-gray-400 text-sm">Updated April 2026 · By 24 Hour Emergency Plumber Calgary</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                The Bottom Line for Alberta Homeowners
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For most Calgary homes, a tankless water heater offers better long-term value — but the upfront cost is significantly higher and installation often requires a gas line upgrade. If your home has an aging traditional water heater that needs replacement, this is the right time to evaluate both options carefully.
              </p>

              {/* Comparison table */}
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4 mt-8">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Factor</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Tankless</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Traditional Tank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Upfront Cost (Calgary)", tankless: "$2,500–$5,000+", traditional: "$800–$1,800" },
                      { factor: "Installation Cost", tankless: "$500–$1,500 (may need gas upgrade)", traditional: "$300–$600" },
                      { factor: "Lifespan", tankless: "20–25 years", traditional: "8–12 years (Calgary hard water)" },
                      { factor: "Energy Efficiency", tankless: "94–98% (condensing)", traditional: "60–70%" },
                      { factor: "Annual Energy Cost (Alberta)", tankless: "$180–$280", traditional: "$350–$500" },
                      { factor: "Hot Water Supply", tankless: "Unlimited (on demand)", traditional: "Limited by tank size" },
                      { factor: "Space Required", tankless: "Wall-mounted, very compact", traditional: "Large floor footprint" },
                      { factor: "Maintenance", tankless: "Annual descaling (Calgary hard water)", traditional: "Annual flush + anode rod" },
                      { factor: "Payback Period (Calgary)", tankless: "8–12 years", traditional: "N/A" },
                    ].map((row) => (
                      <tr key={row.factor} className="border-b border-gray-100">
                        <td className="px-4 py-3 font-semibold text-gray-900 border border-gray-200">{row.factor}</td>
                        <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.tankless}</td>
                        <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                The Calgary Hard Water Factor
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Calgary's very hard water (170–220 mg/L) significantly affects water heater performance and lifespan. Traditional tank water heaters in Calgary typically last only 8–12 years due to scale buildup and sediment accumulation — compared to 15+ years in softer-water cities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tankless water heaters are also affected by hard water, but in a different way. Scale builds up on the heat exchanger, reducing efficiency and potentially causing damage. Annual descaling (flushing with a descaling solution) is essential for tankless units in Calgary — a service we provide as part of our maintenance program.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Installing a water softener alongside either type of water heater is the most effective way to extend its lifespan in Calgary. According to{" "}
                <a href="https://www.nrcan.gc.ca/energy/efficiency/housing/home-improvements/water-heaters/13735" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  Natural Resources Canada
                </a>
                , water heaters account for approximately 20% of a home's energy use — making efficiency a significant factor in Alberta's energy costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-3">Tankless: Best For</h3>
                  <div className="flex flex-col gap-2">
                    {[
                      "Long-term homeowners (10+ year horizon)",
                      "Homes with high hot water demand",
                      "Homes with adequate gas line capacity",
                      "Homeowners who want to maximize energy efficiency",
                      "Homes with limited utility room space",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-3">Traditional: Best For</h3>
                  <div className="flex flex-col gap-2">
                    {[
                      "Budget-conscious replacements",
                      "Homes with smaller gas lines",
                      "Short-term ownership situations",
                      "Rental properties",
                      "Homes with existing tank infrastructure",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-blue-600 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                Alberta Rebates for Tankless Water Heaters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alberta homeowners may be eligible for rebates on high-efficiency water heaters through the{" "}
                <a href="https://www.alberta.ca/energy-efficiency-rebates.aspx" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  Alberta Energy Efficiency Rebate Program
                </a>
                . Condensing tankless water heaters with AFUE ratings above 90% typically qualify. We can advise on current rebate availability when providing your installation quote.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">External Resources</h3>
                <div className="flex flex-col gap-1.5">
                  <a href="https://www.nrcan.gc.ca/energy/efficiency/housing/home-improvements/water-heaters/13735" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> Natural Resources Canada: Water Heaters
                  </a>
                  <a href="https://www.tssa.org/en/fuels/water-heaters.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> TSSA: Water Heater Safety
                  </a>
                  <Link href="/water-heater-installation-calgary" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ChevronRight size={12} /> Our Water Heater Installation Service
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">NEED A WATER HEATER?</h3>
                <p className="text-red-100 text-sm mb-4">Same-day installation available. Call now.</p>
                <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full">
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">RELATED GUIDES</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/water-heater-installation-calgary", label: "Water Heater Installation" },
                    { href: "/calgary-water-hardness-report", label: "Calgary Water Hardness" },
                    { href: "/winterize-outdoor-faucets-calgary", label: "Winterize Your Faucets" },
                    { href: "/emergency-plumbing-calgary", label: "Emergency Plumbing" },
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
