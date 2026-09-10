"use client";

import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { waLink, telLink, PHONE_LOCAL } from "@/lib/contact";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const enquiry = formData.get("enquiry");

    if (!name || !phone || !enquiry) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Speak with our team.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-slate-500">Phone</div>
                <a href={telLink()} className="text-lg font-semibold text-slate-900">{PHONE_LOCAL}</a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-slate-500">WhatsApp</div>
                <a href={waLink("")} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900">{PHONE_LOCAL}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Name</span>
                <input name="name" type="text" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-700">
                <span>Phone / email</span>
                <input name="phone" type="text" required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Your phone or email" />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-slate-700">
              <span>Property of interest</span>
              <input name="interest" type="text" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Property name or location" />
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-700">
              <span>Preferred contact method</span>
              <select name="contactMethod" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white">
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-700">
              <span>Enquiry</span>
              <textarea name="enquiry" required rows={5} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white" placeholder="Tell us what you are looking for" />
            </label>

            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              <Send className="h-4 w-4" />
              Send Enquiry
            </button>

            {status === "success" && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Your enquiry has been submitted. Our team will be in touch shortly.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Please complete the required fields before submitting your enquiry.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
