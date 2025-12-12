import React from 'react';

const reviews = [
  {
    name: "Jan Hrbáček",
    text: "Vše vyřešeno k plné spokojenosti. Příjemné jednání s majiteli autocentra, poradili mi s přepisem, zajistili pojištění, zkrátka: Není co řešit.",
    stars: 5,
    date: "před 2 lety"
  },
  {
    name: "Jan Létal",
    text: "Dobrý den. Zkušenost s panem Neuwirthem na jedničku. Je to slušný člověk, který nám pomohl, a jsem za to vděčný.",
    stars: 5,
    date: "před 10 měsíci"
  },
  {
    name: "Miroslav Petric",
    text: "Kupovali jsme nedávno se synem VW Passat, vše ok. Majitel slušný člověk, do ničeho vás nenutí, na nic si nehraje, jednání perfektní. Všem doporučuji, ať se daří.",
    stars: 5,
    date: "před 9 měsíci"
  },
  {
    name: "Veronika Vičarová",
    text: "Velmi doporučuji! Děkuji za Váš férový přístup, příjemnou a otevřenou komunikaci a pohodovou domluvu, za Vaši ochotu a pomoc při řešení problémů.",
    stars: 5,
    date: "před 6 lety"
  },
  {
    name: "Dan Syřínek",
    text: "Vše v pořádku, vstřícný, osobní přístup k zákazníkovi, kvalitní vozidla v nabídce, většinou po servisu. K případným závadám, které se mohou projevit po prodeji, se staví příkladně a zdarma zajistí opravu, v mém případě i několik měsíců po prodeji.",
    stars: 5,
    date: "před 3 lety"
  },
  {
    name: "Tomáš Hanák",
    text: "Už několik let kupuji pouze zde u pověřeného prodejce aut. Perfektní přístup, rád se vracím. Děkuji za vaši ochotu a vstřícnost, při nakupování se tu cítím skvěle 👍👍👍👍",
    stars: 5,
    date: "před 4 lety"
  },
  {
    name: "Jan Dokoupil",
    text: "Dobrý den, koupil jsem si FORD Tranzit a s autem i přístupem jsem byl maximálně spokojený. Mají tam solidní výběr dodávek různých značek ve skvělém stavu. Takže mohu jen doporučit.",
    stars: 5,
    date: "před 4 lety"
  },
  {
    name: "Iva Tvardková",
    text: "Velmi doporučuji. Příjemné jednání a ochota při výběru. Vše zařízeno podle mých očekávání.",
    stars: 5,
    date: "před 4 lety"
  },
  {
    name: "Marcel Balhar",
    text: "Velmi doporučuji. Velmi profesionální a přitom lidský přístup. Vše mi ukázali, vysvětlili a snažili se mi vyjít ve všem vstříc.",
    stars: 5,
    date: "před 4 lety"
  },
  {
    name: "Honzino Honzi",
    text: "Největší výběr pěkných dodávek, ochotný personál, super jednání, už mám od nich druhé auto. A klobouk dolů nad přístupem, po měsíci nastal problém, který majitel okamžitě bezplatně vyřešil, doporučuji. S pozdravem Jan Horníček",
    stars: 5,
    date: "před 4 lety"
  },
  {
    name: "Miloslav Carva",
    text: "Ještě stále jsou společnosti, kam se rád vrátíte a tato je toho příkladem. Díky.",
    stars: 5,
    date: "před 2 lety"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-exo mb-2">RECENZE</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        <p className="text-center text-gray-500 mt-4 font-montserrat">
          Co o nás říkají naši spokojení zákazníci na Google
        </p>
      </div>

      <div className="relative">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-[200%] animate-scroll hover:pause">
          {/* First Set */}
          <div className="flex gap-6 pr-6 w-1/2">
            {reviews.map((review, index) => (
              <div 
                key={`review-1-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-3 font-exo">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold font-exo text-gray-900">{review.name}</h4>
                     <p className="text-xs text-gray-500 font-montserrat">{review.date}</p>
                   </div>
                </div>
                <div className="flex text-yellow-400 mb-3 text-sm">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 font-montserrat text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for smooth infinite loop) */}
          <div className="flex gap-6 pr-6 w-1/2">
            {reviews.map((review, index) => (
              <div 
                key={`review-2-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mr-3 font-exo">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold font-exo text-gray-900">{review.name}</h4>
                     <p className="text-xs text-gray-500 font-montserrat">{review.date}</p>
                   </div>
                </div>
                <div className="flex text-yellow-400 mb-3 text-sm">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 font-montserrat text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add CSS for pause on hover if not supported by Tailwind utility directly */}
      <style>{`
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
