import Link from "next/link";
import GoToTopButton from "./GoToTopButton";

interface FooterProps {
  phones: string[];
}

export default function Footer({ phones }: FooterProps) {
  return (
    <footer className="border-t border-dark-700 bg-dark-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 border-b border-dark-700 pb-8 text-left md:grid-cols-4">
          <div>
            <h3 className="mb-6 font-exo text-2xl font-bold text-lime-400">Autocentrum Maxi .cz</h3>
            <p className="font-montserrat text-sm leading-relaxed text-gray-400">
              Prodejem a dovozem ojetých osobních a užitkových vozidel se pro vás zabýváme již 30 let. Máme stálou prodejnu v Ostravě. Blízko dálnice D1.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-exo text-xl font-semibold text-white">Menu</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link href="/" className="transition-colors hover:text-lime-400">Úvod</Link></li>
              <li><Link href="/ponuka" className="transition-colors hover:text-lime-400">Nabídka</Link></li>
              <li><Link href="/financovani" className="transition-colors hover:text-lime-400">Financování</Link></li>
              <li><Link href="/pojisteni" className="transition-colors hover:text-lime-400">Pojištění</Link></li>
              <li><Link href="/zaruka" className="transition-colors hover:text-lime-400">Záruka</Link></li>
              <li><Link href="/kontakt" className="transition-colors hover:text-lime-400">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-exo text-xl font-semibold text-white">Kontakt</h3>
            <div className="space-y-2 font-montserrat text-gray-400">
              <p>Lukáš Neuwirth</p>
              <p>Ibsenova 1167/31 Ostrava 702 00</p>
              {phones.length > 0
                ? phones.map((phone) => <p key={phone}>{phone}</p>)
                : <p>+420 702 198 267</p>}
              <a href="mailto:autocentrummaxi@gmail.com" className="hover:text-lime-400">
                autocentrummaxi@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-exo text-xl font-semibold text-white">Právní</h3>
            <ul className="space-y-2 font-montserrat text-gray-400">
              <li><Link href="/cookies" className="transition-colors hover:text-lime-400">Zásady cookies</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-lime-400">Ochrana osobních údajů</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between font-montserrat text-sm text-gray-500 md:flex-row">
          <p>GDPR | Vytvořila digitální agentura 4WORKS Solutions</p>
          <div className="mt-4 md:mt-0">
            <GoToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
