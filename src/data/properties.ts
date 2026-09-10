export type Property = {
  id: string
  title: string
  slug: string
  location?: string
  size?: string
  priceText?: string
  initialDeposit?: string
  paymentPlan?: string
  developer?: string
  approvals?: string[]
  images?: string[]
  video?: string | null
}

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
    images: ["/300sqm-N30m.jpeg", "/500sqm--30m.jpeg"]
  },
  {
    id: "cityview-1000sqm-n60m",
    title: "CityView Park & Resort — 1000SQM",
    slug: "cityview-1000sqm-n60m",
    location: "Plot 93, Gousa District, Abuja",
    size: "1000SQM",
    priceText: "N60,000,000",
    developer: "LCR",
    images: ["/1000sqm--n60m.jpeg", "/1000sqm-N60m.jpeg"]
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
    images: ["/1000sqm-N100m.jpeg"]
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
    images: ["/200sqm-N12m.jpeg", "/200qm-N12m.jpeg"]
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
    images: ["/300sqm-N18m.jpeg", "/300sqm--n18m.jpeg"]
  }
]

export default properties

export const propertyTypes = ["Apartment", "House", "Land", "Commercial", "Duplex"] as const;
export const propertyPurposes = ["Buy", "Rent", "Land", "Commercial"] as const;
export const locations = ["Lagos", "Abuja", "Ikoyi", "Lekki", "Gwarinpa", "Victoria Island"] as const;

export const featuredProperties = properties.filter((property) => (property as any).featured || false);
