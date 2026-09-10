import { BadgeCheck, CalendarCheck, CheckSquare, MessageCircle } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Verified Properties", desc: "Property information reviewed before presentation." },
  { icon: CheckSquare, title: "Flexible Payment Plans", desc: "Ask about available payment options." },
  { icon: CalendarCheck, title: "Inspection Support", desc: "Get assistance arranging property inspections." },
  { icon: MessageCircle, title: "Direct WhatsApp Support", desc: "Speak directly with our team for fast responses." },
];

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[18px] border border-slate-100 bg-white p-4 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="flex items-start gap-4 p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{it.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
