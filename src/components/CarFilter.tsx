import React, { useState, useEffect } from 'react';
import { Car } from '../types/car';

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

const CarFilter: React.FC<CarFilterProps> = ({ cars, onFilter }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get unique values from cars
  const allBrands = Array.from(new Set(cars.map(car => car.brand))).sort();
  const allFuelTypes = Array.from(new Set(cars.map(car => car.fuel))).sort();
  const allTransmissions = Array.from(new Set(cars.map(car => car.transmission))).sort();
  
  const minPrice = Math.min(...cars.map(car => car.price));
  const maxPrice = Math.max(...cars.map(car => car.price));
  const minYear = Math.min(...cars.map(car => car.year));
  const maxYear = Math.max(...cars.map(car => car.year));

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [minPrice, maxPrice],
    brands: [],
    fuelTypes: [],
    yearRange: [minYear, maxYear],
    transmissionTypes: []
  });

  // Real-time filtering effect
  useEffect(() => {
    const filtered = cars.filter(car => {
      // Price filter
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      
      // Brand filter
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(car.brand);
      
      // Fuel filter
      const fuelMatch = filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuel);
      
      // Year filter
      const yearMatch = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1];
      
      // Transmission filter
      const transmissionMatch = filters.transmissionTypes.length === 0 || filters.transmissionTypes.includes(car.transmission);
      
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
      transmissionTypes: []
    });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const handleFuelChange = (fuel: string) => {
    const newFuels = filters.fuelTypes.includes(fuel)
      ? filters.fuelTypes.filter(f => f !== fuel)
      : [...filters.fuelTypes, fuel];
    setFilters({ ...filters, fuelTypes: newFuels });
  };

  const handleTransmissionChange = (transmission: string) => {
    const newTransmissions = filters.transmissionTypes.includes(transmission)
      ? filters.transmissionTypes.filter(t => t !== transmission)
      : [...filters.transmissionTypes, transmission];
    setFilters({ ...filters, transmissionTypes: newTransmissions });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 flex items-center justify-between font-montserrat text-white"
        >
          <span className="font-semibold">Filtry vozidel</span>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ↓
          </span>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`bg-dark-800 rounded-lg shadow-lg p-6 ${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-exo text-white">Filtry</h3>
          <button
            onClick={resetFilters}
            className="text-sm text-lime-400 hover:text-lime-500 font-montserrat"
          >
            Vymazat
          </button>
        </div>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-exo text-white">
              Cena (€): {filters.priceRange[0].toLocaleString()} - {filters.priceRange[1].toLocaleString()}
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400 font-montserrat">
                <span>{minPrice.toLocaleString()} €</span>
                <span>{maxPrice.toLocaleString()} €</span>
              </div>
              <div className="relative h-2">
                {/* Track background */}
                <div className="absolute w-full h-2 bg-dark-600 rounded-full"></div>

                {/* Active range */}
                <div
                  className="absolute h-2 bg-lime-400 rounded-full"
                  style={{
                    left: `${((filters.priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                    right: `${100 - ((filters.priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`
                  }}
                ></div>
                
                {/* Min slider */}
                <input
                  type="range"
                  min={minPrice}
                  max={filters.priceRange[1]}
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      priceRange: [parseInt(e.target.value), filters.priceRange[1]]
                    });
                  }}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
                
                {/* Max slider */}
                <input
                  type="range"
                  min={filters.priceRange[0]}
                  max={maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                    });
                  }}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min={minPrice}
                  max={filters.priceRange[1]}
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || minPrice;
                    setFilters({
                      ...filters,
                      priceRange: [Math.min(value, filters.priceRange[1]), filters.priceRange[1]]
                    });
                  }}
                  className="w-20 px-2 py-1 text-xs border border-dark-600 rounded font-montserrat bg-dark-700 text-white"
                />
                <span className="text-gray-400 font-montserrat">-</span>
                <input
                  type="number"
                  min={filters.priceRange[0]}
                  max={maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || maxPrice;
                    setFilters({
                      ...filters,
                      priceRange: [filters.priceRange[0], Math.max(value, filters.priceRange[0])]
                    });
                  }}
                  className="w-20 px-2 py-1 text-xs border border-dark-600 rounded font-montserrat bg-dark-700 text-white"
                />
              </div>
            </div>
          </div>

          {/* Year Range */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-exo text-white">
              Rok: {filters.yearRange[0]} - {filters.yearRange[1]}
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400 font-montserrat">
                <span>{minYear}</span>
                <span>{maxYear}</span>
              </div>
              <div className="relative h-2">
                {/* Track background */}
                <div className="absolute w-full h-2 bg-dark-600 rounded-full"></div>

                {/* Active range */}
                <div
                  className="absolute h-2 bg-lime-400 rounded-full"
                  style={{
                    left: `${((filters.yearRange[0] - minYear) / (maxYear - minYear)) * 100}%`,
                    right: `${100 - ((filters.yearRange[1] - minYear) / (maxYear - minYear)) * 100}%`
                  }}
                ></div>
                
                {/* Min slider */}
                <input
                  type="range"
                  min={minYear}
                  max={filters.yearRange[1]}
                  value={filters.yearRange[0]}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      yearRange: [parseInt(e.target.value), filters.yearRange[1]]
                    });
                  }}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
                
                {/* Max slider */}
                <input
                  type="range"
                  min={filters.yearRange[0]}
                  max={maxYear}
                  value={filters.yearRange[1]}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      yearRange: [filters.yearRange[0], parseInt(e.target.value)]
                    });
                  }}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min={minYear}
                  max={filters.yearRange[1]}
                  value={filters.yearRange[0]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || minYear;
                    setFilters({
                      ...filters,
                      yearRange: [Math.min(value, filters.yearRange[1]), filters.yearRange[1]]
                    });
                  }}
                  className="w-16 px-2 py-1 text-xs border border-dark-600 rounded font-montserrat bg-dark-700 text-white"
                />
                <span className="text-gray-400 font-montserrat">-</span>
                <input
                  type="number"
                  min={filters.yearRange[0]}
                  max={maxYear}
                  value={filters.yearRange[1]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || maxYear;
                    setFilters({
                      ...filters,
                      yearRange: [filters.yearRange[0], Math.max(value, filters.yearRange[0])]
                    });
                  }}
                  className="w-16 px-2 py-1 text-xs border border-dark-600 rounded font-montserrat bg-dark-700 text-white"
                />
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-exo text-white">Značka</label>
            <div className="grid grid-cols-2 gap-1 max-h-40 overflow-y-auto">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center font-montserrat text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2 scale-75 accent-lime-400"
                  />
                  <span className="truncate">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fuel Types */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-exo text-white">Palivo</label>
            <div className="space-y-2">
              {allFuelTypes.map(fuel => (
                <label key={fuel} className="flex items-center font-montserrat text-gray-300">
                  <input
                    type="checkbox"
                    checked={filters.fuelTypes.includes(fuel)}
                    onChange={() => handleFuelChange(fuel)}
                    className="mr-2 accent-lime-400"
                  />
                  {fuel}
                </label>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-exo text-white">Převodovka</label>
            <div className="space-y-2">
              {allTransmissions.map(transmission => (
                <label key={transmission} className="flex items-center font-montserrat text-gray-300">
                  <input
                    type="checkbox"
                    checked={filters.transmissionTypes.includes(transmission)}
                    onChange={() => handleTransmissionChange(transmission)}
                    className="mr-2 accent-lime-400"
                  />
                  {transmission}
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CarFilter;