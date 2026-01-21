import React from 'react';
import MiniHero from '../components/MiniHero';

const ZarukaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Záruka" />
      <div className="container mx-auto px-4 py-12 max-w-6xl font-sans text-gray-300">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-exo mb-4 text-white">Záruka Autocheck GOLD, SILVER a BRONZE</h2>
          <h3 className="text-xl text-gray-400">Záruka pro ojeté vozy</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Uvažujete o koupi ojetého vozu a máte obavy z nečekaných výdajů za opravy?
            </p>
            <p className="text-lg leading-relaxed">
              Máme pro Vás řešení v podobě tří pojistných programů – prodloužených záruk, které poskytují různý rozsah pojistného krytí dle stáří vozidla a počtu najetých kilometrů v době uzavření pojistné smlouvy.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl border border-dark-600">
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800"
              alt="Záruka a servis"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </div>

        {/* Table 1 */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-700">
                <th className="p-4 border border-dark-600 font-exo text-white">Program</th>
                <th className="p-4 border border-dark-600 font-exo text-white">Maximální stáří vozu (vstupní)</th>
                <th className="p-4 border border-dark-600 font-exo text-white">Max. počet najetých km (vstupní)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-dark-800">
                <td className="p-4 border border-dark-600 font-bold text-yellow-400">Gold</td>
                <td className="p-4 border border-dark-600">5</td>
                <td className="p-4 border border-dark-600">160.000</td>
              </tr>
              <tr className="bg-dark-800">
                <td className="p-4 border border-dark-600 font-bold text-gray-400">Silver</td>
                <td className="p-4 border border-dark-600">10</td>
                <td className="p-4 border border-dark-600">200.000</td>
              </tr>
              <tr className="bg-dark-800">
                <td className="p-4 border border-dark-600 font-bold text-orange-400">Bronze</td>
                <td className="p-4 border border-dark-600">15</td>
                <td className="p-4 border border-dark-600">250.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-exo mb-6 text-white">Výhody</h3>
          <ul className="list-disc ml-6 space-y-2 marker:text-lime-400">
            <li>Až 100% pokrytí nákladů za pozáruční opravy (materíál + práce).</li>
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
          <h3 className="text-2xl font-bold font-exo mb-6 text-white">Příklad krytých součástek</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-700">
                  <th className="p-4 border border-dark-600 font-exo text-white">Součástka</th>
                  <th className="p-4 border border-dark-600 font-exo text-center text-white">GOLD</th>
                  <th className="p-4 border border-dark-600 font-exo text-center text-white">SILVER</th>
                  <th className="p-4 border border-dark-600 font-exo text-center text-white">BRONZE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Převodovka</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Mazané součástky rozvodovky / diferenciálu</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Vinuté pružiny</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Turbodmychadlo</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center"></td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Čerpadlo chladícího systému</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center"></td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Startér motoru</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center"></td>
                </tr>
                <tr className="bg-dark-800">
                  <td className="p-4 border border-dark-600">Klimatizace</td>
                  <td className="p-4 border border-dark-600 text-center text-lime-400">✔</td>
                  <td className="p-4 border border-dark-600 text-center"></td>
                  <td className="p-4 border border-dark-600 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 italic text-gray-400">
            Úplný seznam krytých součástek v jednotlivých pojistných programech naleznete v pojistných podmínkách zde.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-exo mb-6 text-white">Parametry záruky</h3>
          <p className="mb-4">Lze uzavřít pro vozidla, která ke dni sjednání pojistné smlouvy AutoCheck splňují následující kritéria:</p>
          <ul className="list-disc ml-6 space-y-2 marker:text-lime-400">
            <li>Maximální stáří vozidla od data první registrace: 5, 10 nebo 15 let dle pojistného programu.</li>
            <li>Maximální celkový počet najetých kilometrů: 160.000 / 200.000 / 250.000 km.</li>
            <li>Začíná datem uvedeným v pojistné smlouvě jako datum počátku pojištění (zpravidla datum sjednání pojištění/ datum pořízení vozu).</li>
            <li>Lze sjednat pro ojetá vozidla do 3.500 kg.</li>
            <li>Doba pojištění: 3, 6, 12, 24 nebo 36 měsíců.</li>
            <li>Možnost sjednání spoluúčasti.</li>
            <li>Volitelný limit najetých kilometrů.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-exo mb-6 text-white">Výpočet sazby pojištění</h3>
          <p className="mb-4">
            Sazba pojištění AutoCheck je kalkulována individuálně tak, aby co nejlépe odpovídala vašim potřebám. Výše pojistného se odvíjí od objemu motoru vozidla, pojistného programu a dále od Vámi zvolených vstupních parametrů, kterými jsou především:
          </p>
          <ul className="list-disc ml-6 space-y-2 marker:text-lime-400">
            <li>Doba pojištění</li>
            <li>Limit najetých km</li>
            <li>Limit pojistného plnění</li>
            <li>Výše spoluúčasti</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold font-exo mb-6 text-white">Pojistné podmínky</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.colonnade.cz/cdn/65b2eb68-cf8e-0106-94e7-7fcbfbaa6c5e/2611d693-6095-4af7-88c3-24e3395f216d/V%C5%A1eobecn%C3%A9%20pojistn%C3%A9%20podm%C3%ADnky%20AutoCheck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-500 hover:underline flex items-center gap-2"
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
                className="text-lime-400 hover:text-lime-500 hover:underline flex items-center gap-2"
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
                className="text-lime-400 hover:text-lime-500 hover:underline flex items-center gap-2"
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
};

export default ZarukaPage;