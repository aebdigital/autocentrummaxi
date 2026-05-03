import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financování",
  description:
    "Nákup vozidla na splátky s 0% akontací. Schválení na místě, výhodné financování bez omezení roku výroby.",
  alternates: { canonical: "/financovani" },
  openGraph: {
    title: "Financování | Autocentrum Maxi",
    description: "Nákup ojetého vozu na splátky s 0% akontací.",
    url: absoluteUrl("/financovani"),
  },
};

export default function FinancovaniPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Financování" />
      <div className="container mx-auto max-w-4xl px-4 py-12 font-montserrat text-gray-300">
        <section className="mb-12">
          <h2 className="mb-6 font-exo text-3xl font-bold text-white">Nákup na splátky</h2>
          <ul className="ml-6 list-disc space-y-4 text-lg marker:text-lime-400">
            <li>Možnost nákupu vozidla již s 0% akontací.</li>
            <li>Schválení na místě na počkání.</li>
            <li>99 % bez daňového přiznání.</li>
            <li>Stačí dva doklady totožnosti.</li>
          </ul>
          <p className="mt-8 text-lg">
            Získejte lepší podmínky financování než v bance, snadno, rychle, výhodně financujeme všechny vozy bez
            omezení roku výroby.
          </p>
        </section>

        <section className="mb-12 rounded-lg border border-dark-600 bg-dark-800 p-8 shadow-sm">
          <ul className="space-y-4 text-lg font-semibold text-white">
            <li className="flex items-center">
              <span className="mr-3 h-2 w-2 rounded-full bg-lime-400" />
              Akontace od 0 %.
            </li>
            <li className="flex items-center">
              <span className="mr-3 h-2 w-2 rounded-full bg-lime-400" />
              Doba splácení až 96 měsíců.
            </li>
            <li className="flex items-center">
              <span className="mr-3 h-2 w-2 rounded-full bg-lime-400" />
              Splátky přizpůsobíme vašemu rozpočtu a ihned se stáváte majitelem vozu.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Spolupracujeme</h3>
          <div className="flex flex-wrap items-center gap-8">
            <div className="italic text-gray-400">Essox, Moneta, Home Credit...</div>
          </div>
        </section>
      </div>
    </div>
  );
}
