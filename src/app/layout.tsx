import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcelia-services.com"),
  title: {
    default: "Arcelia Services Nig. Ltd | Property Marketing & Enquiries",
    template: "%s | Arcelia Services",
  },
  description:
    "Arcelia Services Nig. Ltd — professional property marketing and lead support connecting buyers to verified opportunities in Lagos and Abuja.",
  openGraph: {
    title: "Arcelia Services Nig. Ltd",
    description: "Professional property marketing and enquiries.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <a
          href={waLink("Hello, I\'m interested in your property opportunities.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </body>
    </html>
  );
}
