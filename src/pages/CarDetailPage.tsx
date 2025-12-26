import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniHero from '../components/MiniHero';
import { Car } from '../types/car';
import { getCarById } from '../lib/publicCars';

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
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function loadCar() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      // UUID pattern: 8-4-4-4-12 hex characters
      const uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const uuidMatch = slug.match(uuidPattern);

      let carId: string;
      if (uuidMatch) {
        // It's a Supabase car with UUID
        carId = uuidMatch[0];
      } else {
        // It's a hardcoded car with simple numeric ID
        const slugParts = slug.split('-');
        carId = slugParts[slugParts.length - 1];
      }

      // First check if it's a hardcoded car
      const foundCar = cars.find(c => c.id === carId);
      if (foundCar) {
        setCar(foundCar);
        setIsLoading(false);
        return;
      }

      // If not found in hardcoded cars, try to fetch from Supabase
      try {
        const supabaseCar = await getCarById(carId);
        if (supabaseCar) {
          setCar({
            id: supabaseCar.id,
            brand: supabaseCar.brand.trim(),
            model: supabaseCar.model,
            year: supabaseCar.year ?? 0,
            price: supabaseCar.price ?? 0,
            mileage: supabaseCar.mileage ?? 0,
            fuel: supabaseCar.fuel ?? '',
            transmission: supabaseCar.transmission ?? '',
            image: supabaseCar.image,
            images: supabaseCar.images ?? undefined,
            features: supabaseCar.features ?? undefined,
            engine: supabaseCar.engine ?? undefined,
            power: supabaseCar.power ?? undefined,
            bodyType: supabaseCar.bodyType ?? undefined,
            drivetrain: supabaseCar.drivetrain ?? undefined,
            vin: supabaseCar.vin ?? undefined,
            description: supabaseCar.description ?? undefined,
            showOnHomepage: supabaseCar.showOnHomepage,
          });
        }
      } catch (error) {
        console.error('Failed to load car from Supabase:', error);
      }

      setIsLoading(false);
    }

    loadCar();
  }, [slug, cars]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <MiniHero title="Načítám..." />
        <div className="flex justify-center items-center py-20">
          <div className="text-2xl font-montserrat text-white">Načítám vozidlo...</div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-dark-900">
        <MiniHero title="Vozidlo nenalezeno" />
        <div className="text-center py-20">
          <Link to="/ponuka" className="text-lime-400 hover:text-lime-500 hover:underline">Zpět na nabídku</Link>
        </div>
      </div>
    );
  }

  const images = car.images && car.images.length > 0 ? car.images : [car.image];

  const icons = {
    'Pohon': pohonIcon,
    'Palivo': palivoIcon,
    'Kilometry': kmIcon,
    'Výkon': vykonIcon,
    'Převodovka': prevodovkaIcon,
    'Objem motoru': motorIcon,
    'Rok výroby': rokIcon,
    'Karoserie': karoseriaIcon,
    'VIN': vinIcon,
  };

  const basicData = [
    { label: 'Rok výroby', value: car.year, icon: icons['Rok výroby'] },
    { label: 'Kilometry', value: `${car.mileage.toLocaleString()} km`, icon: icons['Kilometry'] },
    { label: 'Palivo', value: car.fuel, icon: icons['Palivo'] },
    { label: 'Převodovka', value: car.transmission, icon: icons['Převodovka'] },
    { label: 'Výkon', value: car.power, icon: icons['Výkon'] },
    { label: 'Objem motoru', value: car.engine, icon: icons['Objem motoru'] },
    { label: 'Karoserie', value: car.bodyType, icon: icons['Karoserie'] },
    { label: 'Pohon', value: car.drivetrain, icon: icons['Pohon'] },
    { label: 'VIN', value: car.vin, icon: icons['VIN'] },
  ].filter(item => item.value);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <MiniHero title={`${car.brand} ${car.model}`} />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN: Gallery & Specs */}
          <div className="lg:col-span-2 space-y-8">

            {/* Main Gallery Display */}
            <div className="bg-dark-800 rounded-2xl shadow-sm overflow-hidden p-2 border border-dark-600">
               <div className="relative h-[400px] md:h-[500px] mb-2 cursor-pointer" onClick={() => openLightbox(0)}>
                 <img src={images[0]} alt="Main" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute bottom-4 right-4 bg-dark-900/80 text-white px-3 py-1 rounded-full text-sm font-montserrat">
                   + {images.length} fotografií
                 </div>
               </div>
               {/* Thumbnails */}
               <div className="grid grid-cols-4 gap-2">
                 {images.slice(1, 5).map((img, i) => (
                   <div key={i} className="h-24 cursor-pointer" onClick={() => openLightbox(i + 1)}>
                     <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity" />
                   </div>
                 ))}
               </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-dark-800 rounded-2xl shadow-sm p-8 border border-dark-600">
              <h2 className="text-2xl font-bold font-exo mb-6 border-b border-dark-600 pb-4 text-white">Technické parametry</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {basicData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 bg-dark-700 rounded-lg">
                      <img src={item.icon} alt={item.label} className="w-6 h-6 icon-lime" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold font-montserrat">{item.label}</p>
                      <p className="text-white font-semibold font-montserrat">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {car.features && car.features.length > 0 && (
              <div className="bg-dark-800 rounded-2xl shadow-sm p-8 border border-dark-600">
                <h2 className="text-2xl font-bold font-exo mb-6 border-b border-dark-600 pb-4 text-white">Výbava vozidla</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 font-montserrat">
                      <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Price Card */}
              <div className="bg-dark-800 rounded-2xl shadow-lg p-6 border border-dark-600">
                <h1 className="text-2xl font-bold font-exo mb-2 text-white">{car.brand} {car.model}</h1>
                <p className="text-gray-400 mb-6 font-montserrat">{car.year} • {car.mileage.toLocaleString()} km</p>

                <div className="text-4xl font-bold text-lime-400 mb-2 font-exo">
                  {car.price > 0 ? `${car.price.toLocaleString()} Kč` : 'Na dotaz'}
                </div>
                {car.price > 0 && (
                   <p className="text-gray-500 text-sm mb-6 font-montserrat">Možnost odpočtu DPH</p>
                )}

                <div className="space-y-3">
                  <a href="tel:+420702198267" className="block w-full bg-lime-400 text-dark-900 text-center py-4 rounded-xl font-bold uppercase hover:bg-lime-500 transition-colors font-montserrat">
                    +420 702 198 267
                  </a>
                  <Link to="/kontakt" className="block w-full bg-transparent border-2 border-lime-400 text-lime-400 text-center py-4 rounded-xl font-bold uppercase hover:bg-lime-400 hover:text-dark-900 transition-colors font-montserrat">
                    Napsat prodejci
                  </Link>
                </div>
              </div>

              {/* Assurance Card */}
              <div className="bg-dark-700 rounded-2xl p-6 border border-dark-600">
                <h3 className="font-bold mb-4 font-exo text-white">Proč koupit u nás?</h3>
                <ul className="space-y-3 text-sm text-gray-300 font-montserrat">
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> Záruka původu vozidla</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> Výhodné financování na místě</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> Pojištění se slevou</li>
                  <li className="flex items-center"><span className="text-lime-400 mr-2">✓</span> Technická kontrola v ceně</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
           <button className="absolute top-4 right-4 text-white text-4xl">&times;</button>
           <img src={images[lightboxIndex]} alt="Full" className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
           {images.length > 1 && (
             <>
               <button 
                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
                 onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
               >←</button>
               <button 
                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
                 onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
               >→</button>
             </>
           )}
        </div>
      )}

    </div>
  );
};

export default CarDetailPage;