import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Filter, MapPin } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { SearchPanel } from "@/components/search-panel";
import { properties } from "@/data/properties";

function matchesBudget(propertyPrice: number, budget: string | null) {
  if (!budget) return true;
  const [min, max] = budget.split("-").map(Number);
  if (Number.isNaN(min) || Number.isNaN(max)) return true;
  return propertyPrice >= min * 1000000 && propertyPrice <= max * 1000000;
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams ? await Promise.resolve(searchParams) : {};

  const type = typeof query.type === "string" ? query.type : "";
  const location = typeof query.location === "string" ? query.location : "";
  const purpose = typeof (query as any).purpose === "string" ? (query as any).purpose : "";
  const budget = typeof query.budget === "string" ? query.budget : "";
  const bedrooms = typeof query.bedrooms === "string" ? query.bedrooms : "";

  const filteredProperties = properties.filter((property) => {
    const matchesType = !type || property.type === type;
    const matchesLocation = !location || (property.location ?? "").includes(location) || property.city === location;
    const matchesPurpose = !purpose || (property.purpose ?? "") === purpose;
    const matchesBudgetFilter = matchesBudget(property.price ?? 0, budget);
    const matchesBedrooms = !bedrooms || (property.bedrooms ?? 0) >= Number(bedrooms);

    return matchesType && matchesLocation && matchesPurpose && matchesBudgetFilter && matchesBedrooms;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Premium listings</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Properties</h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
          <Filter className="h-4 w-4" />
          {filteredProperties.length} result{filteredProperties.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="mb-8">
        <Suspense fallback={<div className="h-[220px] rounded-[30px] border border-slate-200 bg-white/80" />}>
          <SearchPanel />
        </Suspense>
      </div>

      <div className="mb-8 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="h-4 w-4 text-emerald-600" />
            Explore homes across Lagos and Abuja
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
            Need help shortlisting?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">No properties match your filters.</h2>
          <p className="mt-3 text-base text-slate-600">Try another location, property type, or price range to find more options.</p>
        </div>
      )}
    </div>
  );
}
