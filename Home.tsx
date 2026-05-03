/**
 * Home Page — 24 Hour Emergency Plumber Calgary
 * Design: Precision Response / Emergency Operations Center
 * - Asymmetric hero: 60% content left, 40% booking form right
 * - Blueprint grid texture on hero
 * - Data-forward stats, trust signals, reviews
 * - Full SEO content with internal + external links
 */

import { Link } from "wouter";
import {
  Phone, Clock, Shield, CheckCircle, Star, Award,
  AlertTriangle, Droplets, Flame, Snowflake, Waves,
  ArrowDownToLine, Search, ChevronRight, MapPin
} from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS, REVIEWS } from "@/lib/constants";
import BookingForm from "@/components/BookingForm";
import SEO, { buildLocalBusinessSchema, buildFAQSchema } from "@/components/SEO";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/hero-plumber-QstJQSmPrjGCkYhLV4SHCw.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/plumber-team-CfZkyTxg5Z2pkbx7RdEvge.webp";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Clock, Droplets, Waves, Flame, Snowflake, ArrowDownToLine, Search,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const schemas = [
    buildLocalBusinessSchema(),
    buildFAQSchema([
      { question: "How fast can an emergency plumber reach me in Calgary?", answer: "Our average response time across Calgary is approximately 45 minutes. We dispatch the nearest available licensed plumber to your location immediately after your call." },
      { question: "Do you charge extra for after-hours or weekend plumbing calls in Calgary?", answer: "No. We charge the same flat rate 24 hours a day, 7 days a week. No overtime charges, no holiday surcharges." },
      { question: "Are your plumbers licensed in Alberta?", answer: "Yes. All our technicians are licensed by the Alberta Safety Codes Council and carry full liability insurance." },
      { question: "What areas of Calgary do you serve?", answer: "We serve all of Calgary, Alberta, including NW, NE, SW, and SE quadrants, as well as Airdrie and Chestermere." },
      { question: "What counts as a plumbing emergency in Calgary?", answer: "Any situation where water is actively damaging your home or could within hours: burst pipes, sewer backups, no hot water in winter, basement flooding, sump pump failure, or frozen pipes." },
    ]),
  ];

  return (
    <main>
      <SEO
        title="24 Hour Emergency Plumber Calgary | (403) 771-5925 | 60-Min Response"
        description="Calgary's fastest 24/7 emergency plumber. Licensed, insured, no overtime charges. Burst pipes, drain cleaning, water heaters, frozen pipes. Call (403) 771-5925."
        canonical="/"
        schemas={schemas}
      />
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[85vh] flex items-center blueprint-bg"
        aria-label="Hero section"
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          role="img"
          aria-label="Emergency plumber fixing burst pipe in Calgary home at night"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.02_250)/0.92] via-[oklch(0.10_0.02_250)/0.80] to-[oklch(0.10_0.02_250)/0.40]" />

        <div className="container relative z-10 py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: Content (3/5) */}
            <div className="lg:col-span-3">
              {/* Status indicator */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="status-dot w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
                <span className="text-green-300 font-semibold text-sm">DISPATCH AVAILABLE NOW</span>
                <span className="text-gray-300 text-sm">· {BUSINESS.responseTime}</span>
              </div>

              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-4">
                CALGARY'S<br />
                <span className="text-[oklch(0.65_0.22_25)]">24/7 EMERGENCY</span><br />
                PLUMBER
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6 max-w-xl">
                Burst pipe at 2am? Frozen pipes in January? Basement flooding? <strong className="text-white">We dispatch within 60 minutes</strong> — any time, any day. No overtime charges.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-3 bg-[oklch(0.45_0.22_25)] text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-[oklch(0.40_0.22_25)] transition-colors pulse-emergency min-h-[60px]"
                  aria-label={`Emergency dispatch: call ${BUSINESS.phone}`}
                >
                  <Phone size={22} />
                  EMERGENCY DISPATCH: {BUSINESS.phone}
                </a>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-lg font-semibold text-base hover:bg-white/25 transition-colors min-h-[60px]"
                >
                  Book a Technician
                  <ChevronRight size={18} />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: CheckCircle, text: "Backflow Certified" },
                  { icon: Award, text: "BBB Accredited" },
                  { icon: Star, text: `${BUSINESS.rating}★ (${BUSINESS.reviewCount} reviews)` },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Icon size={12} />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Booking form (2/5) */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[oklch(0.22_0.015_250)] py-6" aria-label="Key statistics">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: BUSINESS.responseTime, label: "Avg Response Time" },
              { value: BUSINESS.jobsCompleted, label: "Jobs Completed" },
              { value: BUSINESS.yearsExperience, label: "Years in Calgary" },
              { value: `${BUSINESS.rating}★`, label: `${BUSINESS.reviewCount} Google Reviews` },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-['Barlow_Condensed'] text-3xl lg:text-4xl font-bold text-white">{value}</div>
                <div className="text-gray-400 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 lg:py-24 bg-white" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-[oklch(0.45_0.22_25)] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Fix
            </div>
            <h2 id="services-heading" className="section-heading font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.015_250)] mb-4">
              EMERGENCY PLUMBING SERVICES IN CALGARY
            </h2>
            <p className="text-gray-600 text-lg">
              From burst pipes to blocked drains, our licensed Calgary plumbers handle every plumbing emergency — 24 hours a day, 365 days a year. Calgary's freeze-thaw cycles create unique plumbing challenges, and we know them all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || AlertTriangle;
              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group block p-6 rounded-xl border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:shadow-lg transition-all duration-200 bg-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.45_0.22_25)] transition-colors">
                    <Icon size={22} className="text-[oklch(0.45_0.22_25)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-gray-900 mb-2 group-hover:text-[oklch(0.45_0.22_25)] transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-[oklch(0.45_0.22_25)] text-sm font-semibold">
                    Learn more <ChevronRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/emergency-plumbing-calgary"
              className="inline-flex items-center gap-2 bg-[oklch(0.22_0.015_250)] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[oklch(0.15_0.015_250)] transition-colors"
            >
              View All Emergency Services
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-[oklch(0.45_0.22_25)] font-semibold text-sm uppercase tracking-widest mb-3">
                Why Calgary Trusts Us
              </div>
              <h2 id="why-heading" className="section-heading font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.015_250)] mb-6">
                CALGARY'S MOST RELIABLE 24/7 PLUMBER
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We know a broken pipe is stressful. Here's what to do right now: turn off your main water shut-off valve, then call us. We'll have a licensed technician at your door in under an hour — guaranteed.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Clock,
                    title: "60-Minute Dispatch",
                    desc: "We guarantee a technician at your door within 60 minutes of your call — any time, any day.",
                  },
                  {
                    icon: Shield,
                    title: "No Overtime Charges",
                    desc: "Same flat rate at 2am as at 2pm. No surprise fees. Transparent pricing before we start.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Licensed & Insured",
                    desc: "All technicians are Alberta-licensed master plumbers with full liability insurance.",
                  },
                  {
                    icon: Award,
                    title: "Calgary Specialists",
                    desc: "We understand Calgary's unique freeze-thaw cycles and hard water challenges.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.45_0.22_25)] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={TEAM_IMG}
                alt="24 Hour Emergency Plumber Calgary team — licensed plumbers ready to respond"
                className="rounded-xl shadow-xl w-full object-cover"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Verified Calgary Business</div>
                    <div className="text-gray-500 text-xs">BBB Accredited · Google Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[oklch(0.45_0.22_25)] font-semibold text-sm uppercase tracking-widest mb-3">
              What Calgarians Say
            </div>
            <h2 id="reviews-heading" className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.015_250)] mb-4">
              VERIFIED CALGARY REVIEWS
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-bold text-gray-900 text-lg">{BUSINESS.rating}</span>
              <span className="text-gray-500">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <StarRating rating={review.rating} />
                <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin size={10} />
                      {review.location}
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-16 lg:py-20 bg-gray-50" aria-labelledby="areas-heading">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div className="text-[oklch(0.45_0.22_25)] font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Serve
            </div>
            <h2 id="areas-heading" className="section-heading font-['Barlow_Condensed'] text-4xl font-bold text-[oklch(0.15_0.015_250)] mb-4">
              EMERGENCY PLUMBING ACROSS CALGARY & AREA
            </h2>
            <p className="text-gray-600">
              We cover all of Calgary, Alberta and surrounding communities. Our technicians are strategically positioned across the city for the fastest possible response times.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={`/${n.slug}`}
                className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[oklch(0.45_0.22_25)]" />
                  <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 group-hover:text-[oklch(0.45_0.22_25)] transition-colors">
                    {n.area}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {n.communities.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                  {n.communities.length > 3 && (
                    <span className="text-xs text-gray-400">+{n.communities.length - 3} more</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY GUIDE ===== */}
      <section className="py-16 lg:py-20 bg-[oklch(0.22_0.015_250)]" aria-labelledby="guide-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[oklch(0.65_0.18_220)] font-semibold text-sm uppercase tracking-widest mb-3">
                Act Fast
              </div>
              <h2 id="guide-heading" className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-6">
                WHAT TO DO IN A CALGARY PLUMBING EMERGENCY
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The first 5 minutes matter. Here's exactly what to do while you wait for our technician:
              </p>
              <ol className="flex flex-col gap-4">
                {[
                  {
                    step: "1",
                    title: "Shut Off Your Main Water Valve",
                    desc: "In most Calgary homes, it's in the basement utility room near the front foundation wall. Turn it clockwise to close.",
                  },
                  {
                    step: "2",
                    title: "Call Us Immediately",
                    desc: `Call ${BUSINESS.phone} — our dispatcher will guide you through next steps while your technician is en route.`,
                  },
                  {
                    step: "3",
                    title: "Minimize Water Damage",
                    desc: "Place towels or buckets to catch dripping water. Move valuables away from the affected area.",
                  },
                  {
                    step: "4",
                    title: "Turn Off Your Water Heater",
                    desc: "If you've shut off the main supply, turn off your water heater to prevent it from running dry and burning out.",
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[oklch(0.45_0.22_25)] flex items-center justify-center shrink-0 font-['Barlow_Condensed'] font-bold text-white text-lg">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{title}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link
                  href="/shut-off-valve-location-calgary-home"
                  className="inline-flex items-center gap-2 text-[oklch(0.65_0.18_220)] font-semibold hover:underline"
                >
                  Where is my shut-off valve? (Full guide)
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-6">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  {
                    q: "How fast can you get to my Calgary home?",
                    a: "Our average response time is 45 minutes across Calgary. We have technicians stationed in NW, NE, SW, and SE Calgary to minimize travel time.",
                  },
                  {
                    q: "Do you charge extra for nights and weekends?",
                    a: "No. We charge the same flat rate 24 hours a day, 7 days a week. No overtime fees, no holiday surcharges.",
                  },
                  {
                    q: "Are your plumbers licensed in Alberta?",
                    a: "Yes. All our technicians hold Alberta journeyman plumber licenses and are fully insured. We're registered with the City of Calgary.",
                  },
                  {
                    q: "Do you serve Airdrie and Chestermere?",
                    a: "Yes. We serve Calgary, Airdrie, Chestermere, and surrounding communities within the Calgary Metropolitan Region.",
                  },
                  {
                    q: "Why do pipes freeze in Calgary?",
                    a: "Calgary's chinook cycles cause rapid temperature swings — from -30°C to above zero in hours. Pipes in exterior walls and unheated crawl spaces are most vulnerable. Learn more in our frozen pipe guide.",
                  },
                ].map(({ q, a }, i) => (
                  <details key={i} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-white font-semibold text-sm list-none">
                      {q}
                      <ChevronRight size={16} className="shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="resources-heading">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div className="text-[oklch(0.45_0.22_25)] font-semibold text-sm uppercase tracking-widest mb-3">
              Calgary Plumbing Knowledge Base
            </div>
            <h2 id="resources-heading" className="section-heading font-['Barlow_Condensed'] text-4xl font-bold text-[oklch(0.15_0.015_250)] mb-4">
              FREE GUIDES FOR CALGARY HOMEOWNERS
            </h2>
            <p className="text-gray-600">
              Calgary's unique climate — hard water, freeze-thaw cycles, and cold winters — creates specific plumbing challenges. These guides help you understand and prevent them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                slug: "calgary-water-hardness-report",
                category: "Data Report",
                title: "2026 Calgary Water Hardness Report",
                desc: "Calgary's water hardness averages 170–220 mg/L. Here's what that means for your pipes and appliances.",
                color: "bg-blue-50 text-blue-700",
              },
              {
                slug: "winterize-outdoor-faucets-calgary",
                category: "DIY Checklist",
                title: "Winterize Your Outdoor Faucets",
                desc: "Step-by-step checklist to protect your outdoor plumbing before Calgary's first hard freeze.",
                color: "bg-orange-50 text-orange-700",
              },
              {
                slug: "tankless-vs-traditional-water-heater-alberta",
                category: "Comparison Guide",
                title: "Tankless vs. Traditional Water Heaters",
                desc: "A detailed cost-benefit analysis for Alberta homeowners. Which is right for your home?",
                color: "bg-green-50 text-green-700",
              },
              {
                slug: "shut-off-valve-location-calgary-home",
                category: "Visual Guide",
                title: "Find Your Shut-Off Valve Fast",
                desc: "In a Calgary plumbing emergency, every second counts. Know where your valve is before you need it.",
                color: "bg-red-50 text-red-700",
              },
            ].map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group block p-5 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all bg-white"
              >
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${r.color}`}>
                  {r.category}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-gray-900 mb-2 group-hover:text-[oklch(0.45_0.22_25)] transition-colors leading-tight">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-[oklch(0.45_0.22_25)] text-sm font-semibold">
                  Read guide <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 bg-[oklch(0.45_0.22_25)]" aria-label="Final call to action">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
            PLUMBING EMERGENCY IN CALGARY?
          </h2>
          <p className="text-red-100 text-xl mb-8 max-w-xl mx-auto">
            Don't wait. Every minute counts when water is damaging your home. Call now — we'll have a technician at your door fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-white text-[oklch(0.45_0.22_25)] px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition-colors min-h-[60px]"
            >
              <Phone size={22} />
              {BUSINESS.phone}
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors min-h-[60px]"
            >
              Book Online
            </a>
          </div>
          <p className="text-red-200 text-sm mt-6">
            Serving Calgary, Airdrie, Chestermere, and surrounding communities in Alberta
          </p>
        </div>
      </section>
    </main>
  );
}
