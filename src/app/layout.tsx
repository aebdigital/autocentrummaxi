import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCebiaButton from "@/components/FloatingCebiaButton";
import AnnouncementPopupClient from "@/components/AnnouncementPopupClient";
import { getActivePhonesForSite } from "@/lib/contact";
import { getAnnouncementPopupForSite } from "@/lib/announcements";
import { absoluteUrl, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl("/img/hero-main.jpg")],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl("/img/hero-main.jpg")],
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [phones, popup] = await Promise.all([
    getActivePhonesForSite().catch(() => [] as string[]),
    getAnnouncementPopupForSite().catch(() => null),
  ]);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Autocentrum Maxi .cz",
    url: siteUrl,
    image: absoluteUrl("/img/hero-main.jpg"),
    telephone: phones[0] || "+420 702 198 267",
    email: "autocentrummaxi@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibsenova 1167/31",
      postalCode: "70200",
      addressLocality: "Ostrava",
      addressCountry: "CZ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
  };

  return (
    <html lang="cs">
      <body className="bg-dark-900 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer phones={phones} />
        <FloatingCebiaButton />
        <AnnouncementPopupClient popup={popup} />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
