/**
 * BookingForm Component
 * Secondary CTA: "Book a Technician" form
 * Dispatched within 60 minutes promise
 */

import { useState } from "react";
import { Phone, CheckCircle, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
    urgency: "emergency",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-gray-900 mb-2">
          REQUEST RECEIVED
        </h3>
        <p className="text-gray-600 mb-4">
          A dispatcher will call you within <strong>5 minutes</strong> to confirm your technician's ETA.
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 bg-[oklch(0.45_0.22_25)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[oklch(0.40_0.22_25)] transition-colors"
        >
          <Phone size={16} />
          Call Now Instead: {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <div id="book" className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-[oklch(0.22_0.015_250)] px-6 py-4">
        <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-white">
          BOOK A TECHNICIAN
        </h3>
        <p className="text-gray-300 text-sm mt-0.5">Dispatched within 60 minutes</p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.22_25)] focus:border-transparent min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(403) 555-0123"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.22_25)] focus:border-transparent min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Calgary Address *
          </label>
          <input
            type="text"
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="123 Main St SW, Calgary"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.22_25)] focus:border-transparent min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Describe the Issue *
          </label>
          <select
            required
            value={form.issue}
            onChange={(e) => setForm({ ...form, issue: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.22_25)] focus:border-transparent min-h-[44px] bg-white"
          >
            <option value="">Select issue type...</option>
            <option value="burst-pipe">Burst / Leaking Pipe</option>
            <option value="frozen-pipe">Frozen Pipe</option>
            <option value="drain-blocked">Blocked Drain</option>
            <option value="no-hot-water">No Hot Water</option>
            <option value="sump-pump">Sump Pump Failure</option>
            <option value="sewer">Sewer Backup</option>
            <option value="other">Other Emergency</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[oklch(0.45_0.22_25)] text-white py-3.5 rounded-lg font-bold text-base hover:bg-[oklch(0.40_0.22_25)] transition-colors disabled:opacity-70 min-h-[52px]"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            "DISPATCH A TECHNICIAN"
          )}
        </button>
        <p className="text-xs text-gray-500 text-center">
          Or call directly:{" "}
          <a href={BUSINESS.phoneHref} className="font-bold text-[oklch(0.45_0.22_25)] hover:underline">
            {BUSINESS.phone}
          </a>
        </p>
      </form>
    </div>
  );
}
