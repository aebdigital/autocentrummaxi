import Link from "next/link";
import Image from "next/image";
import type { Car } from "@/types/car";
import { createCarSlug } from "@/lib/site";

const iconMap = {
  year: "/icons/rok.svg",
  fuel: "/icons/palivo.svg",
  mileage: "/icons/km.svg",
  power: "/icons/vykon.svg",
};

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const isReservedByDate = car.reservedUntil ? new Date(car.reservedUntil) > new Date() : false;
  const isReserved = car.reserved || isReservedByDate;
  const isSold = car.sold;
  const href = `/vozidlo/${createCarSlug(car)}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dark-600 bg-dark-800 shadow-md transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={car.image || "/img/cars/1.jpg"}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {isSold ? (
            <div className="rounded bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white shadow-lg">
              PRODÁNO
            </div>
          ) : isReserved ? (
            <div className="rounded bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white shadow-lg">
              REZERVOVÁNO
            </div>
          ) : null}
        </div>

        <div className="absolute bottom-3 right-3 rounded-lg bg-lime-400 px-4 py-2 font-exo text-lg font-bold text-dark-900 shadow-lg">
          {car.price > 0 ? `${car.price.toLocaleString("cs-CZ")} Kč` : "Na dotaz"}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-exo text-xl font-bold leading-tight text-white transition-colors group-hover:text-lime-400">
            {car.brand} {car.model}
          </h3>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-3 pt-4 font-montserrat text-sm text-gray-400">
          <Stat icon={iconMap.year} label="Rok" value={String(car.year)} />
          <Stat icon={iconMap.mileage} label="Km" value={`${car.mileage.toLocaleString("cs-CZ")} km`} />
          <Stat icon={iconMap.fuel} label="Palivo" value={car.fuel} />
          <Stat icon={iconMap.power} label="Výkon" value={car.power || "-"} />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-dark-600 bg-dark-700 px-5 py-3 transition-colors group-hover:bg-lime-400">
        <span className="text-sm font-semibold text-gray-300 group-hover:text-dark-900">Detail vozidla</span>
        <span className="transform text-lime-400 transition-transform group-hover:translate-x-1 group-hover:text-dark-900">→</span>
      </div>
    </Link>
  );
}

function Stat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-4 w-4">
        <Image src={icon} alt={label} fill className="icon-lime" />
      </div>
      <span className="truncate">{value}</span>
    </div>
  );
}
