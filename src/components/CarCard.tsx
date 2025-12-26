import React from 'react';
import { Car } from '../types/car';

// Import local SVG icons
import rokIcon from '../images/rok.svg';
import palivoIcon from '../images/palivo.svg';
import kmIcon from '../images/km.svg';
import vykonIcon from '../images/vykon.svg';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const isReserved = car.reservedUntil && new Date(car.reservedUntil) > new Date();

  return (
    <div
      className="group bg-dark-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-dark-600 flex flex-col h-full"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
           {isReserved && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-bold font-montserrat shadow-sm">
              REZERVACE
            </span>
          )}
        </div>

        {/* Price Tag - Floating */}
        <div className="absolute bottom-3 right-3 bg-lime-400 text-dark-900 px-4 py-2 rounded-lg font-bold font-exo text-lg shadow-lg">
          {car.price > 0 ? `${car.price.toLocaleString()} Kč` : 'Na dotaz'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <div>
             <h3 className="text-xl font-bold text-white font-exo leading-tight group-hover:text-lime-400 transition-colors">
               {car.brand} {car.model}
             </h3>
           </div>
        </div>

        <div className="mt-auto pt-4 grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-400 font-montserrat">
          <div className="flex items-center gap-2">
            <img src={rokIcon} alt="Rok" className="w-4 h-4 icon-lime" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
             <img src={kmIcon} alt="Km" className="w-4 h-4 icon-lime" />
             <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2">
             <img src={palivoIcon} alt="Palivo" className="w-4 h-4 icon-lime" />
             <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
             <img src={vykonIcon} alt="Výkon" className="w-4 h-4 icon-lime" />
             <span>{car.power || '-'}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-5 py-3 bg-dark-700 border-t border-dark-600 flex justify-between items-center group-hover:bg-lime-400 transition-colors">
        <span className="text-sm font-semibold text-gray-300 group-hover:text-dark-900">Detail vozidla</span>
        <span className="text-lime-400 group-hover:text-dark-900 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};

export default CarCard;