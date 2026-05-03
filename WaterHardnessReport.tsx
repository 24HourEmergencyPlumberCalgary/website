/**
 * 2026 Calgary Water Hardness Report
 * Backlink-worthy data page targeting local news and real estate sites
 */

import { Link } from "wouter";
import { Phone, ChevronRight, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WaterHardnessReport() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-12">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-4">
              Data Report · 2026
            </span>
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              2026 Calgary Water Hardness Report: The Impact on Your Pipes
            </h1>
            <p className="text-gray-200 text-xl font-semibold mb-2">
              Calgary's water hardness averages 170–220 mg/L — among the hardest in Canada. Here's what that means for your plumbing, appliances, and water bills.
            </p>
            <p className="text-gray-400 text-sm">Updated May 2026 · By 24 Hour Emergency Plumber Calgary</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-slate max-w-none">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                What Is Water Hardness and Why Does It Matter?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Water hardness refers to the concentration of dissolved calcium and magnesium minerals in your water supply. It's measured in milligrams per litre (mg/L) or grains per gallon (gpg). Water above 120 mg/L is considered "hard" — Calgary's water regularly measures between 170 and 220 mg/L, classifying it as "very hard."
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                According to the{" "}
                <a href="https://www.calgary.ca/water/drinking-water-quality.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  City of Calgary Water Services
                </a>
                , the city's water supply comes from the Bow and Elbow Rivers, with hardness varying seasonally. Winter months typically see higher hardness levels as river flow decreases and mineral concentration increases.
              </p>

              {/* Data table */}
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 not-prose mb-4 mt-8">
                Calgary Water Hardness by Season (2025–2026)
              </h2>
              <div className="not-prose overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Season</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Avg Hardness (mg/L)</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Classification</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900 border border-gray-200">Plumbing Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { season: "Winter (Dec–Feb)", hardness: "200–220", class: "Very Hard", risk: "High", riskColor: "text-red-600" },
                      { season: "Spring (Mar–May)", hardness: "160–180", class: "Hard", risk: "Moderate", riskColor: "text-orange-600" },
                      { season: "Summer (Jun–Aug)", hardness: "140–170", class: "Hard", risk: "Moderate", riskColor: "text-orange-600" },
                      { season: "Fall (Sep–Nov)", hardness: "175–200", class: "Very Hard", risk: "High", riskColor: "text-red-600" },
                    ].map((row) => (
                      <tr key={row.season} className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.season}</td>
                        <td className="px-4 py-3 font-semibold text-gray-900 border border-gray-200">{row.hardness}</td>
                        <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.class}</td>
                        <td className={`px-4 py-3 font-semibold border border-gray-200 ${row.riskColor}`}>{row.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 not-prose mb-4">
                How Hard Water Damages Calgary Plumbing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hard water leaves mineral deposits (called "scale") inside pipes, water heaters, dishwashers, and washing machines. In Calgary's very hard water, this scale accumulates faster than in most Canadian cities. The effects compound over time:
              </p>
              <div className="not-prose grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Pipe Narrowing", desc: "Scale buildup inside pipes reduces diameter, increasing water pressure and strain on joints." },
                  { title: "Water Heater Failure", desc: "Scale on heating elements reduces efficiency by up to 30% and shortens heater lifespan from 15 to 8–10 years in Calgary." },
                  { title: "Appliance Damage", desc: "Dishwashers, washing machines, and coffee makers in Calgary homes fail 30–40% earlier than in soft-water cities." },
                  { title: "Fixture Corrosion", desc: "Hard water accelerates corrosion of faucet aerators, showerheads, and valve seats." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="font-bold text-gray-900 text-sm mb-1">{title}</div>
                    <div className="text-gray-500 text-sm">{desc}</div>
                  </div>
                ))}
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 not-prose mb-4">
                What Calgary Homeowners Can Do
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most effective solution for Calgary's hard water is a whole-home water softener. A properly sized softener can reduce hardness to below 50 mg/L, dramatically extending the life of your plumbing and appliances. The{" "}
                <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/water-quality.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  Health Canada water quality guidelines
                </a>{" "}
                recommend water hardness below 200 mg/L for household use — Calgary's winter levels frequently exceed this threshold.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Annual water heater flushing is also critical in Calgary. Sediment and scale accumulate at the bottom of tank water heaters, reducing efficiency and accelerating corrosion. Most Calgary homeowners should flush their water heater every 6–12 months.
              </p>

              <div className="not-prose bg-[oklch(0.45_0.22_25)]/5 border border-[oklch(0.45_0.22_25)]/20 rounded-lg p-5 mt-6">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-gray-900 mb-2">
                  Related Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { href: "/water-heater-installation-calgary", label: "Water Heater Service" },
                    { href: "/drain-cleaning-calgary", label: "Drain Cleaning" },
                    { href: "/sewer-line-inspection-calgary", label: "Sewer Inspection" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="inline-flex items-center gap-1 text-sm text-[oklch(0.45_0.22_25)] hover:underline font-semibold">
                      <ChevronRight size={13} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">PLUMBING ISSUE?</h3>
                <p className="text-red-100 text-sm mb-4">Hard water damage? We can help. Available 24/7.</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">RELATED GUIDES</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/winterize-outdoor-faucets-calgary", label: "Winterize Your Faucets" },
                    { href: "/tankless-vs-traditional-water-heater-alberta", label: "Tankless vs Traditional" },
                    { href: "/shut-off-valve-location-calgary-home", label: "Find Your Shut-Off Valve" },
                    { href: "/emergency-plumbing-calgary", label: "Emergency Plumbing Guide" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline font-medium">
                      <ChevronRight size={13} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">External Resources</h3>
                <div className="flex flex-col gap-2">
                  <a href="https://www.calgary.ca/water/drinking-water-quality.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={11} /> City of Calgary Water Quality
                  </a>
                  <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/water-quality.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={11} /> Health Canada Water Guidelines
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
