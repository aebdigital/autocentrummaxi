import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import CarCard from "@/components/CarCard";
import { getCarsForPonuka } from "@/lib/cars";
import { absoluteUrl, siteDescription, siteTitle } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: absoluteUrl("/"),
    images: [absoluteUrl("/img/hero-main.jpg")],
  },
};

export default async function HomePage() {
  const cars = await getCarsForPonuka();
  const homepageCars = cars.filter((car) => car.showOnHomepage);
  const otherCars = cars.filter((car) => !car.showOnHomepage);
  const slotsNeeded = Math.max(0, 4 - homepageCars.length);
  const displayCars = [...homepageCars, ...otherCars.slice(0, slotsNeeded)].slice(0, 4);

  return (
    <>
      <Hero />

      <section className="bg-dark-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="mb-4 text-center font-exo text-4xl font-bold text-white md:text-5xl">
              NEJNOVĚJŠÍ VOZIDLA
            </h2>
            <div className="h-1 w-24 rounded-full bg-lime-400" />
          </div>

          {displayCars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {displayCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {cars.length > 4 ? (
                <div className="mt-12 text-center">
                  <Link
                    href="/ponuka"
                    className="inline-block rounded-full border-2 border-lime-400 bg-transparent px-10 py-3 font-exo text-lg font-bold uppercase tracking-wide text-lime-400 transition-all hover:bg-lime-400 hover:text-dark-900"
                  >
                    Zobrazit všechna vozidla
                  </Link>
                </div>
              ) : null}
            </>
          ) : (
            <p className="py-12 text-center font-montserrat text-xl text-gray-400">
              Aktuálně připravujeme nabídku vozidel.
            </p>
          )}
        </div>
      </section>

      <Services />
      <Reviews />
    </>
  );
}
