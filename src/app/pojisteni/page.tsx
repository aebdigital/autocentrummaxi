import type { Metadata } from "next";
import Image from "next/image";
import MiniHero from "@/components/MiniHero";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pojištění",
  description:
    "Sjednání povinného ručení a havarijního pojištění přímo v Autocentru Maxi. Výhodnější podmínky než v pojišťovně.",
  alternates: { canonical: "/pojisteni" },
  openGraph: {
    title: "Pojištění | Autocentrum Maxi",
    description: "Povinné ručení a havarijní pojištění při koupi vozu u nás.",
    url: absoluteUrl("/pojisteni"),
  },
};

export default function PojisteniPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Pojištění" />
      <div className="container mx-auto max-w-6xl px-4 py-12 font-sans text-gray-300">
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <section>
            <p className="mb-6 text-lg leading-relaxed">
              Připravili jsme pro vás možnost sjednání povinného ručení a havarijního pojištění za výhodnějších
              podmínek, než dostanete v pojišťovně nebo na internetu.
            </p>
            <p className="mb-6 text-lg font-semibold leading-relaxed text-white">
              Využijte možnosti pojištění vozidla přímo u nás.
            </p>
            <p className="text-lg leading-relaxed">
              Nezabere to víc, než pár minut a odjíždíte s plně pojištěným vozidlem.
            </p>
          </section>

          <div className="relative overflow-hidden rounded-xl border border-dark-600 shadow-2xl h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
              alt="Pojištění vozidla"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <section>
          <h3 className="mb-6 font-exo text-2xl font-bold text-white">Spolupracujeme</h3>
          <div className="flex flex-wrap items-center gap-8">
            <div className="italic text-gray-400">Generali, Kooperativa, Allianz...</div>
          </div>
        </section>
      </div>
    </div>
  );
}
