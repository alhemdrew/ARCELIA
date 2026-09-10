export type PropertyImage = { src: string; alt?: string };

export type Property = {
  id: string;
  title: string;
  slug: string;
  location?: string;
  city?: string;
  size?: string;
  area?: string;
  price?: number;
  currency?: string;
  priceText?: string;
  initialDeposit?: string;
  paymentPlan?: string;
  developer?: string;
  approvals?: string[];
  images?: PropertyImage[];
  video?: string | null;
  status?: string;
  purpose?: string;
  verified?: boolean;
  shortDescription?: string;
  type?: string;
  bedrooms?: number;
  bathrooms?: number;
  landSize?: string;
  description?: string;
  features?: string[];
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "cityview-500sqm-n30m",
    title: "CityView Park & Resort — 500SQM",
    slug: "cityview-500sqm-n30m",
    location: "Plot 93, Gousa District, by Idu Train Station / Airport Road, Abuja",
    size: "500SQM",
    priceText: "N30,000,000",
    initialDeposit: "N1,500,000",
    paymentPlan: "Outright N30M / 6 months N31M / 12 months N32M / 18 months N33M",
    developer: "LCR",
    approvals: ["FCDA Approved"],
    images: [
      { src: "/300sqm-N30m.jpeg", alt: "CityView 300sqm sample" },
      { src: "/500sqm--30m.jpeg", alt: "CityView 500sqm sample" },
    ],
    status: "Available",
    type: "Land",
    description: "Verified 500sqm plots at CityView Park & Resort.",
    features: ["Title documents available", "Easy access to road"],
    area: "500SQM",
  },
  {
    id: "cityview-1000sqm-n60m",
    title: "CityView Park & Resort — 1000SQM",
    slug: "cityview-1000sqm-n60m",
    location: "Plot 93, Gousa District, Abuja",
    size: "1000SQM",
    priceText: "N60,000,000",
    developer: "LCR",
    images: [
      { src: "/1000sqm--n60m.jpeg", alt: "CityView 1000sqm" },
      { src: "/1000sqm-N60m.jpeg", alt: "CityView 1000sqm alt" },
    ],
    status: "Available",
    type: "Land",
    description: "Spacious 1000sqm plots with investment potential.",
    features: ["Near transport", "Developer payment plans"],
    area: "1000SQM",
  },
  {
    id: "cityview-1000sqm-n100m",
    title: "CityView Park & Resort — 1000SQM (Commercial option)",
    slug: "cityview-1000sqm-n100m",
    location: "Plot 93, Gousa District, Abuja",
    size: "1000SQM",
    priceText: "N100,000,000",
    initialDeposit: "N5,000,000",
    paymentPlan: "Outright N100M / 6 months N102M / 12 months N104M / 18 months N106M",
    developer: "LCR",
    images: [{ src: "/1000sqm-N100m.jpeg", alt: "CityView 1000sqm commercial" }],
    status: "Available",
    type: "Commercial",
    description: "Commercial 1000sqm option in CityView Park & Resort.",
    features: ["Prime commercial location"],
    area: "1000SQM",
  },
  {
    id: "cityview-200sqm-n12m",
    title: "CityView Park & Resort — 200SQM",
    slug: "cityview-200sqm-n12m",
    size: "200SQM",
    priceText: "N12,000,000",
    initialDeposit: "N750,000",
    paymentPlan: "Outright N12M / 6 months N12.5M / 12 months N13M / 18 months N13.5M",
    developer: "LCR",
    images: [
      { src: "/200sqm-N12m.jpeg", alt: "CityView 200sqm" },
      { src: "/200qm-N12m.jpeg", alt: "CityView 200sqm alt" },
    ],
    status: "Available",
    type: "Land",
    description: "200sqm plots suitable for residential development.",
    features: ["Affordable entry", "Close to amenities"],
    area: "200SQM",
  },
  {
    id: "cityview-300sqm-n18m",
    title: "CityView Park & Resort — 300SQM",
    slug: "cityview-300sqm-n18m",
    size: "300SQM",
    priceText: "N18,000,000",
    initialDeposit: "N1,000,000",
    paymentPlan: "Outright N18M / 6 months N19M / 12 months N20M / 18 months N21M",
    developer: "LCR",
    images: [
      { src: "/300sqm-N18m.jpeg", alt: "CityView 300sqm" },
      { src: "/300sqm--n18m.jpeg", alt: "CityView 300sqm alt" },
    ],
    status: "Available",
    type: "Land",
    description: "300sqm plots in an accessible location.",
    features: ["Clear access roads", "Developer support"],
    area: "300SQM",
  }
]

export default properties

export const propertyTypes = ["Apartment", "House", "Land", "Commercial", "Duplex"] as const;
export const propertyPurposes = ["Buy", "Rent", "Land", "Commercial"] as const;
export const locations = ["Lagos", "Abuja", "Ikoyi", "Lekki", "Gwarinpa", "Victoria Island"] as const;

export const featuredProperties = properties.filter((property) => (property as any).featured || false);
