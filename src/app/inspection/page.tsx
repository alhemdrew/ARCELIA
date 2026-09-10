"use client";

import { CalendarDays, CheckCircle2, MessageCircle, UserRound } from "lucide-react";
import { waLink } from "@/lib/contact";
import { FormEvent, useState } from "react";

export default function InspectionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Inspection booking</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Schedule a property inspection.</h1>
      </div>

      {!submitted ? (
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-700">
              <CalendarDays className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Property inspection request</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Choose a property, select a convenient time, and our team will confirm the inspection details with you.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">Prefer WhatsApp?</div>
              <div className="mt-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <a href={waLink("")} target="_blank" rel="noreferrer" className="font-medium text-slate-900">Chat with us directly</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="grid gap-5">
              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Property</span>
                <select name="property" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white">
                  <option value="The Crest Residences">The Crest Residences</option>
                  <option value="Maple Court Villas">Maple Court Villas</option>
                  <option value="Aso Ridge Land Plot">Aso Ridge Land Plot</option>
                  <option value="Harbor View Suites">Harbor View Suites</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Name</span>
                <input name="name" type="text" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Your name" />
              </label>

              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Phone number</span>
                <input name="phone" type="tel" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="080********" />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  <span>Preferred date</span>
                  <input name="date" type="date" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  <span>Preferred time</span>
                  <select name="time" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white">
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Optional message</span>
                <textarea name="message" rows={4} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Add any notes for the team" />
              </label>

              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                <UserRound className="h-4 w-4" />
                Submit Request
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-900">Inspection request received.</h2>
          <p className="mt-3 text-base text-slate-700">
            Our team will contact you to confirm the inspection details and next steps.
          </p>
          <a href={waLink("")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" />
            Prefer WhatsApp? Chat with us directly.
          </a>
        </div>
      )}
    </div>
  );
}
