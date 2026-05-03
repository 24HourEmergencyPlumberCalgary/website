/**
 * SEO Component — Injects JSON-LD structured data and meta tags
 * Uses document.head manipulation for SPA compatibility
 * Design: Precision Response
 */

import { useEffect } from "react";
import { BUSINESS } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  /** JSON-LD schema objects to inject */
  schemas?: object[];
  /** Open Graph image URL */
  ogImage?: string;
}

const SITE_URL = "https://www.24houremergencyplumbercalgary.ca";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(schemas: object[]) {
  // Remove existing JSON-LD scripts injected by this component
  document.querySelectorAll('script[data-seo="true"]').forEach((el) => el.remove());

  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export default function SEO({ title, description, canonical, schemas = [], ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("robots", "index, follow");
    setLink("canonical", `${SITE_URL}${canonical}`);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", `${SITE_URL}${canonical}`, true);
    setMeta("og:type", "website", true);
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, true);
    setMeta("og:site_name", BUSINESS.name, true);
    setMeta("og:locale", "en_CA", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Geo tags
    setMeta("geo.region", "CA-AB");
    setMeta("geo.placename", "Calgary");
    setMeta("geo.position", `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`);
    setMeta("ICBM", `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`);

    // JSON-LD
    setJsonLd(schemas);
  }, [title, description, canonical, schemas, ogImage]);

  return null;
}

// ─── Pre-built schema factories ──────────────────────────────────────────────

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: ["24 Hour Plumber Calgary", "Emergency Plumber Calgary"],
    description: "24/7 emergency plumbing services in Calgary, Alberta. Licensed, insured, no overtime charges.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
      postalCode: "T2P",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Calgary", sameAs: "https://www.wikidata.org/wiki/Q36312" },
      { "@type": "City", name: "Airdrie", sameAs: "https://www.wikidata.org/wiki/Q1022" },
      { "@type": "City", name: "Chestermere", sameAs: "https://www.wikidata.org/wiki/Q1070428" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Emergency Plumbing Services",
      itemListElement: [
        "Emergency Plumbing",
        "24 Hour Plumbing",
        "Burst Pipe Repair",
        "Drain Cleaning",
        "Water Heater Installation",
        "Frozen Pipe Thawing",
        "Sump Pump Repair",
        "Sewer Line Inspection",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    sameAs: [
      BUSINESS.googleMapsUrl,
      "https://www.bbb.org/ca/ab/calgary",
    ],
  };
}

export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Plumber",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Calgary",
      sameAs: "https://www.wikidata.org/wiki/Q36312",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${url}`,
    })),
  };
}
