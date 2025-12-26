import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import CarCard from '../components/CarCard';
import { Car } from '../types/car';

interface Announcement {
  id: string;
  title: string;
  message: string;
  isActive: boolean;
  createdAt: Date;
}

interface HomePageProps {
  cars: Car[];
  isLoading: boolean;
  onCarClick: (car: Car) => void;
  announcements?: Announcement[];
}

const HomePage: React.FC<HomePageProps> = ({ cars, isLoading, onCarClick, announcements = [] }) => {
  const navigate = useNavigate();
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    // Show the first active announcement on page load
    const activeAnnouncements = announcements.filter(ann => ann.isActive);
    if (activeAnnouncements.length > 0) {
      setCurrentAnnouncement(activeAnnouncements[0]);
      setShowAnnouncement(true);
    }
  }, [announcements]);
  // Filter cars marked for homepage display, or fallback to latest 4 cars
  const homepageCars = cars.filter(car => car.showOnHomepage === true);
  const displayCars = homepageCars.length > 0 ? homepageCars.slice(0, 4) : cars.slice(0, 4);

  const createCarSlug = (car: Car) => {
    return `${car.brand}-${car.model}-${car.year}-${car.id}`
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleCarClick = (car: Car) => {
    const slug = createCarSlug(car);
    navigate(`/vozidlo/${slug}`);
  };

  return (
    <>
      <Hero />
      
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-exo text-center mb-4 text-white">NEJNOVĚJŠÍ VOZIDLA</h2>
            <div className="w-24 h-1 bg-lime-400 rounded-full"></div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-2xl font-montserrat text-white">Načítám vozidla...</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onClick={() => handleCarClick(car)}
                  />
                ))}
              </div>

              {cars.length > 4 && (
                <div className="text-center mt-12">
                  <Link
                    to="/ponuka"
                    className="inline-block bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-dark-900 px-10 py-3 rounded-full font-bold text-lg transition-all font-exo tracking-wide uppercase"
                  >
                    Zobrazit všechna vozidla
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Services />

      <Reviews />

      {/* Announcement Popup */}
      {showAnnouncement && currentAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-fade-in border border-dark-600">
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 font-exo text-white">
              {currentAnnouncement.title}
            </h2>
            <p className="text-gray-300 font-montserrat whitespace-pre-wrap mb-6">
              {currentAnnouncement.message}
            </p>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="w-full bg-lime-400 hover:bg-lime-500 text-dark-900 py-2 px-4 rounded-lg font-montserrat font-semibold transition-colors"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;