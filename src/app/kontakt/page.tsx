import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";
import KontaktMap from "@/components/KontaktMap";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte Autocentrum Maxi v Ostravě. Telefon, e-mail, otevírací doba a adresa.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Autocentrum Maxi",
    description: "Kontaktní údaje a otevírací doba Autocentrum Maxi v Ostravě.",
    url: absoluteUrl("/kontakt"),
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="KONTAKT" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-8 font-montserrat">
              <div>
                <h2 className="mb-4 font-exo text-2xl font-bold text-white">Autocentrum Maxi .cz</h2>

                <div className="mb-6">
                  <h4 className="mb-1 text-lg font-semibold uppercase tracking-wide text-gray-400">telefon</h4>
                  <p className="text-xl font-medium text-white">+420 702 198 267</p>
                </div>

                <div className="mb-6">
                  <h4 className="mb-1 text-lg font-semibold uppercase tracking-wide text-gray-400">E-MAIL</h4>
                  <a
                    href="mailto:autocentrummaxi@gmail.com"
                    className="text-xl font-medium text-white transition-colors hover:text-lime-400"
                  >
                    autocentrummaxi@gmail.com
                  </a>
                </div>

                <div className="mb-6">
                  <h4 className="mb-1 text-lg font-semibold uppercase tracking-wide text-gray-400">adresa</h4>
                  <p className="text-lg text-white">Ibsenova 1167/31, Ostrava 702 00</p>
                </div>

                <div className="mb-6">
                  <h4 className="mb-1 text-lg font-semibold uppercase tracking-wide text-gray-400">IČ</h4>
                  <p className="text-lg text-white">875 464 00</p>
                </div>
              </div>

              <div className="border-t border-dark-600 pt-6">
                <h4 className="mb-4 text-lg font-semibold uppercase tracking-wide text-gray-400">otevírací doba</h4>
                <p className="mb-2 font-bold text-red-500">
                  Vždy volat předem, prodejna nemusí být otevřena!
                </p>
                <div className="space-y-2 text-lg text-gray-300">
                  <div className="flex max-w-xs justify-between"><span>Po – Čt</span><span>9.00 – 15.00 hod</span></div>
                  <div className="flex max-w-xs justify-between"><span>Pá</span><span>9.00 – 12.00 hod</span></div>
                  <div className="flex max-w-xs justify-between"><span>So</span><span>po tel domluvě</span></div>
                  <div className="flex max-w-xs justify-between"><span>Ne</span><span>zavřeno</span></div>
                </div>
              </div>

              <div className="border-t border-dark-600 pt-6">
                <h4 className="text-lg font-bold text-white">Lukáš Neuwirth</h4>
                <p className="text-gray-400">jednatel</p>
                <div className="mt-2">
                  <p className="text-sm uppercase text-gray-500">telefon</p>
                  <p className="font-medium text-white">+420 702 198 267</p>
                </div>
              </div>
            </div>
          </div>

          <KontaktMap />
        </div>
      </div>
    </div>
  );
}
