/**
 * Contact Page — 24 Hour Emergency Plumber Calgary
 */

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[oklch(0.22_0.015_250)] py-14">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-['Barlow_Condensed'] text-4xl lg:text-5xl font-bold text-white mb-4">
              CONTACT US — 24/7 EMERGENCY DISPATCH
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              For emergencies, call us directly. For non-urgent bookings, use the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-gray-900 mb-6">
                GET IN TOUCH
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                <a href={BUSINESS.phoneHref} className="flex items-center gap-4 p-4 bg-[oklch(0.45_0.22_25)] text-white rounded-xl hover:bg-[oklch(0.40_0.22_25)] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{BUSINESS.phone}</div>
                    <div className="text-red-200 text-sm">24/7 Emergency Dispatch</div>
                  </div>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{BUSINESS.email}</div>
                    <div className="text-gray-500 text-sm">Non-urgent inquiries</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Calgary, Alberta, Canada</div>
                    <div className="text-gray-500 text-sm">Serving Calgary, Airdrie, Chestermere</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Open 24 Hours, 7 Days a Week</div>
                    <div className="text-gray-500 text-sm">No overtime charges — same rate day or night</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
