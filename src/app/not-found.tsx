import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-4 py-16 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">This property could not be found.</h1>
        <p className="mt-4 text-base text-slate-600">The listing may have been moved or is no longer available.</p>
        <Link href="/properties" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          <ArrowLeft className="h-4 w-4" />
          Return to properties
        </Link>
      </div>
    </div>
  );
}
