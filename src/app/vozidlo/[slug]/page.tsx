import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MiniHero from "@/components/MiniHero";
import CarDetailView from "@/components/CarDetailView";
import { getCarFullById } from "@/lib/cars";
import { absoluteUrl, extractCarIdFromSlug } from "@/lib/site";

export const dynamic = "force-dynamic";

type VehiclePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCarFullById(extractCarIdFromSlug(slug));

  if (!car) {
    return {
      title: "Vozidlo nenalezeno",
      robots: { index: false, follow: false },
    };
  }

  const title = `${car.brand} ${car.model} ${car.year ?? ""}`.trim();
  const description = `Prodej ${car.brand} ${car.model} ${car.year ?? ""}, ${car.fuel || ""}, ${
    car.power || ""
  }, ${car.mileage?.toLocaleString("cs-CZ") || 0} km. Cena: ${
    car.price?.toLocaleString("cs-CZ") || 0
  } Kč.`;
  const url = absoluteUrl(`/vozidlo/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: `/vozidlo/${slug}` },
    openGraph: {
      type: "website",
      title: `${title} | Autocentrum Maxi`,
      description,
      url,
      images: car.mainImageUrl ? [car.mainImageUrl] : [absoluteUrl("/img/hero-main.jpg")],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Autocentrum Maxi`,
      description,
      images: car.mainImageUrl ? [car.mainImageUrl] : [absoluteUrl("/img/hero-main.jpg")],
    },
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const car = await getCarFullById(extractCarIdFromSlug(slug));

  if (!car) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${car.brand} ${car.model} ${car.year ?? ""}`.trim(),
    image: [car.mainImageUrl, ...(car.galleryImageUrls?.slice(0, 5) || [])].filter(Boolean),
    description: car.description || `${car.brand} ${car.model} ${car.year ?? ""}`,
    brand: { "@type": "Brand", name: car.brand },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/vozidlo/${slug}`),
      priceCurrency: "CZK",
      price: car.price,
      availability: car.sold
        ? "https://schema.org/OutOfStock"
        : car.reserved
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
    },
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title={`${car.brand} ${car.model}`} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarDetailView car={car} />
    </div>
  );
}
