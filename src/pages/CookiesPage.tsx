import React from 'react';
import MiniHero from '../components/MiniHero';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Zásady používání cookies" />
      <div className="container mx-auto px-4 py-12 max-w-4xl font-montserrat text-gray-300">
        <p className="mb-6 italic text-gray-400">
          Tyto zásady používání cookies byly naposledy aktualizovány dne 4. 10. 2024 a platí pro občany a osoby s trvalým pobytem v Evropském hospodářském prostoru a ve Švýcarsku.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">1. Úvod</h2>
          <p>
            Naše webové stránky https://autocentrummaxi.cz (dále jen „webové stránky") používají soubory cookies a další související technologie (pro zjednodušení jsou všechny technologie označovány jako „cookies"). Soubory cookies jsou také umísťovány třetími stranami, které jsme zapojili. V níže uvedeném dokumentu vás informujeme o používání souborů cookies na našich webových stránkách.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">2. Co jsou cookies?</h2>
          <p>
            Cookie je malý jednoduchý soubor, který je odesílán společně se stránkami tohoto webu a ukládán vaším prohlížečem na pevný disk vašeho počítače nebo jiného zařízení. Informace v něm uložené mohou být při další návštěvě vráceny na naše servery nebo na servery příslušných třetích stran.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">3. Co jsou skripty?</h2>
          <p>
            Skript je část programového kódu, která se používá k zajištění správného a interaktivního fungování našich webových stránek. Tento kód je spouštěn na našem serveru nebo na vašem zařízení.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">4. Co je webový maják?</h2>
          <p>
            Webový maják (nebo pixelový tag) je malý, neviditelný kus textu nebo obrázku na webové stránce, který se používá ke sledování provozu na webu. Za tímto účelem jsou pomocí webových majáků ukládány různé údaje o vás.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">5. Cookies</h2>

          <h3 className="text-xl font-bold font-exo mb-2 text-white">5.1 Technické nebo funkční cookies</h3>
          <p className="mb-4">
            Některé soubory cookies zajišťují, že určité části webových stránek fungují správně a že vaše uživatelské preference zůstanou známé. Umístěním funkčních souborů cookies vám usnadňujeme návštěvu našich webových stránek. Tímto způsobem nemusíte při návštěvě našich webových stránek opakovaně zadávat stejné informace a například položky zůstanou v košíku, dokud nezaplatíte. Tyto soubory cookies můžeme umístit bez vašeho souhlasu.
          </p>

          <h3 className="text-xl font-bold font-exo mb-2 text-white">5.2 Marketingové/sledovací cookies</h3>
          <p className="mb-4">
            Marketingové/sledovací soubory cookies jsou soubory cookies nebo jakákoli jiná forma místního úložiště, které se používají k vytváření uživatelských profilů pro zobrazování reklamy nebo ke sledování uživatele na těchto webových stránkách či na několika webových stránkách pro podobné marketingové účely.
          </p>

          <h3 className="text-xl font-bold font-exo mb-2 text-white">5.3 Sociální sítě</h3>
          <p>
            Na našich webových stránkách jsme zahrnuli obsah z Instagramu pro propagaci webových stránek (např. „líbí se mi", „připnout") nebo sdílení (např. „tweet") na sociálních sítích jako Instagram. Tento obsah je vložen pomocí kódu odvozeného z Instagramu a umísťuje soubory cookies. Tento obsah může ukládat a zpracovávat určité informace pro personalizovanou reklamu.
          </p>
          <p className="mt-2">
            Přečtěte si prosím prohlášení o ochraně osobních údajů těchto sociálních sítí (které se mohou pravidelně měnit), abyste zjistili, co dělají s vašimi (osobními) údaji, které zpracovávají pomocí těchto souborů cookies. Získaná data jsou co nejvíce anonymizována. Instagram sídlí ve Spojených státech.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">6. Umístěné cookies</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white">Google Analytics</h4>
              <p>Účel čeká na prošetření</p>
              <p className="text-sm text-gray-500">Souhlas se službou google-analytics</p>
            </div>
            <div>
              <h4 className="font-bold text-white">WordPress</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-500">Souhlas se službou wordpress</p>
            </div>
            <div>
              <h4 className="font-bold text-white">iThemes Security</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-500">Souhlas se službou ithemes-security</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Google Maps</h4>
              <p>Účel čeká na prošetření</p>
              <p className="text-sm text-gray-500">Souhlas se službou google-maps</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Různé</h4>
              <p>Funkční, nezbytně nutné</p>
              <p className="text-sm text-gray-500">Souhlas se službou miscellaneous</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">7. Souhlas</h2>
          <p>
            Při první návštěvě našich webových stránek vám zobrazíme vyskakovací okno s vysvětlením o souborech cookies. Jakmile kliknete na „Uložit předvolby", souhlasíte s tím, že budeme používat kategorie souborů cookies a pluginů, které jste vybrali ve vyskakovacím okně, jak je popsáno v těchto zásadách používání cookies. Používání souborů cookies můžete zakázat prostřednictvím svého prohlížeče, ale upozorňujeme, že naše webové stránky pak nemusí správně fungovat.
          </p>
          <h3 className="text-xl font-bold font-exo mt-4 mb-2 text-white">7.1 Správa nastavení souhlasu</h3>
          <ul className="list-disc ml-6 marker:text-lime-400">
            <li>Funkční: Vždy aktivní</li>
            <li>Marketingové</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">8. Povolení/zakázání a mazání cookies</h2>
          <p>
            K automatickému nebo ručnímu mazání souborů cookies můžete použít svůj internetový prohlížeč. Můžete také určit, že některé soubory cookies nesmí být umístěny. Další možností je změnit nastavení internetového prohlížeče tak, abyste při každém umístění souboru cookie obdrželi zprávu. Další informace o těchto možnostech naleznete v pokynech v části Nápověda vašeho prohlížeče.
          </p>
          <p className="mt-2">
            Upozorňujeme, že naše webové stránky nemusí správně fungovat, pokud jsou všechny soubory cookies zakázány. Pokud soubory cookies ve svém prohlížeči odstraníte, budou po vašem souhlasu při další návštěvě našich webových stránek znovu umístěny.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">9. Vaše práva týkající se osobních údajů</h2>
          <p className="mb-2">Máte následující práva týkající se vašich osobních údajů:</p>
          <ul className="list-disc ml-6 space-y-2 marker:text-lime-400">
            <li>Máte právo vědět, proč jsou vaše osobní údaje potřebné, co se s nimi bude dít a jak dlouho budou uchovávány.</li>
            <li>Právo na přístup: Máte právo na přístup ke svým osobním údajům, které jsou nám známy.</li>
            <li>Právo na opravu: máte právo kdykoli doplnit, opravit, nechat vymazat nebo zablokovat své osobní údaje.</li>
            <li>Pokud nám dáte souhlas se zpracováním svých údajů, máte právo tento souhlas odvolat a nechat své osobní údaje vymazat.</li>
            <li>Právo na přenos údajů: máte právo požadovat všechny své osobní údaje od správce a předat je v celém rozsahu jinému správci.</li>
            <li>Právo vznést námitku: můžete vznést námitku proti zpracování svých údajů. Vyhovíme, pokud neexistují oprávněné důvody pro zpracování.</li>
          </ul>
          <p className="mt-4">
            Pro uplatnění těchto práv nás prosím kontaktujte. Kontaktní údaje naleznete na konci těchto zásad používání cookies. Pokud máte stížnost ohledně toho, jak nakládáme s vašimi údaji, rádi si ji vyslechneme, ale máte také právo podat stížnost u dozorového úřadu (Úřad pro ochranu osobních údajů).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold font-exo mb-4 text-white">10. Kontaktní údaje</h2>
          <p className="mb-2">V případě dotazů a/nebo připomínek k našim zásadám používání cookies a tomuto prohlášení nás prosím kontaktujte pomocí následujících kontaktních údajů:</p>
          <div className="bg-dark-800 p-6 rounded-lg border border-dark-600">
            <p className="font-bold text-white">Lukáš Neuwirth</p>
            <p>Ibsenova 1167/31 Ostrava 702 00</p>
            <p>Česká republika</p>
            <p>Web: <a href="https://autocentrummaxi.cz" className="text-lime-400 hover:text-lime-500 hover:underline">https://autocentrummaxi.cz</a></p>
            <p>E-mail: <a href="mailto:autocentrummaxi@seznam.cz" className="text-lime-400 hover:text-lime-500 hover:underline">autocentrummaxi@seznam.cz</a></p>
            <p>Telefon: +420 702 198 267</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Tyto zásady používání cookies byly synchronizovány s cookiedatabase.org dne 10. 11. 2024.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
