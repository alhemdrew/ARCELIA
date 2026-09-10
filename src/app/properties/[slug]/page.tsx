import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, CalendarDays, Check, MapPin, MessageCircle, MoveRight, Ruler, ShieldCheck, Square, Star } from "lucide-react";
import { waLink } from "@/lib/contact";
import { properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <PropertyDetailClient params={params} />;
}

async function PropertyDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  const formattedPrice = (() => {
    try {
      if (property?.price && property?.currency) {
        return new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: property.currency,
          maximumFractionDigits: 0,
        }).format(property.price as number);
      }
    } catch (e) {
      // fall back
    }
    return (property?.priceText as any) || "Price on request";
  })();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Property details</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">{property.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700">{property.status}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">{property.type}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <div className="relative h-[480px]">
              <Image src={property.images[0].src} alt={property.images[0].alt} fill className="object-cover" priority />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {property.images.slice(0, 3).map((image) => (
              <div key={image.src} className="relative h-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Property Information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Price</div>
                <div className="mt-2 text-xl font-semibold text-slate-900">{formattedPrice}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{property.location}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Type</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{property.type}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Status</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{property.status}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {property.bedrooms > 0 && (
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  <BedDouble className="h-4 w-4" />
                  {property.bedrooms} Bedrooms
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  <Bath className="h-4 w-4" />
                  {property.bathrooms} Bathrooms
                </div>
              )}
              {property.landSize && (
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  <Ruler className="h-4 w-4" />
                  {property.landSize}
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Description</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{property.description}</p>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Key Features</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Location</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <div className="h-64 w-full bg-[radial-gradient(circle_at_center,_#dbeafe_0%,_#bfdbfe_30%,_#93c5fd_60%,_#e0f2fe_100%)]" />
            </div>
            <p className="mt-4 text-base text-slate-600">{property.location}</p>
          </div>
        </div>

        <aside className="lg:pt-2">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold text-slate-900">Interested in this property?</h2>
            <div className="mt-6 space-y-3">
              <a href={waLink(`Hello, I’m interested in ${property.title}. Please can you provide more information?`)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link href={`/inspection?property=${encodeURIComponent(property.title)}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                <CalendarDays className="h-4 w-4" />
                Schedule an Inspection
              </Link>
              <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Make an Enquiry
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Trusted support</div>
                  <div className="text-sm text-slate-600">Straightforward guidance throughout the process</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-600" /> {property.location}</div>
              <div className="flex items-center gap-3"><Star className="h-4 w-4 text-amber-500" /> {property.status} now</div>
              <div className="flex items-center gap-3"><Square className="h-4 w-4 text-slate-500" /> {property.area}</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
