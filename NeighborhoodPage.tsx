/**
 * NeighborhoodPage — Local area pages for NW Calgary, SE Calgary, Airdrie, Chestermere
 * Design: Precision Response
 */

import { Link } from "wouter";
import { Phone, ChevronRight, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";
import BookingForm from "@/components/BookingForm";

const NEIGHBORHOOD_CONTENT: Record<string, {
  headline: string;
  bluf: string;
  intro: string;
  body: string[];
  localFacts: string[];
  externalLinks: { href: string; label: string }[];
}> = {
  "nw-calgary-plumber": {
    headline: "NW Calgary Plumber — 24/7 Emergency Service",
    bluf: "Emergency plumber serving NW Calgary — Tuscany, Arbour Lake, Varsity, Dalhousie and more. Call (403) 771-5925.",
    intro: "NW Calgary is one of the city's fastest-growing quadrants, with a mix of newer developments in Tuscany and Arbour Lake and established communities like Varsity and Dalhousie. Our NW Calgary plumbers know the area's plumbing systems inside out.",
    body: [
      "Newer NW Calgary communities like Tuscany and Arbour Lake were built with modern PEX plumbing, which is more flexible and freeze-resistant than older copper systems. However, they're not immune to Calgary's extreme cold snaps — pipes in uninsulated garage walls and exterior utility rooms remain vulnerable.",
      "Established NW Calgary communities like Varsity, Dalhousie, and Brentwood (built in the 1960s–1980s) often have aging copper or galvanized steel pipes that are more susceptible to corrosion, scale buildup from Calgary's hard water, and freeze damage.",
      "Our NW Calgary plumbing team is stationed in the quadrant for fast response times. We serve all NW Calgary communities including Tuscany, Arbour Lake, Varsity, Dalhousie, Brentwood, Ranchlands, Hawkwood, Edgemont, and surrounding areas.",
    ],
    localFacts: [
      "NW Calgary has some of the city's oldest established communities (Varsity, Dalhousie) with aging plumbing infrastructure",
      "Tuscany and Arbour Lake are among Calgary's highest-elevation communities, affecting water pressure",
      "The area's mature tree canopy can cause root intrusion in older sewer lines",
      "Homes near Nose Hill Park experience more extreme temperature variations",
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
      { href: "https://www.calgary.ca/community/communities/nw-communities.html", label: "NW Calgary Communities" },
    ],
  },
  "se-calgary-plumber": {
    headline: "SE Calgary Plumber — 24/7 Emergency Service",
    bluf: "Emergency plumber serving SE Calgary — Mahogany, Auburn Bay, McKenzie Towne and more. Call (403) 771-5925.",
    intro: "SE Calgary is home to some of Calgary's newest and most rapidly developing communities, including Mahogany, Auburn Bay, and Cranston. Our SE Calgary plumbers serve the entire quadrant with fast emergency response.",
    body: [
      "SE Calgary's newer communities (built post-2000) predominantly use PEX plumbing, which offers good freeze resistance. However, the area's rapid development means some homes have plumbing systems that haven't been stress-tested through multiple Calgary winters.",
      "Communities like McKenzie Towne, Douglasdale, and Riverbend include homes built in the 1990s with a mix of copper and early PEX systems. These homes are entering the age range where water heater replacements and drain cleaning become more common.",
      "The SE quadrant's proximity to Fish Creek Provincial Park means many communities have significant tree canopy, which can cause root intrusion in sewer lines — particularly in older sections of Douglasdale and Riverbend.",
    ],
    localFacts: [
      "Mahogany and Auburn Bay are lake communities with unique plumbing considerations",
      "SE Calgary is one of the fastest-growing areas in Canada, with new developments ongoing",
      "Fish Creek Park's tree canopy creates root intrusion risks in adjacent communities",
      "Many SE Calgary homes have in-floor heating systems that require specialized plumbing knowledge",
    ],
    externalLinks: [
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
      { href: "https://www.calgary.ca/community/communities/se-communities.html", label: "SE Calgary Communities" },
    ],
  },
  "airdrie-plumber": {
    headline: "Airdrie Plumber — 24/7 Emergency Plumbing Service",
    bluf: "Emergency plumber serving Airdrie, Alberta — Bayside, Coopers Crossing, Kings Heights and more. Call (403) 771-5925.",
    intro: "Airdrie is one of Alberta's fastest-growing cities, located just north of Calgary. Our licensed plumbers serve all of Airdrie with 24/7 emergency response — the same service we provide across Calgary.",
    body: [
      "Airdrie's rapid growth means the city has a wide range of home ages and plumbing systems. Newer communities like Windsong and Midtown use modern PEX plumbing, while established areas like Bayside and Canals have homes from the 1990s and 2000s with aging copper systems.",
      "Airdrie sits at a slightly higher elevation than Calgary and experiences similar freeze-thaw cycles. The city's newer construction often has better pipe insulation standards, but homes built before 2010 may have vulnerable pipe runs in garages and exterior walls.",
      "We typically reach Airdrie addresses within 60–75 minutes from our Calgary dispatch. We serve all Airdrie communities including Bayside, Canals, Coopers Crossing, Kings Heights, Sagewood, Windsong, Midtown, and surrounding areas.",
    ],
    localFacts: [
      "Airdrie is one of Canada's fastest-growing cities, with population doubling since 2010",
      "The city uses a mix of Rocky View County and Airdrie municipal water systems",
      "Airdrie's newer developments have stricter insulation requirements than older Calgary homes",
      "The city's proximity to open prairie means more extreme wind chill effects on exterior pipes",
    ],
    externalLinks: [
      { href: "https://www.airdrie.ca/index.cfm?serviceID=1086", label: "City of Airdrie Water Services" },
      { href: "https://www.alberta.ca/plumbing-code", label: "Alberta Plumbing Code" },
    ],
  },
  "chestermere-plumber": {
    headline: "Chestermere Plumber — 24/7 Emergency Plumbing Service",
    bluf: "Emergency plumber serving Chestermere, Alberta — Westmere, Rainbow Falls, Kinniburgh and more. Call (403) 771-5925.",
    intro: "Chestermere is a lakeside city just east of Calgary, known for its waterfront communities and rapid residential growth. Our licensed plumbers serve all of Chestermere with 24/7 emergency response.",
    body: [
      "Chestermere's proximity to Chestermere Lake creates unique plumbing considerations. Lakeside homes often have higher water table levels, making sump pump maintenance critical. The city's rapid growth has also brought a wide range of home ages and plumbing systems.",
      "Communities like Westmere and Lakeview Landing include homes from the 1990s and early 2000s with aging copper plumbing systems. Newer developments like Kinniburgh and East Lakeview use modern PEX systems but are still subject to Calgary's freeze-thaw climate.",
      "We typically reach Chestermere addresses within 60–75 minutes from our Calgary dispatch. We serve all Chestermere communities including Westmere, Lakeview Landing, Rainbow Falls, East Lakeview, Kinniburgh, and surrounding areas.",
    ],
    localFacts: [
      "Chestermere Lake is one of Alberta's largest man-made lakes, affecting local water table levels",
      "Many Chestermere homes have sump pumps due to higher water table near the lake",
      "The city's east-of-Calgary location means slightly colder temperatures than central Calgary",
      "Chestermere uses Rocky View County water infrastructure for most of the city",
    ],
    externalLinks: [
      { href: "https://chestermere.ca/utilities", label: "City of Chestermere Utilities" },
      { href: "https://www.calgary.ca/water/water-emergencies.html", label: "City of Calgary Water Emergencies" },
    ],
  },
};

interface NeighborhoodPageProps {
  slug: string;
}

export default function NeighborhoodPage({ slug }: NeighborhoodPageProps) {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === slug);
  const content = NEIGHBORHOOD_CONTENT[slug];

  if (!neighborhood || !content) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-['Barlow_Condensed'] text-4xl font-bold text-gray-900 mb-4">Area Not Found</h1>
        <Link href="/" className="text-[oklch(0.45_0.22_25)] hover:underline">Return Home</Link>
      </div>
    );
  }

  const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== slug);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.015_250)] py-14 lg:py-18">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-[oklch(0.45_0.22_25)]/20 border border-[oklch(0.45_0.22_25)]/30 text-[oklch(0.75_0.15_25)] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <MapPin size={14} />
                Serving {neighborhood.area}
              </div>
              <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {content.headline}
              </h1>
              <p className="text-gray-200 text-lg font-semibold mb-4">{content.bluf}</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{content.intro}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {neighborhood.communities.map((c) => (
                  <span key={c} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
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
              {content.body.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mt-8 mb-4">
                Local Plumbing Facts for {neighborhood.area}
              </h2>
              <div className="flex flex-col gap-3 mb-8">
                {content.localFacts.map((fact) => (
                  <div key={fact} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-[oklch(0.45_0.22_25)] shrink-0 mt-0.5" />
                    {fact}
                  </div>
                ))}
              </div>

              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-4">
                Emergency Plumbing Services in {neighborhood.area}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:bg-red-50 transition-all text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)]"
                  >
                    <ChevronRight size={13} />
                    {s.shortTitle}
                  </Link>
                ))}
              </div>

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
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">EMERGENCY IN {neighborhood.area.toUpperCase()}?</h3>
                <p className="text-red-100 text-sm mb-4">{BUSINESS.responseTime} · Available 24/7</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-4 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors w-full"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-4">OTHER SERVICE AREAS</h3>
                <div className="flex flex-col gap-2">
                  {otherNeighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/${n.slug}`}
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[oklch(0.45_0.22_25)] font-medium"
                    >
                      <MapPin size={13} />
                      {n.title}
                    </Link>
                  ))}
                  <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[oklch(0.45_0.22_25)] font-medium">
                    <ChevronRight size={13} />
                    All Calgary Areas
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
