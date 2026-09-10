import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function WhatsAppButton({
  message,
  className = "",
}: {
  message: string;
  className?: string;
}) {
  const href = waLink(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      Chat on WhatsApp
    </a>
  );
}
