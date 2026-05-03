/**
 * Business constants for 24 Hour Emergency Plumber Calgary
 * Design: Precision Response / Emergency Operations Center
 */

export const BUSINESS = {
  name: "24 Hour Emergency Plumber Calgary",
  shortName: "Emergency Plumber Calgary",
  phone: "(403) 771-5925",
  phoneHref: "tel:+14037715925",
  email: "sunny@24houremergencyplumbercalgary.ca",
  website: "https://www.24houremergencyplumbercalgary.ca",
  address: {
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    postalCode: "T2P 0A1",
  },
  geo: {
    lat: 51.0447,
    lng: -114.0719,
  },
  hours: "Open 24 Hours, 7 Days a Week",
  responseTime: "~45 min avg response",
  priceRange: "$150–$500",
  established: "2015",
  jobsCompleted: "8,500+",
  yearsExperience: "10+",
  rating: "4.9",
  reviewCount: "312",
  googleMapsUrl: "https://maps.google.com/?q=24+Hour+Emergency+Plumber+Calgary",
};

export const SERVICES = [
  {
    slug: "emergency-plumber-calgary",
    title: "Emergency Plumber Calgary",
    shortTitle: "Emergency Plumbing",
    description: "24/7 emergency plumbing response across Calgary. We dispatch within 60 minutes for any plumbing crisis.",
    icon: "AlertTriangle",
  },
  {
    slug: "24-hour-plumber-calgary",
    title: "24 Hour Plumber Calgary",
    shortTitle: "24/7 Plumber",
    description: "Round-the-clock plumbing service. No overtime charges. Same rate day or night.",
    icon: "Clock",
  },
  {
    slug: "burst-pipe-repair-calgary",
    title: "Burst Pipe Repair Calgary",
    shortTitle: "Burst Pipe Repair",
    description: "Immediate response to burst and leaking pipes. We stop the water damage fast.",
    icon: "Droplets",
  },
  {
    slug: "drain-cleaning-calgary",
    title: "Drain Cleaning & Augering Calgary",
    shortTitle: "Drain Cleaning",
    description: "Professional drain cleaning and augering for slow or completely blocked drains.",
    icon: "Waves",
  },
  {
    slug: "water-heater-installation-calgary",
    title: "Water Heater Installation Calgary",
    shortTitle: "Water Heater",
    description: "Traditional and tankless water heater installation, repair, and replacement.",
    icon: "Flame",
  },
  {
    slug: "frozen-pipe-thawing-calgary",
    title: "Frozen Pipe Thawing Calgary",
    shortTitle: "Frozen Pipes",
    description: "Calgary's freeze-thaw cycles are brutal. We safely thaw frozen pipes before they burst.",
    icon: "Snowflake",
  },
  {
    slug: "sump-pump-repair-calgary",
    title: "Sump Pump Repair Calgary",
    shortTitle: "Sump Pump",
    description: "Sump pump repair, replacement, and installation to protect your Calgary basement.",
    icon: "ArrowDownToLine",
  },
  {
    slug: "sewer-line-inspection-calgary",
    title: "Sewer Line Inspection Calgary",
    shortTitle: "Sewer Inspection",
    description: "Camera-based sewer line inspection to diagnose blockages, cracks, and root intrusion.",
    icon: "Search",
  },
];

export const NEIGHBORHOODS = [
  {
    slug: "nw-calgary-plumber",
    title: "NW Calgary Plumber",
    area: "NW Calgary",
    communities: ["Tuscany", "Arbour Lake", "Varsity", "Dalhousie", "Brentwood", "Ranchlands"],
  },
  {
    slug: "se-calgary-plumber",
    title: "SE Calgary Plumber",
    area: "SE Calgary",
    communities: ["Mahogany", "Auburn Bay", "McKenzie Towne", "Cranston", "Copperfield", "Douglasdale"],
  },
  {
    slug: "airdrie-plumber",
    title: "Airdrie Plumber",
    area: "Airdrie",
    communities: ["Bayside", "Canals", "Coopers Crossing", "Kings Heights", "Sagewood", "Windsong"],
  },
  {
    slug: "chestermere-plumber",
    title: "Chestermere Plumber",
    area: "Chestermere",
    communities: ["Westmere", "Lakeview Landing", "Rainbow Falls", "East Lakeview", "Kinniburgh"],
  },
];

export const RESOURCES = [
  {
    slug: "calgary-water-hardness-report",
    title: "2026 Calgary Water Hardness Report: The Impact on Your Pipes",
    category: "Data Report",
    description: "Calgary's water hardness averages 170–220 mg/L — among the hardest in Canada. Here's what that means for your plumbing.",
  },
  {
    slug: "winterize-outdoor-faucets-calgary",
    title: "Calgary Homeowner's Checklist: How to Winterize Your Outdoor Faucets",
    category: "DIY Guide",
    description: "A step-by-step checklist to protect your outdoor faucets before Calgary's first hard freeze.",
  },
  {
    slug: "tankless-vs-traditional-water-heater-alberta",
    title: "Tankless vs. Traditional Water Heaters: A Cost/Benefit Analysis for Alberta Homes",
    category: "Comparison Guide",
    description: "A detailed cost-benefit breakdown for Alberta homeowners choosing between tankless and traditional water heaters.",
  },
  {
    slug: "shut-off-valve-location-calgary-home",
    title: "Anatomy of a Calgary Home: Where Your Shut-Off Valve Is Probably Hiding",
    category: "Visual Guide",
    description: "Find your main water shut-off valve fast. In a Calgary plumbing emergency, every second counts.",
  },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "NW Calgary",
    rating: 5,
    text: "Pipe burst at 11pm on a Sunday. They were at my door in 38 minutes. Stopped the flooding, fixed the pipe, cleaned up. Absolutely incredible service.",
    date: "March 2026",
  },
  {
    name: "James T.",
    location: "SE Calgary",
    rating: 5,
    text: "My basement drain backed up the night before Christmas. These guys showed up within the hour and cleared it completely. Saved our holiday. Worth every penny.",
    date: "December 2025",
  },
  {
    name: "Priya K.",
    location: "Airdrie",
    rating: 5,
    text: "Frozen pipes in January — every plumber I called said they couldn't come until morning. This company arrived at 2am and had everything sorted by 4am. Lifesavers.",
    date: "January 2026",
  },
  {
    name: "Mike D.",
    location: "Chestermere",
    rating: 5,
    text: "Fair pricing, no surprise charges. The technician explained everything before starting. Replaced our water heater same day. Highly recommend.",
    date: "February 2026",
  },
  {
    name: "Linda R.",
    location: "Calgary",
    rating: 5,
    text: "Called at 3am for a burst pipe. Dispatcher was calm and helpful, technician arrived in 42 minutes. Professional, fast, and the price was exactly what they quoted.",
    date: "April 2026",
  },
];
