import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import properties from "@/data/properties";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white py-1.5 px-3 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm">
                <Building2 className="h-4 w-4 text-slate-700" />
                Property opportunities
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">Invest today for your tomorrow</h1>

              <p className="mt-6 max-w-xl text-lg text-slate-700">Secure land or a home with verified information and fast WhatsApp responses. We present each opportunity using supplied flyers and videos so you can make an informed next step.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton message="Hello, I’m interested in your property opportunities and would like to enquire." />
                <Link href="/properties" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md">
                  View Available Properties
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-4 text-sm text-slate-500">Payment plans available — ask us on WhatsApp for options.</div>
            </div>

            <div className="order-1 relative -mt-6 lg:order-2">
              <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
                <video className="absolute inset-0 h-full w-full object-cover" src="/ad-vid.mp4" poster="/300sqm-N30m.jpeg" muted loop playsInline autoPlay />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
                <div className="absolute left-6 bottom-6 flex items-center gap-4 rounded-xl bg-white/80 p-3 shadow-sm backdrop-blur-sm">
                  <Image src="/300sqm-N30m.jpeg" alt="sample" width={88} height={60} className="rounded-md object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Secure a 300sqm plot</div>
                    <div className="text-xs text-slate-600">Starting from N30m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Available Property Opportunities</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Current Opportunities</h2>
          </div>
        </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property as any} />
        ))}
      </div>
    </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">About Arcelia</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Property decisions deserve proper guidance.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Arcelia Services Nig. Ltd is a professional property marketer. We present verified opportunities sourced through established developers and realtor networks, and guide you from enquiry to inspection.
            </p>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Speak With Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
            <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Building2 className="h-5 w-5" /></div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">Trusted marketing, clear next steps</div>
                  <div className="text-sm text-slate-500">Each listing is shown with the supplied flyer or video and clear contact actions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
