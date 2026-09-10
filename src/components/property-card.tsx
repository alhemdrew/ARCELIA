import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, MessageCircle, Square, Check } from "lucide-react";
import { waLink, PHONE_LOCAL } from "@/lib/contact";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  const whatsappMessage = `Hello, I’m interested in ${property.title}. Please I’d like to know more about its price, location and availability.`;

  // image handling: properties from assets use string[]; older shape may use {src,alt}[]
  const firstImage = property.images && property.images.length > 0 ? property.images[0] : null;
  const imageSrc = firstImage ? (typeof firstImage === "string" ? firstImage : (firstImage as any).src) : "/300sqm-N30m.jpeg";
  const imageAlt = firstImage ? (typeof firstImage === "string" ? property.title : (firstImage as any).alt || property.title) : property.title;

  // price handling: prefer numeric price+currency, else use priceText
  const formattedPrice = (() => {
    try {
      if ((property as any).price && (property as any).currency) {
        return new Intl.NumberFormat("en-NG", { style: "currency", currency: (property as any).currency, maximumFractionDigits: 0 }).format((property as any).price);
      }
    } catch (e) {
      // ignore and fall back
    }
    if (property.priceText) return property.priceText;
    return "Price on request";
  })();

  return (
    <article className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.10)]">
      <div className="relative h-72 overflow-hidden rounded-t-[20px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-3 flex items-center justify-between px-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">{property.type}</span>
          {property.verified && (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/95 px-3 py-1 text-xs font-semibold text-white">
              <Check className="h-3 w-3" /> Verified
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
            <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-slate-900">{formattedPrice}</div>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{property.purpose || "Available"}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-y border-slate-100 py-3 text-sm text-slate-600">
          {(property as any).bedrooms > 0 && (
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4" />
              <span>{(property as any).bedrooms} Beds</span>
            </div>
          )}
          {(property as any).bathrooms > 0 && (
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4" />
              <span>{(property as any).bathrooms} Baths</span>
            </div>
          )}
          {property.landSize && (
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4" />
              <span>{property.landSize}</span>
            </div>
          )}
        </div>

        <p className="text-sm leading-6 text-slate-600">{(property as any).shortDescription || property.size || property.paymentPlan || "Details available on enquiry."}</p>

        <div className="flex gap-3 pt-2">
          <Link href={`/properties/${property.slug}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
            View Property
          </Link>
          <a
            href={waLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
