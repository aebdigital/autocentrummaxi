import React, { useState } from 'react';
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

  const applyFilters = () => {
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
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [minPrice, maxPrice],
      brands: [],
      fuelTypes: [],
      yearRange: [minYear, maxYear],
      transmissionTypes: []
    });
    onFilter(cars);
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between font-montserrat"
        >
          <span className="font-semibold">Filtre vozidiel</span>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ↓
          </span>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`bg-white rounded-lg shadow-lg p-6 ${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-jost">Filtre</h3>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-montserrat"
          >
            Vymazať
          </button>
        </div>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-jost">
              Cena (€): {filters.priceRange[0].toLocaleString()} - {filters.priceRange[1].toLocaleString()}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={filters.priceRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [parseInt(e.target.value), filters.priceRange[1]]
                })}
                className="w-full"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                })}
                className="w-full"
              />
            </div>
          </div>

          {/* Year Range */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-jost">
              Rok: {filters.yearRange[0]} - {filters.yearRange[1]}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min={minYear}
                max={maxYear}
                value={filters.yearRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  yearRange: [parseInt(e.target.value), filters.yearRange[1]]
                })}
                className="w-full"
              />
              <input
                type="range"
                min={minYear}
                max={maxYear}
                value={filters.yearRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  yearRange: [filters.yearRange[0], parseInt(e.target.value)]
                })}
                className="w-full"
              />
            </div>
          </div>

          {/* Brands */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-jost">Značka</label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center font-montserrat">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          {/* Fuel Types */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-jost">Palivo</label>
            <div className="space-y-2">
              {allFuelTypes.map(fuel => (
                <label key={fuel} className="flex items-center font-montserrat">
                  <input
                    type="checkbox"
                    checked={filters.fuelTypes.includes(fuel)}
                    onChange={() => handleFuelChange(fuel)}
                    className="mr-2"
                  />
                  {fuel}
                </label>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-sm font-semibold mb-3 font-jost">Prevodovka</label>
            <div className="space-y-2">
              {allTransmissions.map(transmission => (
                <label key={transmission} className="flex items-center font-montserrat">
                  <input
                    type="checkbox"
                    checked={filters.transmissionTypes.includes(transmission)}
                    onChange={() => handleTransmissionChange(transmission)}
                    className="mr-2"
                  />
                  {transmission}
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filter Button */}
          <button
            onClick={applyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold font-montserrat transition-colors"
          >
            Aplikovať filtre
          </button>
        </div>
      </div>
    </>
  );
};

export default CarFilter;