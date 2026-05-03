const reviews = [
  { name: "Jan Hrbáček", text: "Vše vyřešeno k plné spokojenosti. Příjemné jednání s majiteli autocentra, poradili mi s přepisem, zajistili pojištění, zkrátka: Není co řešit.", stars: 5, date: "před 2 lety" },
  { name: "Jan Létal", text: "Dobrý den. Zkušenost s panem Neuwirthem na jedničku. Je to slušný člověk, který nám pomohl, a jsem za to vděčný.", stars: 5, date: "před 10 měsíci" },
  { name: "Miroslav Petric", text: "Kupovali jsme nedávno se synem VW Passat, vše ok. Majitel slušný člověk, do ničeho vás nenutí, na nic si nehraje, jednání perfektní. Všem doporučuji, ať se daří.", stars: 5, date: "před 9 měsíci" },
  { name: "Veronika Vičarová", text: "Velmi doporučuji! Děkuji za Váš férový přístup, příjemnou a otevřenou komunikaci a pohodovou domluvu, za Vaši ochotu a pomoc při řešení problémů.", stars: 5, date: "před 6 lety" },
  { name: "Dan Syřínek", text: "Vše v pořádku, vstřícný, osobní přístup k zákazníkovi, kvalitní vozidla v nabídce, většinou po servisu. K případným závadám, které se mohou projevit po prodeji, se staví příkladně a zdarma zajistí opravu, v mém případě i několik měsíců po prodeji.", stars: 5, date: "před 3 lety" },
  { name: "Tomáš Hanák", text: "Už několik let kupuji pouze zde u pověřeného prodejce aut. Perfektní přístup, rád se vracím. Děkuji za vaši ochotu a vstřícnost, při nakupování se tu cítím skvěle.", stars: 5, date: "před 4 lety" },
  { name: "Jan Dokoupil", text: "Dobrý den, koupil jsem si FORD Tranzit a s autem i přístupem jsem byl maximálně spokojený. Mají tam solidní výběr dodávek různých značek ve skvělém stavu. Takže mohu jen doporučit.", stars: 5, date: "před 4 lety" },
  { name: "Iva Tvardková", text: "Velmi doporučuji. Příjemné jednání a ochota při výběru. Vše zařízeno podle mých očekávání.", stars: 5, date: "před 4 lety" },
  { name: "Marcel Balhar", text: "Velmi doporučuji. Velmi profesionální a přitom lidský přístup. Vše mi ukázali, vysvětlili a snažili se mi vyjít ve všem vstříc.", stars: 5, date: "před 4 lety" },
  { name: "Honzino Honzi", text: "Největší výběr pěkných dodávek, ochotný personál, super jednání, už mám od nich druhé auto. A klobouk dolů nad přístupem, po měsíci nastal problém, který majitel okamžitě bezplatně vyřešil, doporučuji.", stars: 5, date: "před 4 lety" },
  { name: "Miloslav Carva", text: "Ještě stále jsou společnosti, kam se rád vrátíte a tato je toho příkladem. Díky.", stars: 5, date: "před 2 lety" },
];

export default function Reviews() {
  return (
    <section className="overflow-hidden bg-dark-900 py-16">
      <div className="container mx-auto mb-12 px-4">
        <h2 className="mb-2 text-center font-exo text-4xl font-bold text-white md:text-5xl">RECENZE</h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-lime-400" />
        <p className="mt-4 text-center font-montserrat text-gray-400">
          Co o nás říkají naši spokojení zákazníci na Google
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/place/Autocentrum+Maxi+.cz/@49.8471066,18.2639703,17z/data=!4m7!3m6!1s0x4713e31c98cd8651:0xeb942615888194!8m2!3d49.8471066!4d18.266159!9m1!1b1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-lime-400 px-6 py-3 font-montserrat font-bold text-dark-900 transition-colors hover:bg-lime-500"
          >
            Napsat recenzi
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-dark-900 to-transparent" />
        <div className="absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-dark-900 to-transparent" />

        <div className="hover:pause flex w-[200%] animate-scroll">
          {[0, 1].map((set) => (
            <div key={set} className="flex w-1/2 gap-6 pr-6">
              {reviews.map((review, index) => (
                <div
                  key={`review-${set}-${index}`}
                  className="w-[300px] flex-shrink-0 rounded-xl border border-dark-600 bg-dark-800 p-6 shadow-sm transition-shadow hover:shadow-md md:w-[400px]"
                >
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-dark-700 font-exo text-xl font-bold text-lime-400">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-exo font-bold text-white">{review.name}</h4>
                      <p className="font-montserrat text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex text-sm text-yellow-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="font-montserrat text-sm italic leading-relaxed text-gray-300">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
