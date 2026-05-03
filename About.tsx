/**
 * About Page — 24 Hour Emergency Plumber Calgary
 */

import { Link } from "wouter";
import { Phone, Shield, CheckCircle, Award, Clock, ChevronRight } from "lucide-react";
import { BUSINESS, SERVICES, NEIGHBORHOODS } from "@/lib/constants";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663622736872/dnNv5Kv5jmZS4eZEvJQUy6/plumber-team-CfZkyTxg5Z2pkbx7RdEvge.webp";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-14">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              ABOUT 24 HOUR EMERGENCY PLUMBER CALGARY
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Calgary's most trusted 24/7 emergency plumbing service. Licensed, insured, and ready to respond any time — day or night.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 mb-4">
                Calgary's Emergency Plumbing Specialists
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started 24 Hour Emergency Plumber Calgary because we saw a gap in the market: Calgary homeowners facing plumbing emergencies at night or on weekends were either paying enormous overtime charges or waiting until morning — while water damage accumulated.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our solution was simple: build a team of licensed Calgary plumbers who work around the clock at flat rates. No overtime charges. No holiday surcharges. The same professional service at 3am as at 3pm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over {BUSINESS.yearsExperience} years and {BUSINESS.jobsCompleted} jobs later, we're proud to be Calgary's most reviewed emergency plumbing service, with a {BUSINESS.rating}-star rating across {BUSINESS.reviewCount} verified Google reviews.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: CheckCircle, text: "Backflow Certified" },
                  { icon: Award, text: "BBB Accredited" },
                  { icon: Clock, text: "24/7 Availability" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Icon size={16} className="text-[oklch(0.45_0.22_25)]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={TEAM_IMG}
                alt="24 Hour Emergency Plumber Calgary team"
                className="rounded-xl shadow-xl w-full object-cover"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>

          {/* Service list */}
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:bg-red-50 transition-all text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)]">
                <ChevronRight size={13} />
                {s.shortTitle}
              </Link>
            ))}
          </div>

          {/* Service areas */}
          <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {NEIGHBORHOODS.map((n) => (
              <Link key={n.slug} href={`/${n.slug}`} className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-[oklch(0.45_0.22_25)] hover:bg-red-50 transition-all text-sm font-semibold text-gray-700 hover:text-[oklch(0.45_0.22_25)]">
                <ChevronRight size={13} />
                {n.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[oklch(0.45_0.22_25)] rounded-xl p-8 text-center">
            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-3">READY TO HELP 24/7</h2>
            <p className="text-red-100 mb-6">Call us any time — our dispatchers are always standing by.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 bg-white text-[oklch(0.45_0.22_25)] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors">
              <Phone size={20} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
