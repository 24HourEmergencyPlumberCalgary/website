/**
 * Emergency Plumbing Calgary — Pillar Page
 * Design: Precision Response
 * BLUF: Answer in first 120 chars, then deep content for topical authority
 */

import { Link } from "wouter";
import { Phone, ChevronRight, Clock, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";
import BookingForm from "@/components/BookingForm";
import SEO, { buildLocalBusinessSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/components/SEO";

const BURST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/burst-pipe-LXc6kDC4N566Bs3tPcVuvj.webp";

export default function EmergencyPillar() {
  return (
    <main>
      <SEO
        title="Emergency Plumbing Calgary | 24/7 Rapid Response | (403) 771-5925"
        description="Calgary's complete guide to emergency plumbing. Licensed 24/7 plumbers, 60-minute response, no overtime charges. Burst pipes, frozen pipes, drain cleaning, water heaters."
        canonical="/emergency-plumbing-calgary"
        schemas={[
          buildLocalBusinessSchema(),
          buildServiceSchema("Emergency Plumbing Calgary", "24/7 emergency plumbing services across Calgary, Alberta. Licensed plumbers, 60-minute response, no overtime charges.", "/emergency-plumbing-calgary"),
          buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Emergency Plumbing Calgary", url: "/emergency-plumbing-calgary" }]),
        ]}
      />
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.015_250)] py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-[oklch(0.45_0.22_25)]/20 border border-[oklch(0.45_0.22_25)]/30 text-[oklch(0.75_0.15_25)] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <span className="status-dot w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Available 24/7
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl lg:text-6xl font-bold text-white leading-none mb-4">
                EMERGENCY PLUMBING CALGARY:<br />
                <span className="text-[oklch(0.65_0.22_25)]">24/7 RAPID RESPONSE</span>
              </h1>
              {/* BLUF — answer within first 120 chars */}
              <p className="text-gray-200 text-xl leading-relaxed mb-6 font-semibold">
                Calgary's fastest emergency plumber. We dispatch within 60 minutes, 24 hours a day. Call {BUSINESS.phone}.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                When a pipe bursts or your basement floods, you need a licensed plumber at your door — not a voicemail. Our Calgary emergency plumbing team operates around the clock with no overtime charges. We cover all of Calgary, Alberta, Airdrie, and Chestermere.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 bg-[oklch(0.45_0.22_25)] text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-[oklch(0.40_0.22_25)] transition-colors pulse-emergency"
              >
                <Phone size={22} />
                CALL NOW: {BUSINESS.phone}
              </a>
            </div>
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main article */}
            <article className="lg:col-span-2 prose prose-slate max-w-none">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                What Counts as a Plumbing Emergency in Calgary?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not every plumbing problem is an emergency — but many are. The key question is: is water actively damaging your home right now, or could it within the next few hours? If the answer is yes, call us immediately.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Common Calgary plumbing emergencies include burst pipes (especially after Calgary's freeze-thaw cycles), sewer backups, no hot water in winter, basement flooding, and gas line concerns near plumbing fixtures.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
                {[
                  "Burst or leaking pipe",
                  "Frozen pipe (before it bursts)",
                  "Sewer backup or overflow",
                  "No hot water in winter",
                  "Basement flooding",
                  "Sump pump failure",
                  "Gas smell near water heater",
                  "Blocked main drain",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <AlertTriangle size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                Why Calgary's Climate Creates More Plumbing Emergencies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Calgary experiences some of Canada's most dramatic temperature swings. A chinook can push temperatures from -25°C to +10°C in under 24 hours. This rapid freeze-thaw cycle is the leading cause of burst pipes in Calgary homes — particularly in older homes built before 1990 with pipes routed through exterior walls.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Additionally, Calgary's water hardness (averaging 170–220 mg/L — among the highest in Canada) accelerates scale buildup in pipes and water heaters. This reduces flow, increases pressure, and shortens the lifespan of plumbing fixtures. According to the{" "}
                <a href="https://www.calgary.ca/water/drinking-water-quality.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  City of Calgary Water Services
                </a>
                , the city's water supply comes from the Bow and Elbow Rivers, with hardness varying seasonally.
              </p>

              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                Our Emergency Response Process
              </h2>
              <ol className="flex flex-col gap-4 not-prose mb-8">
                {[
                  { step: "1", title: "You Call or Book Online", desc: "Our dispatcher answers 24/7. Tell us your address and the issue. We'll give you an ETA immediately." },
                  { step: "2", title: "Technician Dispatched", desc: "The nearest available licensed Calgary plumber is dispatched to your location. Average response: 45 minutes." },
                  { step: "3", title: "Diagnosis & Transparent Quote", desc: "We diagnose the problem and provide a written quote before any work begins. No surprise charges." },
                  { step: "4", title: "Repair & Cleanup", desc: "We fix the problem completely and clean up the work area before leaving." },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[oklch(0.45_0.22_25)] flex items-center justify-center shrink-0 font-['Barlow_Condensed'] font-bold text-white">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{title}</div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                All Emergency Plumbing Services in Calgary
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 not-prose mb-8">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:bg-red-50 transition-all text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)]"
                  >
                    <ChevronRight size={14} />
                    {s.title}
                  </Link>
                ))}
              </div>

              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 not-prose mb-4">
                Service Areas: Emergency Plumbing Across Calgary
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide 24/7 emergency plumbing across all of Calgary, Alberta, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 not-prose mb-6">
                {NEIGHBORHOODS.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="flex items-center gap-2 text-sm text-[oklch(0.45_0.22_25)] hover:underline font-semibold"
                  >
                    <ChevronRight size={14} />
                    {n.title}
                  </Link>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                For regulatory information on plumbing permits in Calgary, visit the{" "}
                <a href="https://www.calgary.ca/development/permits.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  City of Calgary Development Permits
                </a>{" "}
                page. All our work is performed to{" "}
                <a href="https://www.alberta.ca/plumbing-code" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.22_25)] hover:underline">
                  Alberta Plumbing Code
                </a>{" "}
                standards.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 flex flex-col gap-6">
              {/* Quick contact */}
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">NEED HELP NOW?</h3>
                <p className="text-red-100 text-sm mb-4">Our dispatchers are standing by 24/7.</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Trust signals */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">WHY CHOOSE US</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Clock, text: "~45 min avg response" },
                    { icon: Shield, text: "Licensed & Insured" },
                    { icon: CheckCircle, text: "No overtime charges" },
                    { icon: CheckCircle, text: "Transparent pricing" },
                    { icon: CheckCircle, text: "Alberta Master Plumber" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related resources */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">RELATED GUIDES</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/shut-off-valve-location-calgary-home", label: "Find Your Shut-Off Valve" },
                    { href: "/winterize-outdoor-faucets-calgary", label: "Winterize Your Faucets" },
                    { href: "/calgary-water-hardness-report", label: "Calgary Water Hardness" },
                    { href: "/frozen-pipe-thawing-calgary", label: "Frozen Pipe Guide" },
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
