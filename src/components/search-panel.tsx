"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { propertyPurposes, propertyTypes } from "@/data/properties";

const priceOptions = [
  { label: "Any Price", value: "" },
  { label: "Under ₦20M", value: "0-20" },
  { label: "₦20M - ₦50M", value: "20-50" },
  { label: "₦50M - ₦100M", value: "50-100" },
  { label: "₦100M+", value: "100-999999" },
];

export function SearchPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    const type = formData.get("type");
    const location = formData.get("location");
    const purpose = formData.get("purpose");
    const budget = formData.get("budget");
    const bedroom = formData.get("bedroom");

    if (type) params.set("type", String(type));
    if (location) params.set("location", String(location));
    if (purpose) params.set("purpose", String(purpose));
    if (budget) params.set("budget", String(budget));
    if (bedroom) params.set("bedrooms", String(bedroom));

    router.push(`/properties${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Find property</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">Search the market</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        <label className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="font-medium">Type</span>
          <select name="type" defaultValue={searchParams.get("type") ?? ""} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
            <option value="">Property type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="font-medium">Location</span>
          <select name="location" defaultValue={searchParams.get("location") ?? ""} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
            <option value="">All locations</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Lekki">Lekki</option>
            <option value="Ikoyi">Ikoyi</option>
            <option value="Victoria Island">Victoria Island</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="font-medium">Purpose</span>
          <select name="purpose" defaultValue={searchParams.get("purpose") ?? ""} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
            <option value="">Any purpose</option>
            {propertyPurposes.map((purpose) => (
              <option key={purpose} value={purpose}>{purpose}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="font-medium">Budget</span>
          <select name="budget" defaultValue={searchParams.get("budget") ?? ""} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
            {priceOptions.map((option) => (
              <option key={option.value || "any"} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="font-medium">Bedrooms</span>
          <select name="bedroom" defaultValue={searchParams.get("bedrooms") ?? ""} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white">
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </form>
    </div>
  );
}
