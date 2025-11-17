import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CarCard from '../components/CarCard';
import { Car } from '../types/car';

interface HomePageProps {
  cars: Car[];
  isLoading: boolean;
  onCarClick: (car: Car) => void;
  onAddCarClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ cars, isLoading, onCarClick, onAddCarClick }) => {
  const displayCars = cars.slice(0, 4);

  const createCarSlug = (car: Car) => {
    return `${car.brand}-${car.model}-${car.year}-${car.id}`
      .toLowerCase()
      .replace(/[^a-z0-9\-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleCarClick = (car: Car) => {
    const slug = createCarSlug(car);
    window.location.href = `/vozidlo/${slug}`;
  };

  return (
    <>
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-6xl font-bold font-jost">NAJNOVŠIE VOZIDLÁ</h2>
            <button
              onClick={onAddCarClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg font-montserrat"
            >
              + Pridať vozidlo
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-2xl">Načítavam vozidlá...</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayCars.map((car) => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    onClick={() => handleCarClick(car)}
                  />
                ))}
              </div>
              
              {cars.length > 4 && (
                <div className="text-center mt-8">
                  <Link 
                    to="/ponuka"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
                  >
                    Zobraziť všetky vozidlá ({cars.length})
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Services />
    </>
  );
};

export default HomePage;