import type { Metadata } from "next";
import Image from "next/image";
import MiniHero from "@/components/MiniHero";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Záruka",
  description: "Prodloužená záruka AutoCheck Gold, Silver a Bronze pro ojeté vozy.",
  alternates: { canonical: "/zaruka" },
  openGraph: {
    title: "Záruka | Autocentrum Maxi",
    description: "Programy AutoCheck pro ojetá vozidla.",
    url: absoluteUrl("/zaruka"),
  },
};

export default function ZarukaPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Záruka" />
      <div className="container mx-auto max-w-6xl px-4 py-12 font-sans text-gray-300">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-exo text-3xl font-bold text-white">
            Záruka Autocheck GOLD, SILVER a BRONZE
          </h2>
          <h3 className="text-xl text-gray-400">Záruka pro ojeté vozy</h3>
        </div>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Uvažujete o koupi ojetého vozu a máte obavy z nečekaných výdajů za opravy?
            </p>
            <p className="text-lg leading-relaxed">
              Máme pro Vás řešení v podobě tří pojistných programů – prodloužených záruk, které poskytují různý rozsah
              pojistného krytí dle stáří vozidla a počtu najetých kilometrů v době uzavření pojistné smlouvy.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-dark-600 shadow-2xl h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800"
              alt="Záruka a servis"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-dark-700">
                <th className="border border-dark-600 p-4 font-exo text-white">Program</th>
                <th className="border border-dark-600 p-4 font-exo text-white">Maximální stáří vozu (vstupní)</th>
                <th className="border border-dark-600 p-4 font-exo text-white">Max. počet najetých km (vstupní)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-dark-800">
                <td className="border border-dark-600 p-4 font-bold text-yellow-400">Gold</td>
                <td className="border border-dark-600 p-4">5</td>
                <td className="border border-dark-600 p-4">160.000</td>
              </tr>
              <tr className="bg-dark-800">
                <td className="border border-dark-600 p-4 font-bold text-gray-400">Silver</td>
                <td className="border border-dark-600 p-4">10</td>
                <td className="border border-dark-600 p-4">200.000</td>
              </tr>
              <tr className="bg-dark-800">
                <td className="border border-dark-600 p-4 font-bold text-orange-400">Bronze</td>
                <td className="border border-dark-600 p-4">15</td>
                <td className="border border-dark-600 p-4">250.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mb-12">
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Výhody</h3>
          <ul className="ml-6 list-disc space-y-2 marker:text-lime-400">
            <li>Až 100% pokrytí nákladů za pozáruční opravy (materiál + práce).</li>
            <li>Transparentní seznamy krytých součástek.</li>
            <li>Neomezený počet pojistných událostí (oprav) v průběhu trvání smlouvy.</li>
            <li>Možnost převodu pojištění na nového majitele vozidla.</li>
            <li>Volitelné limity pojistného plnění.</li>
            <li>Flexibilní výpočet sazby pojistného.</li>
            <li>Vůz je opraven v síti autorizovaných servisů našich smluvních partnerů.</li>
            <li>Online řešení pojistné události včetně bezhotovostního vypořádání bez zásahu klienta.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Příklad krytých součástek</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-dark-700">
                  <th className="border border-dark-600 p-4 font-exo text-white">Součástka</th>
                  <th className="border border-dark-600 p-4 text-center font-exo text-white">GOLD</th>
                  <th className="border border-dark-600 p-4 text-center font-exo text-white">SILVER</th>
                  <th className="border border-dark-600 p-4 text-center font-exo text-white">BRONZE</th>
                </tr>
              </thead>
              <tbody>
                <CovTr part="Převodovka" gold silver bronze />
                <CovTr part="Mazané součástky rozvodovky / diferenciálu" gold silver bronze />
                <CovTr part="Vinuté pružiny" gold silver bronze />
                <CovTr part="Turbodmychadlo" gold silver />
                <CovTr part="Čerpadlo chladícího systému" gold silver />
                <CovTr part="Startér motoru" gold silver />
                <CovTr part="Klimatizace" gold />
              </tbody>
            </table>
          </div>
          <p className="mt-4 italic text-gray-400">
            Úplný seznam krytých součástek v jednotlivých pojistných programech naleznete v pojistných podmínkách.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Parametry záruky</h3>
          <p className="mb-4">
            Lze uzavřít pro vozidla, která ke dni sjednání pojistné smlouvy AutoCheck splňují následující kritéria:
          </p>
          <ul className="ml-6 list-disc space-y-2 marker:text-lime-400">
            <li>Maximální stáří vozidla od data první registrace: 5, 10 nebo 15 let dle pojistného programu.</li>
            <li>Maximální celkový počet najetých kilometrů: 160.000 / 200.000 / 250.000 km.</li>
            <li>Začíná datem uvedeným v pojistné smlouvě jako datum počátku pojištění.</li>
            <li>Lze sjednat pro ojetá vozidla do 3.500 kg.</li>
            <li>Doba pojištění: 3, 6, 12, 24 nebo 36 měsíců.</li>
            <li>Možnost sjednání spoluúčasti.</li>
            <li>Volitelný limit najetých kilometrů.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Výpočet sazby pojištění</h3>
          <p className="mb-4">
            Sazba pojištění AutoCheck je kalkulována individuálně tak, aby co nejlépe odpovídala vašim potřebám. Výše
            pojistného se odvíjí od objemu motoru vozidla, pojistného programu a dále od Vámi zvolených vstupních
            parametrů, kterými jsou především:
          </p>
          <ul className="ml-6 list-disc space-y-2 marker:text-lime-400">
            <li>Doba pojištění</li>
            <li>Limit najetých km</li>
            <li>Limit pojistného plnění</li>
            <li>Výše spoluúčasti</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Pojistné podmínky</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.colonnade.cz/cdn/65b2eb68-cf8e-0106-94e7-7fcbfbaa6c5e/2611d693-6095-4af7-88c3-24e3395f216d/V%C5%A1eobecn%C3%A9%20pojistn%C3%A9%20podm%C3%ADnky%20AutoCheck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lime-400 hover:text-lime-500 hover:underline"
              >
                <span>Všeobecné pojistné podmínky</span>
                <span className="text-xs text-gray-400">(PDF)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.colonnade.cz/cdn/65b2eb68-cf8e-0106-94e7-7fcbfbaa6c5e/a2fbcfaf-89d3-4390-9d05-6cf71db927f9/Pojistn%C3%BD%20program%20AutoCheck%20Platinum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lime-400 hover:text-lime-500 hover:underline"
              >
                <span>Pojistný program AutoCheck Platinum</span>
                <span className="text-xs text-gray-400">(PDF)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.colonnade.cz/cdn/65b2eb68-cf8e-0106-94e7-7fcbfbaa6c5e/0f1bcf0a-9bbc-4e87-a3ad-8d6843580e7b/P%C5%99ehled%20kryt%C3%BDch%20sou%C4%8D%C3%A1stek%20pro%20programy%20Gold%2C%20Silver%2C%20Bronze.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lime-400 hover:text-lime-500 hover:underline"
              >
                <span>Pojistný program AutoCheck Gold, Silver, Bronze</span>
                <span className="text-xs text-gray-400">(PDF)</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function CovTr({ part, gold, silver, bronze }: { part: string; gold?: boolean; silver?: boolean; bronze?: boolean }) {
  const Cell = ({ active }: { active?: boolean }) => (
    <td className="border border-dark-600 p-4 text-center text-lime-400">{active ? "✔" : ""}</td>
  );
  return (
    <tr className="bg-dark-800">
      <td className="border border-dark-600 p-4">{part}</td>
      <Cell active={gold} />
      <Cell active={silver} />
      <Cell active={bronze} />
    </tr>
  );
}
