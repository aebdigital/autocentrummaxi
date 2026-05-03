"use client";

import { useCallback, useEffect, useState } from "react";
import type { Car } from "@/types/car";
import CarCard from "./CarCard";
import CarFilter from "./CarFilter";

interface VehicleInventoryProps {
  cars: Car[];
}

export default function VehicleInventory({ cars }: VehicleInventoryProps) {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const handleFilter = useCallback((filtered: Car[]) => setFilteredCars(filtered), []);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="font-montserrat text-xl text-gray-400">
          Zobrazeno: {filteredCars.length} z {cars.length} vozidel
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <CarFilter cars={cars} onFilter={handleFilter} />
        </div>

        <div className="lg:col-span-3">
          {filteredCars.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="mb-4 font-exo text-2xl font-bold text-white">Žádná vozidla</h2>
              <p className="font-montserrat text-gray-400">Zkuste změnit filtry pro zobrazení vozidel.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[...filteredCars].sort((a, b) => Number(a.sold) - Number(b.sold)).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
