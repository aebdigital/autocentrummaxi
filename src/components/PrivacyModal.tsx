import React from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-exo">Zásady ochrany osobných údajov</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="p-6 font-montserrat">
          <div className="space-y-6">
            <div>
              <strong>MT AUTOS s.r.o.</strong><br />
              ul. 29 augusta 2261/145 038 52 Sučany<br />
              IČO: 47584017, DIČ: 2023992652<br />
              E-mail: mtautossro@gmail.com<br />
              Tel.: +421 915 511 111
            </div>

            <p>
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 font-exo">I. Kontaktný formulár</h3>
              <p className="mb-3">
                Na stránke www.mtautos.sk prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Položiť otázku k našim produktom a službám</li>
                <li>Požiadať o cenovú ponuku</li>
              </ul>

              <h4 className="font-semibold mb-2">Rozsah spracúvaných údajov:</h4>
              <ul className="list-disc ml-6 mb-4">
                <li>Meno a priezvisko</li>
                <li>E-mailová adresa</li>
                <li>Telefónne číslo</li>
              </ul>

              <h4 className="font-semibold mb-2">Účel spracovania:</h4>
              <p className="mb-4">
                Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
              </p>

              <h4 className="font-semibold mb-2">Právny základ:</h4>
              <p className="mb-4">
                Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
              </p>

              <h4 className="font-semibold mb-2">Doba uchovávania:</h4>
              <p className="mb-4">
                Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 font-exo">II. Súbory cookies</h3>
              <p className="mb-3">
                Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
              </ul>

              <h4 className="font-semibold mb-2">Správa súhlasov:</h4>
              <p className="mb-4">
                Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 font-exo">III. Práva dotknutej osoby</h3>
              <p className="mb-3">
                Podľa nariadenia GDPR máte nasledujúce práva:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Prístup k osobným údajom, ktoré spracúvame</li>
                <li>Oprava nepresných alebo neúplných údajov</li>
                <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                <li>Obmedzenie spracovania</li>
                <li>Prenosnosť údajov</li>
                <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
              </ul>
              <p className="mb-4">
                V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na mtautossro@gmail.com alebo telefónnom čísle +421 915 511 111.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-semibold">
                Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;