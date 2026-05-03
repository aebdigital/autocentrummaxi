import type { Metadata } from "next";
import MiniHero from "@/components/MiniHero";
import VehicleInventory from "@/components/VehicleInventory";
import { getCarsForPonuka } from "@/lib/cars";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nabídka vozidel",
  description: "Aktuální nabídka ojetých osobních a užitkových vozidel v Autocentrum Maxi Ostrava.",
  alternates: { canonical: "/ponuka" },
  openGraph: {
    title: "Nabídka vozidel | Autocentrum Maxi",
    description: "Aktuální nabídka ojetých vozidel v Autocentrum Maxi Ostrava.",
    url: absoluteUrl("/ponuka"),
    images: [absoluteUrl("/img/hero-main.jpg")],
  },
};

export default async function PonukaPage() {
  const cars = await getCarsForPonuka();

  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title="NABÍDKA" />
      <VehicleInventory cars={cars} />
    </div>
  );
}
