/**
 * Calgary Homeowner's Checklist: Winterize Outdoor Faucets
 * DIY guide — backlink-worthy content
 */

import { Link } from "wouter";
import { Phone, ChevronRight, CheckCircle, ExternalLink, AlertTriangle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WinterizeGuide() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-12">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 mb-4">
              DIY Checklist
            </span>
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              The Calgary Homeowner's Checklist: How to Winterize Your Outdoor Faucets
            </h1>
            <p className="text-gray-200 text-xl font-semibold mb-2">
              Protect your outdoor plumbing before Calgary's first hard freeze. This step-by-step checklist takes 30 minutes and could save you thousands in burst pipe repairs.
            </p>
            <p className="text-gray-400 text-sm">Updated October 2025 · By 24 Hour Emergency Plumber Calgary</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-orange-800 text-sm">
                    <strong>Calgary Timing:</strong> Calgary's first hard freeze (below -10°C) typically arrives in late October or early November. Complete this checklist by mid-October to be safe. Calgary's chinook cycles mean temperatures can drop rapidly with little warning.
                  </p>
                </div>
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                Why Outdoor Faucets Freeze in Calgary
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Outdoor faucets (also called hose bibs or sillcocks) are connected to your home's water supply through pipes that run through exterior walls. When temperatures drop below freezing, any water remaining in these pipes or in the faucet body itself can freeze and expand, cracking the pipe or faucet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Calgary's freeze-thaw cycles make this particularly dangerous. A warm chinook can thaw a partially frozen pipe, then a rapid temperature drop can refreeze it — often causing a burst at the weakest point. According to the{" "}
                <a href="https://www.calgary.ca/water/frozen-pipes.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  City of Calgary
                </a>
                , frozen pipes are one of the most common causes of water damage claims in Alberta each winter.
              </p>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-6">
                The Complete Winterization Checklist
              </h2>

              {[
                {
                  step: "Step 1: Disconnect All Garden Hoses",
                  items: [
                    "Disconnect every garden hose from every outdoor faucet",
                    "Drain each hose completely before storing",
                    "Store hoses in a garage or shed — not outside",
                    "Check that no hoses are left connected (even frost-free faucets can freeze if a hose is attached)",
                  ],
                  note: "A connected garden hose traps water in the faucet body, preventing it from draining and causing freezing even in frost-free faucets.",
                },
                {
                  step: "Step 2: Locate and Close the Indoor Shut-Off Valve",
                  items: [
                    "Find the indoor shut-off valve for each outdoor faucet (usually in the basement or crawl space near the exterior wall)",
                    "Turn the valve clockwise to close it completely",
                    "Label the valve so you can find it quickly in an emergency",
                    "If your home doesn't have indoor shut-off valves for outdoor faucets, consider having them installed",
                  ],
                  note: "Not all Calgary homes have individual shut-off valves for outdoor faucets, especially homes built before 1990.",
                },
                {
                  step: "Step 3: Drain the Outdoor Faucet",
                  items: [
                    "With the indoor valve closed, go outside and open the outdoor faucet fully",
                    "Let any remaining water drain out completely",
                    "Leave the outdoor faucet in the open position — this allows any residual water to drain and prevents pressure buildup",
                    "Go back inside and open the bleeder cap on the indoor shut-off valve (if present) to drain the pipe between the valve and faucet",
                  ],
                },
                {
                  step: "Step 4: Insulate Exposed Pipes",
                  items: [
                    "Inspect pipes in unheated areas: garage, crawl space, and exterior walls",
                    "Wrap exposed pipes with foam pipe insulation (available at any Calgary hardware store)",
                    "Pay special attention to pipes near exterior walls and in unheated garages",
                    "Seal any gaps or cracks in exterior walls where cold air can reach pipes",
                  ],
                },
                {
                  step: "Step 5: Install Outdoor Faucet Covers",
                  items: [
                    "Purchase foam outdoor faucet covers (insulating covers) from a hardware store",
                    "Install covers over each outdoor faucet after draining",
                    "Ensure covers fit snugly and cover the entire faucet body",
                    "These provide an extra layer of insulation against Calgary's extreme cold",
                  ],
                },
                {
                  step: "Step 6: Check Irrigation Systems",
                  items: [
                    "Shut off the irrigation system water supply",
                    "Blow out irrigation lines with compressed air (or hire a professional)",
                    "Drain all irrigation backflow preventers",
                    "Insulate any above-ground irrigation components",
                  ],
                  note: "Irrigation system winterization often requires a professional with an air compressor. Many Calgary plumbers offer this service in September and October.",
                },
              ].map(({ step, items, note }) => (
                <div key={step} className="mb-8">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[oklch(0.45_0.22_25)] flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {step.charAt(5)}
                    </span>
                    {step}
                  </h3>
                  <div className="flex flex-col gap-2 mb-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                  {note && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
                      <strong>Note:</strong> {note}
                    </div>
                  )}
                </div>
              ))}

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                What to Do If a Pipe Freezes Anyway
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you turn on a tap in winter and get little or no water, you likely have a frozen pipe. Here's what to do:
              </p>
              <ol className="flex flex-col gap-3 mb-6">
                {[
                  "Shut off your main water valve immediately to prevent flooding if the pipe bursts when it thaws",
                  "Call us at " + BUSINESS.phone + " — we have professional pipe thawing equipment",
                  "Never use an open flame, heat gun, or hair dryer on frozen pipes — this is a fire hazard",
                  "Keep cabinet doors under sinks open to allow warm air to reach pipes",
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
                  <a href="https://www.calgary.ca/water/frozen-pipes.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> City of Calgary: Frozen Pipes Guide
                  </a>
                  <a href="https://www.alberta.ca/emergency-management" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ExternalLink size={12} /> Alberta Emergency Management
                  </a>
                  <Link href="/frozen-pipe-thawing-calgary" className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline">
                    <ChevronRight size={12} /> Our Frozen Pipe Thawing Service
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">FROZEN PIPE?</h3>
                <p className="text-red-100 text-sm mb-4">Call us before it bursts. Available 24/7.</p>
                <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full">
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">RELATED GUIDES</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/frozen-pipe-thawing-calgary", label: "Frozen Pipe Thawing" },
                    { href: "/burst-pipe-repair-calgary", label: "Burst Pipe Repair" },
                    { href: "/shut-off-valve-location-calgary-home", label: "Find Your Shut-Off Valve" },
                    { href: "/calgary-water-hardness-report", label: "Calgary Water Hardness" },
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
