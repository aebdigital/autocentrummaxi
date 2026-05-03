import Link from "next/link";
import MiniHero from "@/components/MiniHero";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="Stránka nenalezena" />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 font-exo text-3xl font-bold text-white">Požadovaná stránka neexistuje</h1>
        <p className="mb-8 font-montserrat text-gray-400">
          Zkontrolujte adresu, nebo pokračujte zpět na nabídku vozidel.
        </p>
        <Link
          href="/ponuka"
          className="inline-block rounded-full bg-lime-400 px-6 py-3 font-montserrat font-bold text-dark-900 hover:bg-lime-500"
        >
          Zpět na nabídku
        </Link>
      </div>
    </div>
  );
}
