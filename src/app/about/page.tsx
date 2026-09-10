import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";

const values = [
  "Clear and honest communication at every stage",
  "Properties selected for genuine value and fit",
  "A client-first experience built around practical decisions",
  "Support from initial enquiry to final property follow-up",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About Arcelia Services</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">A dependable real estate partner in Nigeria.</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Arcelia Services Nig. Ltd is a property advisory business focused on helping people navigate property purchases, rental decisions, and investment opportunities with clarity and confidence. We work with buyers, renters, and investors who want a straightforward, practical approach to finding the right space.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our work is built around understanding each client’s goals, helping them compare options carefully, and making the process feel clear rather than overwhelming. That means honest guidance, proper communication, and a strong emphasis on value.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-full bg-emerald-100 p-2 text-emerald-700"><Users className="h-5 w-5" /></div>
              <div className="text-lg font-semibold text-slate-900">Client-focused</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Every decision is shaped around your needs, timeline and budget.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-full bg-emerald-100 p-2 text-emerald-700"><ShieldCheck className="h-5 w-5" /></div>
              <div className="text-lg font-semibold text-slate-900">Trust-first</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Clear communication and practical guidance from enquiry to follow-up.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What makes our service different</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <div key={value} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
              <p className="text-base text-slate-700">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[30px] bg-slate-900 px-6 py-8 text-white sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Speak with our team</p>
            <h2 className="mt-2 text-3xl font-semibold">Need guidance on your next move?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
            Speak With Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
