import React from 'react';
import MiniHero from '../components/MiniHero';

const ZarukaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="Záruka" />
      <div className="container mx-auto px-4 py-12 max-w-5xl font-montserrat text-gray-800">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-jost mb-4">Záruka Autocheck GOLD, SILVER a BRONZE</h2>
          <h3 className="text-xl text-gray-600">Záruka pro ojeté vozy</h3>
        </div>

        <div className="mb-12">
          <p className="mb-4">Uvažujete o koupi ojetého vozu a máte obavy z nečekaných výdajů za opravy?</p>
          <p>
            Máme pro Vás řešení v podobě tří pojistných programů – prodloužených záruk, které poskytují různý rozsah pojistného krytí dle stáří vozidla a počtu najetých kilometrů v době uzavření pojistné smlouvy.
          </p>
        </div>

        {/* Table 1 */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border font-jost">Program</th>
                <th className="p-4 border font-jost">Maximální stáří vozu (vstupní)</th>
                <th className="p-4 border font-jost">Max. počet najetých km (vstupní)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-bold text-yellow-600">Gold</td>
                <td className="p-4 border">5</td>
                <td className="p-4 border">160.000</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold text-gray-500">Silver</td>
                <td className="p-4 border">10</td>
                <td className="p-4 border">200.000</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold text-orange-700">Bronze</td>
                <td className="p-4 border">15</td>
                <td className="p-4 border">250.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-jost mb-6">Výhody</h3>
          <ul className="list-disc ml-6 space-y-2">
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
          <h3 className="text-2xl font-bold font-jost mb-6">Příklad krytých součástek</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 border font-jost">Součástka</th>
                  <th className="p-4 border font-jost text-center">GOLD</th>
                  <th className="p-4 border font-jost text-center">SILVER</th>
                  <th className="p-4 border font-jost text-center">BRONZE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border">Převodovka</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                </tr>
                <tr>
                  <td className="p-4 border">Mazané součástky rozvodovky / diferenciálu</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                </tr>
                <tr>
                  <td className="p-4 border">Vinuté pružiny</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                </tr>
                <tr>
                  <td className="p-4 border">Turbodmychadlo</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center"></td>
                </tr>
                <tr>
                  <td className="p-4 border">Čerpadlo chladícího systému</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center"></td>
                </tr>
                <tr>
                  <td className="p-4 border">Startér motoru</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center"></td>
                </tr>
                <tr>
                  <td className="p-4 border">Klimatizace</td>
                  <td className="p-4 border text-center text-green-600">✔</td>
                  <td className="p-4 border text-center"></td>
                  <td className="p-4 border text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 italic">
            Úplný seznam krytých součástek v jednotlivých pojistných programech naleznete v pojistných podmínkách zde.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-jost mb-6">Parametry záruky</h3>
          <p className="mb-4">Lze uzavřít pro vozidla, která ke dni sjednání pojistné smlouvy AutoCheck splňují následující kritéria:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Maximální stáří vozidla od data první registrace: 5, 7 nebo 15 let dle pojistného programu.</li>
            <li>Maximální celkový počet najetých kilometrů: 120.000 / 160.000 / 200.000 km.</li>
            <li>Začíná datem uvedeným v pojistné smlouvě jako datum počátku pojištění (zpravidla datum sjednání pojištění/ datum pořízení vozu).</li>
            <li>Lze sjednat pro ojetá vozidla do 3.500 kg.</li>
            <li>Doba pojištění: 3, 6, 12, 24 nebo 36 měsíců.</li>
            <li>Možnost sjednání spoluúčasti.</li>
            <li>Volitelný limit najetých kilometrů.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold font-jost mb-6">Výpočet sazby pojištění</h3>
          <p className="mb-4">
            Sazba pojištění AutoCheck je kalkulována individuálně tak, aby co nejlépe odpovídala vašim potřebám. Výše pojistného se odvíjí od objemu motoru vozidla, pojistného programu a dále od Vámi zvolených vstupních parametrů, kterými jsou především:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Doba pojištění</li>
            <li>Limit najetých km</li>
            <li>Limit pojistného plnění</li>
            <li>Výše spoluúčasti</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold font-jost mb-6">Pojistné podmínky</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Všeobecné pojistné podmínky</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Pojistný program AutoCheck Platinum</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Pojistný program AutoCheck Gold, Silver, Bronze</a></li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default ZarukaPage;