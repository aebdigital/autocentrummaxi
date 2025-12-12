import React from 'react';
import MiniHero from '../components/MiniHero';

const FinancovaniPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="Financování" />
      <div className="container mx-auto px-4 py-12 max-w-4xl font-montserrat text-gray-800">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-exo mb-6">Nákup na splátky</h2>
          <ul className="list-disc ml-6 space-y-4 text-lg">
            <li>Možnost nákupu vozidla již s 0% akontací.</li>
            <li>Schválení na místě na počkání.</li>
            <li>99 % bez daňového přiznání.</li>
            <li>Stačí dva doklady totožnosti.</li>
          </ul>
          <p className="mt-8 text-lg">
            Získejte lepší podmínky financování než v bance, snadno, rychle, výhodně financujeme všechny vozy bez omezení roku výroby.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <ul className="space-y-4 text-lg font-semibold">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Akontace od 0 %.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Doba splácení až 96 měsíců.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Splátky přizpůsobíme vašemu rozpočtu a ihned se stáváte majitelem vozu.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold font-exo mb-6">Spolupracujeme</h3>
          <div className="flex flex-wrap gap-8 items-center">
             {/* Placeholders for logos, can be added later */}
             <div className="text-gray-500 italic">Essox, Moneta, Home Credit...</div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FinancovaniPage;