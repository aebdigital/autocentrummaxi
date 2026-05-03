"use client";

import { useEffect, useState } from "react";
import type { Car } from "@/types/car";
import { useTranslation } from "@/translation/useTranslation";

interface CarFilterProps {
  cars: Car[];
  onFilter: (filteredCars: Car[]) => void;
}

interface FilterState {
  priceRange: [number, number];
  brands: string[];
  fuelTypes: string[];
  yearRange: [number, number];
  transmissionTypes: string[];
}

export default function CarFilter({ cars, onFilter }: CarFilterProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const allBrands = Array.from(new Set(cars.map((car) => car.brand))).sort();
  const allFuelTypes = Array.from(new Set(cars.map((car) => car.fuel))).sort();
  const allTransmissions = Array.from(new Set(cars.map((car) => car.transmission))).sort();

  const minPrice = cars.length ? Math.min(...cars.map((car) => car.price)) : 0;
  const maxPrice = cars.length ? Math.max(...cars.map((car) => car.price)) : 0;
  const minYear = cars.length ? Math.min(...cars.map((car) => car.year)) : 0;
  const maxYear = cars.length ? Math.max(...cars.map((car) => car.year)) : 0;

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [minPrice, maxPrice],
    brands: [],
    fuelTypes: [],
    yearRange: [minYear, maxYear],
    transmissionTypes: [],
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [minPrice, maxPrice],
      yearRange: [minYear, maxYear],
    }));
  }, [minPrice, maxPrice, minYear, maxYear]);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(car.brand);
      const fuelMatch = filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuel);
      const yearMatch = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1];
      const transmissionMatch =
        filters.transmissionTypes.length === 0 || filters.transmissionTypes.includes(car.transmission);
      return priceMatch && brandMatch && fuelMatch && yearMatch && transmissionMatch;
    });
    onFilter(filtered);
  }, [filters, cars, onFilter]);

  const resetFilters = () => {
    setFilters({
      priceRange: [minPrice, maxPrice],
      brands: [],
      fuelTypes: [],
      yearRange: [minYear, maxYear],
      transmissionTypes: [],
    });
  };

  const toggle = <T,>(arr: T[], value: T) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  return (
    <>
      <div className="mb-6 lg:hidden">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between rounded-lg border border-dark-600 bg-dark-800 px-4 py-3 font-montserrat text-white"
        >
          <span className="font-semibold">Filtry vozidel</span>
          <span className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}>↓</span>
        </button>
      </div>

      <div className={`${isExpanded ? "block" : "hidden"} rounded-lg bg-dark-800 p-6 shadow-lg lg:block`}>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-exo text-xl font-bold text-white">Filtry</h3>
          <button
            type="button"
            onClick={resetFilters}
            className="font-montserrat text-sm text-lime-400 hover:text-lime-500"
          >
            Vymazat
          </button>
        </div>

        <div className="space-y-6">
          <RangeBlock
            label={`Cena (Kč): ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}`}
            min={minPrice}
            max={maxPrice}
            value={filters.priceRange}
            onChange={(range) => setFilters({ ...filters, priceRange: range })}
          />

          <RangeBlock
            label={`Rok: ${filters.yearRange[0]} - ${filters.yearRange[1]}`}
            min={minYear}
            max={maxYear}
            value={filters.yearRange}
            onChange={(range) => setFilters({ ...filters, yearRange: range })}
          />

          <div>
            <label className="mb-3 block font-exo text-sm font-semibold text-white">Značka</label>
            <div className="grid max-h-40 grid-cols-2 gap-1 overflow-y-auto">
              {allBrands.map((brand) => (
                <label key={brand} className="flex items-center font-montserrat text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => setFilters({ ...filters, brands: toggle(filters.brands, brand) })}
                    className="mr-2 scale-75 accent-lime-400"
                  />
                  <span className="truncate">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block font-exo text-sm font-semibold text-white">Palivo</label>
            <div className="space-y-2">
              {allFuelTypes.map((fuel) => (
                <label key={fuel} className="flex items-center font-montserrat text-gray-300">
                  <input
                    type="checkbox"
                    checked={filters.fuelTypes.includes(fuel)}
                    onChange={() => setFilters({ ...filters, fuelTypes: toggle(filters.fuelTypes, fuel) })}
                    className="mr-2 accent-lime-400"
                  />
                  {fuel}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block font-exo text-sm font-semibold text-white">{t("labelPrevodovka")}</label>
            <div className="space-y-2">
              {allTransmissions.map((transmission) => {
                let displayLabel = transmission;
                if (transmission.toLowerCase() === "manualna" || transmission === "Manuální") {
                  displayLabel = t("manualna");
                } else if (transmission.toLowerCase() === "automaticka" || transmission === "Automatická") {
                  displayLabel = t("automaticka");
                }
                return (
                  <label key={transmission} className="flex items-center font-montserrat text-gray-300">
                    <input
                      type="checkbox"
                      checked={filters.transmissionTypes.includes(transmission)}
                      onChange={() =>
                        setFilters({
                          ...filters,
                          transmissionTypes: toggle(filters.transmissionTypes, transmission),
                        })
                      }
                      className="mr-2 accent-lime-400"
                    />
                    {displayLabel}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function RangeBlock({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  value: [number, number];
  onChange: (range: [number, number]) => void;
}) {
  const safeRange = max > min ? max - min : 1;
  return (
    <div>
      <label className="mb-3 block font-exo text-sm font-semibold text-white">{label}</label>
      <div className="space-y-3">
        <div className="flex items-center justify-between font-montserrat text-xs text-gray-400">
          <span>{min.toLocaleString()}</span>
          <span>{max.toLocaleString()}</span>
        </div>
        <div className="relative h-2">
          <div className="absolute h-2 w-full rounded-full bg-dark-600" />
          <div
            className="absolute h-2 rounded-full bg-lime-400"
            style={{
              left: `${((value[0] - min) / safeRange) * 100}%`,
              right: `${100 - ((value[1] - min) / safeRange) * 100}%`,
            }}
          />
          <input
            type="range"
            min={min}
            max={value[1]}
            value={value[0]}
            onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
            className="slider-thumb absolute h-2 w-full cursor-pointer appearance-none bg-transparent"
          />
          <input
            type="range"
            min={value[0]}
            max={max}
            value={value[1]}
            onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
            className="slider-thumb absolute h-2 w-full cursor-pointer appearance-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
