import { Suspense } from "react";
import ClientProperties from "./client";

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="h-[220px] rounded-[30px] border border-slate-200 bg-white/80" />}>
      {/* Client-side properties UI handles filtering and search params */}
      <ClientProperties />
    </Suspense>
  );
}
