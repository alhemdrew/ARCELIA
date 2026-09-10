"use client";

import Link from "next/link";
import { useState } from "react";
import { Building2, Menu, Phone, MessageCircle, X } from "lucide-react";
import { waLink, telLink, PHONE_LOCAL } from "@/lib/contact";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Arcelia Services home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">ARCELIA</div>
              <div className="text-base font-semibold text-slate-900">Services Nig. Ltd</div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/inspection"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" />
              Book Inspection
            </Link>
            <a
              href={waLink("Hello, I\'d like to enquire about your available properties.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#115e59]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 lg:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-4 space-y-3 rounded-[24px] border border-slate-200 bg-white p-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2">
              <Link href="/inspection" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800">Book Inspection</Link>
              <a href={waLink("Hello, I\'d like to enquire about your available properties.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">WhatsApp</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
