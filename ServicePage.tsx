/**
 * ServicePage — Generic service page template
 * Renders content for any of the 8 service pages based on slug
 */

import { Link } from "wouter";
import { Phone, ChevronRight, Clock, Shield, CheckCircle, AlertTriangle, Droplets, Flame, Snowflake, Waves, ArrowDownToLine, Search } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";
import BookingForm from "@/components/BookingForm";
import SEO, { buildLocalBusinessSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/components/SEO";

const BURST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/burst-pipe-LXc6kDC4N566Bs3tPcVuvj.webp";
const DRAIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/drain-cleaning-WCsEo4kTpN2jugF4uEVUBT.webp";
const WATER_HEATER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/water-heater-R4oU4emZpa9vHcgeGpcuhR.webp";

const SERVICE_CONTENT: Record<string, {
  headline: string;
  bluf: string;
  intro: string;
  body: string[];
  signs: string[];
  process: { title: string; desc: string }[];
  image?: string;
  externalLinks: { href: string; label: string }[];
}> = {
  "emergency-plumber-calgary": {
    headline: "Emergency Plumber Calgary — 24/7 Rapid Response",
    bluf: "Calgary's fastest emergency plumber. Licensed, insured, dispatched in 60 minutes. Call (403) 771-5925 now.",
    intro: "When a plumbing emergency hits, you need a licensed Calgary plumber at your door — not a voicemail. We operate 24 hours a day, 7 days a week, with no overtime charges. Our technicians are stationed across Calgary for the fastest possible response.",
    body: [
      "Calgary's unique climate — with freeze-thaw cycles that can swing 35°C in a single day — makes plumbing emergencies more common here than almost anywhere else in Canada. Pipes in exterior walls, unheated crawl spaces, and garage utility rooms are particularly vulnerable.",
      "Our emergency plumbers carry a full inventory of common repair parts on every truck, so most jobs are completed in a single visit. We don't subcontract — every technician is a direct employee, background-checked, and Alberta-licensed.",
      "We serve all of Calgary, Alberta, including NW, NE, SW, and SE quadrants, as well as Airdrie and Chestermere. Our dispatch team can give you a real-time ETA when you call.",
    ],
    signs: [
      "Water spraying from a pipe",
      "Unexplained wet spots on walls or ceilings",
      "Sudden drop in water pressure",
      "Water meter running with all taps off",
      "Sewage smell in your home",
      "Gurgling sounds from drains",
    ],
    process: [
      { title: "Call or Book Online", desc: "Reach our 24/7 dispatcher. We'll confirm your address and give you a real ETA." },
      { title: "Technician Dispatched", desc: "The nearest licensed Calgary plumber heads to your location immediately." },
      { title: "Diagnosis & Quote", desc: "We diagnose the issue and provide a written quote before any work begins." },
      { title: "Fix & Clean Up", desc: "We repair the problem completely and leave your home clean." },
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
      { href: "https://www.alberta.ca/plumbing-code", label: "Alberta Plumbing Code" },
    ],
  },
  "24-hour-plumber-calgary": {
    headline: "24 Hour Plumber Calgary — Same Rate Day or Night",
    bluf: "24/7 plumbing in Calgary with no overtime charges. Licensed technicians dispatched in 60 minutes. Call (403) 771-5925.",
    intro: "Most plumbing problems don't wait for business hours. Our 24 hour plumber Calgary service means you get the same licensed, professional response at 3am on a Sunday as you do at 10am on a Tuesday — at the same price.",
    body: [
      "We eliminated overtime charges because we believe a plumbing emergency at midnight is just as urgent as one at noon. Our flat-rate pricing means you know exactly what you're paying before we start — no surprises on the invoice.",
      "Our 24/7 dispatch team is staffed by experienced coordinators who can walk you through immediate damage-control steps while your technician is en route. We've handled thousands of after-hours Calgary plumbing calls.",
      "Calgary homeowners trust us because we show up when others don't. Our trucks are stocked with the most common repair parts for Calgary homes — copper fittings, PEX connectors, drain components — so most repairs are done in one visit.",
    ],
    signs: [
      "Active water leak or flooding",
      "No hot water (especially in winter)",
      "Completely blocked drain",
      "Frozen or burst pipe",
      "Sump pump failure during rain",
      "Sewer backup",
    ],
    process: [
      { title: "Call Anytime", desc: "Our dispatcher answers 24 hours a day, 365 days a year — including holidays." },
      { title: "Same Flat Rate", desc: "No overtime, no holiday surcharge. The price you're quoted is the price you pay." },
      { title: "Licensed Technician", desc: "Every technician is Alberta-licensed and carries full liability insurance." },
      { title: "One-Visit Fix", desc: "We stock common parts on every truck to resolve most issues in a single visit." },
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
      { href: "https://www.safetycodescouncil.ab.ca", label: "Alberta Safety Codes Council" },
    ],
  },
  "burst-pipe-repair-calgary": {
    headline: "Burst Pipe Repair Calgary — Stop the Flooding Fast",
    bluf: "Burst pipe in Calgary? Shut off your main valve and call (403) 771-5925. We arrive in 60 minutes to stop the damage.",
    intro: "A burst pipe is one of the most damaging plumbing emergencies a Calgary homeowner can face. Water can cause thousands of dollars in structural damage within hours. The moment you suspect a burst pipe, shut off your main water valve and call us immediately.",
    body: [
      "Calgary's freeze-thaw cycles are the leading cause of burst pipes in Alberta. When water inside a pipe freezes, it expands by about 9%, exerting up to 2,000 psi of pressure on the pipe walls. Most residential pipes can't withstand this — they crack or burst, often in hidden locations inside walls or under floors.",
      "Our burst pipe repair technicians carry thermal imaging equipment to locate hidden leaks inside walls without destructive investigation. We can often pinpoint the exact location of a burst pipe before opening any drywall.",
      "After stopping the immediate leak, we assess the full extent of the damage and provide a complete repair — not just a temporary patch. We also advise on pipe insulation upgrades to prevent future freeze events.",
    ],
    signs: [
      "Water spraying or gushing from a wall",
      "Wet or bulging drywall",
      "Ceiling water stains appearing rapidly",
      "Sudden complete loss of water pressure",
      "Sound of running water with all taps off",
      "Water meter spinning with everything off",
    ],
    process: [
      { title: "Shut Off Main Valve", desc: "Turn off your main water shut-off valve immediately to stop water flow." },
      { title: "Call (403) 771-5925", desc: "Our dispatcher will guide you through next steps while your technician is en route." },
      { title: "Locate & Diagnose", desc: "We use thermal imaging to find hidden burst pipes without unnecessary demolition." },
      { title: "Full Repair", desc: "We replace the damaged section with code-compliant materials and test the repair." },
    ],
    image: BURST_IMG,
    externalLinks: [
      { href: "https://www.ibc.ca/news-insights/news/water-damage-is-the-leading-cause-of-home-insurance-claims", label: "IBC: Water Damage & Home Insurance" },
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
    ],
  },
  "drain-cleaning-calgary": {
    headline: "Drain Cleaning & Augering Calgary — Clear Any Blockage",
    bluf: "Blocked drain in Calgary? We clear it fast with professional augering equipment. Call (403) 771-5925 — available 24/7.",
    intro: "A blocked drain can quickly escalate from an inconvenience to a health hazard. Whether it's a slow kitchen drain, a completely blocked floor drain, or a main sewer line backup, our Calgary drain cleaning team clears it fast with professional-grade equipment.",
    body: [
      "Calgary's hard water (170–220 mg/L) accelerates scale and mineral buildup inside drain pipes, narrowing the flow path over time. Combined with grease, hair, and debris, this creates stubborn blockages that store-bought drain cleaners can't touch.",
      "We use professional electric drain snakes (augers) and hydro-jetting equipment to clear blockages completely — not just punch a hole through them. Hydro-jetting uses high-pressure water to scour the inside of the pipe, removing grease, scale, and root intrusion.",
      "For recurring drain problems, we recommend a camera inspection to identify the root cause — whether it's a partial collapse, root intrusion, or severe scale buildup that requires pipe lining.",
    ],
    signs: [
      "Slow-draining sink, tub, or floor drain",
      "Gurgling sounds from drains",
      "Multiple drains backing up simultaneously",
      "Sewage smell from drains",
      "Water backing up into tub when toilet flushes",
      "Wet spots in yard near sewer line",
    ],
    process: [
      { title: "Inspection", desc: "We assess the blockage location and severity before choosing the right tool." },
      { title: "Augering or Hydro-Jetting", desc: "We clear the blockage completely using the appropriate professional equipment." },
      { title: "Camera Verification", desc: "For severe blockages, we verify the line is clear with a camera inspection." },
      { title: "Prevention Advice", desc: "We advise on steps to prevent future blockages specific to your plumbing." },
    ],
    image: DRAIN_IMG,
    externalLinks: [
      { href: "https://www.calgary.ca/water/sewer-and-drainage.html", label: "City of Calgary Sewer & Drainage" },
      { href: "https://www.alberta.ca/plumbing-code", label: "Alberta Plumbing Code" },
    ],
  },
  "water-heater-installation-calgary": {
    headline: "Water Heater Installation Calgary — Tankless & Traditional",
    bluf: "No hot water in Calgary? We install and replace water heaters same day. Call (403) 771-5925 — available 24/7.",
    intro: "Losing hot water in a Calgary winter is more than an inconvenience — it's an emergency. Our licensed plumbers install, repair, and replace both traditional tank water heaters and modern tankless (on-demand) units, often the same day you call.",
    body: [
      "Calgary's hard water is particularly hard on water heaters. Mineral scale builds up on heating elements and inside tank walls, reducing efficiency and shortening the unit's lifespan. A tank water heater in Calgary typically lasts 8–12 years, compared to 15+ years in softer-water cities.",
      "Tankless water heaters offer significant advantages for Calgary homes: they heat water on demand (eliminating standby heat loss), last 20+ years with proper maintenance, and take up far less space. However, they require proper sizing and gas line upgrades in many Calgary homes.",
      "We carry major brands including Rinnai, Navien, Bradford White, and A.O. Smith. Our technicians are factory-trained and can advise on the right unit for your home's size, water usage, and gas capacity.",
    ],
    signs: [
      "No hot water at all",
      "Hot water runs out quickly",
      "Rusty or discoloured hot water",
      "Rumbling or popping sounds from tank",
      "Water pooling around the heater",
      "Unit is 10+ years old",
    ],
    process: [
      { title: "Assessment", desc: "We assess your current unit, gas line capacity, and household hot water needs." },
      { title: "Recommendation", desc: "We recommend the right unit (tank or tankless) with transparent pricing." },
      { title: "Same-Day Installation", desc: "Most water heater replacements are completed the same day." },
      { title: "Permit & Inspection", desc: "We pull all required Calgary permits and arrange for inspection." },
    ],
    image: WATER_HEATER_IMG,
    externalLinks: [
      { href: "https://www.tssa.org/en/fuels/water-heaters.aspx", label: "TSSA: Water Heater Safety (Alberta)" },
      { href: "/tankless-vs-traditional-water-heater-alberta", label: "Tankless vs Traditional: Full Comparison" },
    ],
  },
  "frozen-pipe-thawing-calgary": {
    headline: "Frozen Pipe Thawing Calgary — Before They Burst",
    bluf: "Frozen pipes in Calgary? Act now before they burst. We safely thaw frozen pipes 24/7. Call (403) 771-5925.",
    intro: "Calgary's chinook cycles create some of the most dangerous freeze-thaw conditions for residential plumbing in Canada. A pipe can freeze solid overnight and burst by morning. If you suspect frozen pipes, call us immediately — we can often thaw them before they rupture.",
    body: [
      "The danger with frozen pipes isn't the freezing itself — it's the thawing. As ice melts, it can shift and crack the pipe at a weak point, causing a burst that releases water inside your walls. Never use an open flame or heat gun to thaw pipes yourself — this is a fire hazard and can cause the pipe to burst explosively.",
      "Our technicians use professional pipe thawing equipment — electric pipe thawers and heat tape — to safely and gradually warm frozen pipes. We also inspect the pipe for stress fractures that could lead to a burst after thawing.",
      "After thawing, we assess the pipe's condition and recommend insulation upgrades to prevent future freezing. Pipes in exterior walls, crawl spaces, and unheated garages are most vulnerable in Calgary's climate.",
    ],
    signs: [
      "No water from a specific tap",
      "Reduced water pressure in cold weather",
      "Frost visible on exposed pipes",
      "Bulging or cracked pipe sections",
      "Unusual sounds from pipes in cold weather",
      "Pipes in unheated areas (garage, crawl space)",
    ],
    process: [
      { title: "Locate the Frozen Section", desc: "We identify which pipes are frozen using thermal imaging and inspection." },
      { title: "Safe Thawing", desc: "We use professional electric thawing equipment — never open flame." },
      { title: "Integrity Check", desc: "We inspect the thawed pipe for stress fractures before restoring water." },
      { title: "Insulation Upgrade", desc: "We recommend and install pipe insulation to prevent future freezing." },
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/frozen-pipes.html", label: "City of Calgary: Frozen Pipes Guide" },
      { href: "https://www.alberta.ca/emergency-management", label: "Alberta Emergency Management" },
    ],
  },
  "sump-pump-repair-calgary": {
    headline: "Sump Pump Repair Calgary — Protect Your Basement",
    bluf: "Sump pump failure in Calgary? We repair and replace sump pumps 24/7 to protect your basement. Call (403) 771-5925.",
    intro: "A failed sump pump during a Calgary spring thaw or heavy rain can mean thousands of dollars in basement flooding damage. Our licensed plumbers repair and replace sump pumps 24/7 — including emergency same-day service when your basement is at risk.",
    body: [
      "Calgary's spring thaw season (typically March through May) is the highest-risk period for sump pump failures. Snowmelt combined with spring rain can overwhelm a failing or undersized sump pump within hours. Many Calgary basements flood every year due to sump pump failures that could have been prevented.",
      "We service all major sump pump brands including Zoeller, Wayne, Liberty, and Ridgid. We also install battery backup systems — essential for Calgary homes where power outages often coincide with the worst storm events.",
      "For homes with chronic basement moisture issues, we can assess whether a sump pump upgrade, perimeter drainage system, or waterproofing solution is the right long-term fix.",
    ],
    signs: [
      "Sump pump running constantly",
      "Sump pump not turning on",
      "Unusual grinding or rattling sounds",
      "Visible rust or corrosion on the pump",
      "Pump is 7+ years old",
      "Water in the sump pit not being removed",
    ],
    process: [
      { title: "Emergency Assessment", desc: "We assess the pump and pit to determine if repair or replacement is needed." },
      { title: "Repair or Replace", desc: "We repair if possible, or replace with a properly sized unit for your pit." },
      { title: "Battery Backup", desc: "We recommend and install battery backup systems for power outage protection." },
      { title: "Test & Verify", desc: "We test the system thoroughly before leaving to ensure full operation." },
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/basement-flooding.html", label: "City of Calgary: Basement Flooding" },
      { href: "https://www.alberta.ca/flood-preparedness", label: "Alberta Flood Preparedness" },
    ],
  },
  "sewer-line-inspection-calgary": {
    headline: "Sewer Line Inspection Calgary — Camera Diagnosis",
    bluf: "Sewer problems in Calgary? We use camera inspection to diagnose blockages, cracks, and root intrusion. Call (403) 771-5925.",
    intro: "Recurring drain problems, slow drains throughout your home, or sewage smells often indicate a sewer line issue that can't be solved with a drain snake. Our Calgary sewer line inspection service uses professional camera equipment to diagnose the exact problem — without unnecessary excavation.",
    body: [
      "Calgary's older neighbourhoods (built before 1980) often have clay tile sewer lines that are prone to root intrusion, joint separation, and collapse. Tree roots from Calgary's mature urban tree canopy are a leading cause of sewer line blockages in communities like Brentwood, Varsity, and Ramsay.",
      "Our camera inspection service provides a recorded video of your sewer line's interior, along with a written report identifying any defects. This report is often required by home buyers and insurance companies, and can be used to negotiate repairs in a real estate transaction.",
      "If our inspection reveals a damaged sewer line, we can provide options ranging from hydro-jetting and pipe lining (trenchless repair) to full sewer line replacement — with transparent pricing for each option.",
    ],
    signs: [
      "Multiple drains backing up simultaneously",
      "Sewage smell in the yard",
      "Wet or sunken areas in the yard",
      "Gurgling from multiple drains",
      "Recurring blockages despite regular clearing",
      "Home is 40+ years old with original sewer line",
    ],
    process: [
      { title: "Camera Inspection", desc: "We run a professional camera through your sewer line from the cleanout access." },
      { title: "Video Report", desc: "You receive a recorded video and written report of the inspection findings." },
      { title: "Diagnosis & Options", desc: "We explain what we found and present repair options with transparent pricing." },
      { title: "Repair or Refer", desc: "We handle most repairs in-house, from hydro-jetting to trenchless pipe lining." },
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/sewer-and-drainage.html", label: "City of Calgary Sewer & Drainage" },
      { href: "https://www.calgary.ca/water/private-sewer-service.html", label: "Calgary Private Sewer Service Info" },
    ],
  },
};

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-['Barlow_Condensed'] text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link href="/" className="text-[oklch(0.45_0.22_25)] hover:underline">Return Home</Link>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <main>
      <SEO
        title={`${service.title} | 24/7 Emergency Service | (403) 771-5925`}
        description={`${content.bluf} Licensed, insured Calgary plumbers. No overtime charges.`}
        canonical={`/${slug}`}
        schemas={[
          buildLocalBusinessSchema(),
          buildServiceSchema(service.title, service.description, `/${slug}`),
          buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: service.title, url: `/${slug}` }]),
        ]}
      />
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.015_250)] py-14 lg:py-18">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-[oklch(0.45_0.22_25)]/20 border border-[oklch(0.45_0.22_25)]/30 text-[oklch(0.75_0.15_25)] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <span className="status-dot w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Available 24/7 in Calgary
              </div>
              <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {content.headline}
              </h1>
              <p className="text-gray-200 text-lg font-semibold mb-4">{content.bluf}</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{content.intro}</p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 bg-[oklch(0.45_0.22_25)] text-white px-7 py-3.5 rounded-lg font-bold text-lg hover:bg-[oklch(0.40_0.22_25)] transition-colors pulse-emergency"
              >
                <Phone size={20} />
                CALL NOW: {BUSINESS.phone}
              </a>
            </div>
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              {/* Service image */}
              {content.image && (
                <img
                  src={content.image}
                  alt={service.title}
                  className="rounded-xl w-full object-cover mb-8 shadow-md"
                  width={700}
                  height={400}
                  loading="lazy"
                />
              )}

              {/* Body content */}
              {content.body.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}

              {/* Warning signs */}
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mt-8 mb-4">
                Warning Signs You Need {service.shortTitle} Service
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {content.signs.map((sign) => (
                  <div key={sign} className="flex items-center gap-2 text-sm text-gray-700">
                    <AlertTriangle size={14} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                    {sign}
                  </div>
                ))}
              </div>

              {/* Process */}
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                Our {service.shortTitle} Process
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {content.process.map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[oklch(0.45_0.22_25)] flex items-center justify-center shrink-0 font-['Barlow_Condensed'] font-bold text-white text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-0.5">{title}</div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service areas */}
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                {service.shortTitle} Service Areas in Calgary
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                We provide {service.shortTitle.toLowerCase()} services across all of Calgary, Alberta and surrounding communities:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {NEIGHBORHOODS.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="text-sm bg-gray-100 hover:bg-red-50 hover:text-[oklch(0.45_0.22_25)] text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium"
                  >
                    {n.area}
                  </Link>
                ))}
              </div>

              {/* External links */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Useful Resources</h3>
                <div className="flex flex-col gap-1.5">
                  {content.externalLinks.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-1.5 text-sm text-[oklch(0.45_0.22_25)] hover:underline"
                    >
                      <ChevronRight size={12} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-6 text-white">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">NEED HELP NOW?</h3>
                <p className="text-red-100 text-sm mb-4">24/7 dispatch — {BUSINESS.responseTime}</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">OTHER SERVICES</h3>
                <div className="flex flex-col gap-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[oklch(0.45_0.22_25)] font-medium"
                    >
                      <ChevronRight size={13} />
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link href="/emergency-plumbing-calgary" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[oklch(0.45_0.22_25)] font-medium">
                    <ChevronRight size={13} />
                    All Emergency Services
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-3">WHY CHOOSE US</h3>
                {[
                  { icon: Clock, text: "~45 min avg response" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: CheckCircle, text: "No overtime charges" },
                  { icon: CheckCircle, text: "Alberta Master Plumber" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <Icon size={13} className="text-[oklch(0.45_0.22_25)] shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
