import Link from "next/link";
import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink, telLink, PHONE_LOCAL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">ARCELIA SERVICES</div>
              <div className="text-lg font-semibold text-white">Nig. Ltd</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Professional property marketing and guidance — connecting buyers with verified opportunities and experts who help make informed decisions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Categories</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/properties?type=Apartment" className="hover:text-white">Apartments</Link></li>
            <li><Link href="/properties?type=House" className="hover:text-white">Houses</Link></li>
            <li><Link href="/properties?type=Land" className="hover:text-white">Land</Link></li>
            <li><Link href="/properties?type=Commercial" className="hover:text-white">Commercial</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> <a href={telLink()} className="hover:text-white">{PHONE_LOCAL}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-emerald-400" /> <a href={waLink("")} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> <span>Areas served: Lagos & Abuja</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Arcelia Services Nig. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
