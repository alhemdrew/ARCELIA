import { ArrowRight, BriefcaseBusiness, Building2, ClipboardCheck, Home, Landmark, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Property Sales", description: "Helping clients discover and acquire suitable residential and commercial properties.", icon: Home },
  { title: "Property Rentals", description: "Helping clients find suitable rental properties with clarity and efficiency.", icon: Building2 },
  { title: "Property Management", description: "Professional management and support for property owners and tenants.", icon: ClipboardCheck },
  { title: "Land & Property Investment", description: "Helping clients identify opportunities with long-term potential and practical value.", icon: Landmark },
  { title: "Property Inspection", description: "Helping prospective clients arrange property inspections and informed decisions.", icon: ShieldCheck },
  { title: "Real Estate Advisory", description: "Professional guidance throughout the property decision-making process.", icon: BriefcaseBusiness },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Our services</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Property support tailored to your goals.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
            <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-700">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[30px] bg-slate-900 px-6 py-8 text-white sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Ready to begin?</p>
            <h2 className="mt-2 text-3xl font-semibold">Speak with our team about your next property move.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
