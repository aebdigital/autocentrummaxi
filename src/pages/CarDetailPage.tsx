import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniHero from '../components/MiniHero';
import { Car } from '../types/car';
import { equipmentCategories } from '../data/equipmentOptions';

// Import local SVG icons
import pohonIcon from '../images/pohon.svg';
import palivoIcon from '../images/palivo.svg';
import kmIcon from '../images/km.svg';
import vykonIcon from '../images/vykon.svg';
import prevodovkaIcon from '../images/prevodovka.svg';
import motorIcon from '../images/motor.svg';
import rokIcon from '../images/rok.svg';
import karoseriaIcon from '../images/karoseria.svg';
import vinIcon from '../images/VIN.svg';

interface CarDetailPageProps {
  cars: Car[];
}

const CarDetailPage: React.FC<CarDetailPageProps> = ({ cars }) => {
  const { slug } = useParams<{ slug: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);

  useEffect(() => {
    if (!slug) return;
    
    // Find car by ID from the slug (last part of the slug)
    const slugParts = slug.split('-');
    const carId = slugParts[slugParts.length - 1];
    
    // Use the cars prop passed from App.tsx (which now contains our dummy data)
    const foundCar = cars.find(c => c.id === carId);
    
    if (foundCar) {
      setCar(foundCar);
    }
  }, [slug, cars]);

  if (!car) {
    return (
      <div className="min-h-screen bg-white">
        <MiniHero title="Hledám vozidlo..." />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-xl mb-4 font-montserrat">Pokud se vozidlo nenačte, zkuste se vrátit na nabídku.</p>
            <Link to="/ponuka" className="text-blue-600 hover:underline font-montserrat">
              Späť na ponuku
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Build images array
  const images = car.images && car.images.length > 0 ? car.images : [car.image];

  const icons = {
    'Pohon': pohonIcon,
    'Palivo': palivoIcon,
    'Kilometre': kmIcon,
    'Výkon': vykonIcon,
    'Prevodovka': prevodovkaIcon,
    'Objem motora': motorIcon,
    'Rok výroby': rokIcon,
    'Karoséria': karoseriaIcon,
    'VIN': vinIcon,
  };

  const basicData = [
    { label: 'Pohon', value: car.drivetrain, icon: icons['Pohon'] },
    { label: 'Palivo', value: car.fuel, icon: icons['Palivo'] },
    { label: 'Kilometre', value: car.mileage ? `${car.mileage.toLocaleString()} km` : null, icon: icons['Kilometre'] },
    { label: 'Výkon', value: car.power, icon: icons['Výkon'] },
    { label: 'Prevodovka', value: car.transmission, icon: icons['Prevodovka'] },
    { label: 'Objem motora', value: car.engine, icon: icons['Objem motora'] },
    { label: 'Rok výroby', value: car.year ? car.year.toString() : null, icon: icons['Rok výroby'] },
    { label: 'Karoséria', value: car.bodyType, icon: icons['Karoséria'] },
    { label: 'VIN', value: car.vin, icon: icons['VIN'] },
  ].filter(item => item.value && item.value !== 'N/A' && item.value !== '');

  const nextImage = () => {
    // Logic for scrolling gallery would go here
  };

  const prevImage = () => {
    // Logic for scrolling gallery would go here
  };
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setTimeout(() => setLightboxVisible(true), 10);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextMobileImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevMobileImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <MiniHero title="DETAIL VOZIDLA" />

      <div className="py-8">
        {/* Mobile Image View */}
        <div className="block md:hidden mb-8 w-full">
          <div className="w-full h-[40vh] relative">
            <img
              src={images[mobileImageIndex]}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
              onClick={() => openLightbox(mobileImageIndex)}
            />
            {images.length > 1 && (
              <>
                 <button 
                  onClick={prevMobileImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                >←</button>
                <button 
                  onClick={nextMobileImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                >→</button>
              </>
            )}
          </div>
        </div>

        {/* Desktop Image View (Simplified for now if gallery is small) */}
        <div className="hidden md:grid grid-cols-2 gap-2 mb-8 container mx-auto px-4">
           {images.slice(0, 2).map((img, idx) => (
             <div key={idx} className="h-[400px]">
               <img src={img} alt="Car" className="w-full h-full object-cover rounded cursor-pointer hover:opacity-90" onClick={() => openLightbox(idx)} />
             </div>
           ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className={`fixed inset-0 bg-white backdrop-blur z-50 flex items-center justify-center transition-all duration-500 ease-in-out ${
              lightboxVisible ? 'bg-opacity-80 opacity-100' : 'bg-opacity-0 opacity-0'
            }`}
            onClick={() => {
              setLightboxVisible(false);
              setTimeout(() => setLightboxOpen(false), 500);
            }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="fixed top-4 right-4 text-black text-4xl hover:text-gray-700 z-50"
            >
              ×
            </button>
             <div className="relative max-w-5xl max-h-5xl">
              <img
                src={images[lightboxIndex]}
                alt="Detail"
                className="max-w-full max-h-screen object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {images.length > 1 && (
                <>
                  <button onClick={(e) => {e.stopPropagation(); prevLightboxImage();}} className="fixed left-4 top-1/2 transform -translate-y-1/2 text-5xl text-black">←</button>
                  <button onClick={(e) => {e.stopPropagation(); nextLightboxImage();}} className="fixed right-4 top-1/2 transform -translate-y-1/2 text-5xl text-black">→</button>
                </>
            )}
          </div>
        )}

        {/* Info */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 font-jost">{car.brand} {car.model}</h1>
          <p className="text-gray-600 mb-4 font-montserrat">{car.year} • {car.mileage?.toLocaleString()} km • {car.fuel}</p>
          <div className="text-3xl text-red-600 font-bold font-montserrat mb-8">
            {car.price > 0 ? `${car.price.toLocaleString()} Kč` : 'Cena na vyžádání'}
          </div>

          {/* Specs Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {basicData.map((item, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-3 rounded">
                <img src={item.icon} alt={item.label} className="w-8 h-8 mr-3 opacity-70" />
                <div>
                  <div className="text-xs text-gray-500 uppercase">{item.label}</div>
                  <div className="font-bold">{item.value}</div>
                </div>
              </div>
            ))}
           </div>

           {/* Features */}
           {car.features && car.features.length > 0 && (
             <div className="mb-12">
               <h3 className="text-2xl font-bold mb-6 font-jost">Výbava</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {car.features.map((feature, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-montserrat">
                     <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
           )}

           <div className="text-center mt-12">
              <Link to="/kontakt" className="bg-black text-white px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                Mám zájem o toto vozidlo
              </Link>
           </div>

        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;