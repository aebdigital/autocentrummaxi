import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zásady cookies",
  description: "Zásady používání cookies pro web Autocentrum Maxi.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Zásady cookies | Autocentrum Maxi",
    description: "Informace o používání cookies na našich webových stránkách.",
    url: absoluteUrl("/cookies"),
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Zásady používání cookies" />
      <div className="container mx-auto max-w-4xl px-4 py-12 font-montserrat text-gray-300">
        <p className="mb-6 italic text-gray-400">
          Tyto zásady používání cookies byly naposledy aktualizovány dne 4. 10. 2024 a platí pro občany a osoby s
          trvalým pobytem v Evropském hospodářském prostoru a ve Švýcarsku.
        </p>

        <Section title="1. Úvod">
          <p>
            Naše webové stránky https://autocentrummaxi.cz (dále jen „webové stránky") používají soubory cookies a
            další související technologie (pro zjednodušení jsou všechny technologie označovány jako „cookies").
            Soubory cookies jsou také umísťovány třetími stranami, které jsme zapojili. V níže uvedeném dokumentu vás
            informujeme o používání souborů cookies na našich webových stránkách.
          </p>
        </Section>

        <Section title="2. Co jsou cookies?">
          <p>
            Cookie je malý jednoduchý soubor, který je odesílán společně se stránkami tohoto webu a ukládán vaším
            prohlížečem na pevný disk vašeho počítače nebo jiného zařízení. Informace v něm uložené mohou být při
            další návštěvě vráceny na naše servery nebo na servery příslušných třetích stran.
          </p>
        </Section>

        <Section title="3. Co jsou skripty?">
          <p>
            Skript je část programového kódu, která se používá k zajištění správného a interaktivního fungování
            našich webových stránek. Tento kód je spouštěn na našem serveru nebo na vašem zařízení.
          </p>
        </Section>

        <Section title="4. Co je webový maják?">
          <p>
            Webový maják (nebo pixelový tag) je malý, neviditelný kus textu nebo obrázku na webové stránce, který se
            používá ke sledování provozu na webu. Za tímto účelem jsou pomocí webových majáků ukládány různé údaje o
            vás.
          </p>
        </Section>

        <Section title="5. Cookies">
          <h3 className="mb-2 font-exo text-xl font-bold text-white">5.1 Technické nebo funkční cookies</h3>
          <p className="mb-4">
            Některé soubory cookies zajišťují, že určité části webových stránek fungují správně a že vaše uživatelské
            preference zůstanou známé.
          </p>

          <h3 className="mb-2 font-exo text-xl font-bold text-white">5.2 Marketingové/sledovací cookies</h3>
          <p className="mb-4">
            Marketingové/sledovací soubory cookies se používají k vytváření uživatelských profilů pro zobrazování
            reklamy nebo ke sledování uživatele na těchto webových stránkách či na několika webových stránkách pro
            podobné marketingové účely.
          </p>

          <h3 className="mb-2 font-exo text-xl font-bold text-white">5.3 Sociální sítě</h3>
          <p>
            Na našich webových stránkách jsme zahrnuli obsah z Instagramu pro propagaci webových stránek nebo
            sdílení na sociálních sítích jako Instagram. Tento obsah je vložen pomocí kódu odvozeného z Instagramu a
            umísťuje soubory cookies.
          </p>
        </Section>

        <Section title="6. Umístěné cookies">
          <div className="space-y-4">
            <CookieEntry name="Google Analytics" purpose="Účel čeká na prošetření" service="google-analytics" />
            <CookieEntry name="WordPress" purpose="Funkční, nezbytně nutné" service="wordpress" />
            <CookieEntry name="iThemes Security" purpose="Funkční, nezbytně nutné" service="ithemes-security" />
            <CookieEntry name="Google Maps" purpose="Účel čeká na prošetření" service="google-maps" />
            <CookieEntry name="Různé" purpose="Funkční, nezbytně nutné" service="miscellaneous" />
          </div>
        </Section>

        <Section title="7. Souhlas">
          <p>
            Při první návštěvě našich webových stránek vám zobrazíme vyskakovací okno s vysvětlením o souborech
            cookies. Jakmile kliknete na „Uložit předvolby", souhlasíte s tím, že budeme používat kategorie souborů
            cookies a pluginů, které jste vybrali.
          </p>
          <h3 className="mb-2 mt-4 font-exo text-xl font-bold text-white">7.1 Správa nastavení souhlasu</h3>
          <ul className="ml-6 list-disc marker:text-lime-400">
            <li>Funkční: Vždy aktivní</li>
            <li>Marketingové</li>
          </ul>
        </Section>

        <Section title="8. Povolení/zakázání a mazání cookies">
          <p>
            K automatickému nebo ručnímu mazání souborů cookies můžete použít svůj internetový prohlížeč. Můžete také
            určit, že některé soubory cookies nesmí být umístěny.
          </p>
          <p className="mt-2">
            Upozorňujeme, že naše webové stránky nemusí správně fungovat, pokud jsou všechny soubory cookies
            zakázány.
          </p>
        </Section>

        <Section title="9. Vaše práva týkající se osobních údajů">
          <p className="mb-2">Máte následující práva týkající se vašich osobních údajů:</p>
          <ul className="ml-6 list-disc space-y-2 marker:text-lime-400">
            <li>Máte právo vědět, proč jsou vaše osobní údaje potřebné a jak dlouho budou uchovávány.</li>
            <li>Právo na přístup ke svým osobním údajům.</li>
            <li>Právo na opravu, výmaz nebo zablokování osobních údajů.</li>
            <li>Právo odvolat souhlas se zpracováním údajů.</li>
            <li>Právo na přenos údajů.</li>
            <li>Právo vznést námitku proti zpracování údajů.</li>
          </ul>
        </Section>

        <Section title="10. Kontaktní údaje">
          <p className="mb-2">
            V případě dotazů a/nebo připomínek k našim zásadám používání cookies nás prosím kontaktujte:
          </p>
          <div className="rounded-lg border border-dark-600 bg-dark-800 p-6">
            <p className="font-bold text-white">Lukáš Neuwirth</p>
            <p>Ibsenova 1167/31 Ostrava 702 00</p>
            <p>Česká republika</p>
            <p>
              Web:{" "}
              <a href="https://autocentrummaxi.cz" className="text-lime-400 hover:text-lime-500 hover:underline">
                https://autocentrummaxi.cz
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:autocentrummaxi@seznam.cz" className="text-lime-400 hover:text-lime-500 hover:underline">
                autocentrummaxi@seznam.cz
              </a>
            </p>
            <p>Telefon: +420 702 198 267</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 font-exo text-2xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

function CookieEntry({ name, purpose, service }: { name: string; purpose: string; service: string }) {
  return (
    <div>
      <h4 className="font-bold text-white">{name}</h4>
      <p>{purpose}</p>
      <p className="text-sm text-gray-500">Souhlas se službou {service}</p>
    </div>
  );
}
